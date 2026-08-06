import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Persist each application to the internal portal (app.mangova.agency) so the team
// sees them in real time. Best-effort: never blocks or breaks the email flow.
async function persistToPortal(payload: Record<string, unknown>) {
  const token = process.env['MANGO_INGEST_TOKEN'];
  if (!token) return;
  const url = process.env['PORTAL_INGEST_URL'] || 'https://app.mangova.agency/api/solicitudes';
  try {
    await (globalThis as any).fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(payload),
    });
  } catch (e: any) {
    console.error('portal persist failed:', e?.message);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { agencyName, instagram, contact, email, accounts, revenue, challenge } = req.body || {};

  if (!agencyName || !instagram || !contact || !accounts || !revenue || !challenge) {
    return res.status(400).json({ error: 'Required fields missing' });
  }

  const accountLabels: Record<string, string> = {
    '1': '1 account',
    '2-5': '2–5 accounts',
    '5-10': '5–10 accounts',
    '10-plus': '10+ accounts',
  };
  const revenueLabels: Record<string, string> = {
    'under-5k': 'Under $5k/month',
    '5k-20k': '$5k–$20k/month',
    '20k-50k': '$20k–$50k/month',
    '50k-100k': '$50k–$100k/month',
    '100k-plus': '$100k+/month',
  };
  const challengeLabels: Record<string, string> = {
    'low-revenue': 'Low revenue per model',
    'no-spend': 'Fans subscribe but don’t spend',
    'stop-spending': 'Buyers stop spending too quickly',
    'inconsistent': 'Inconsistent chatting quality',
    'weak-retention': 'Weak retention and renewals',
    'no-system': 'No structured chatting system',
    'scaling': 'Scaling monetization across multiple models',
    'no-control': 'Lack of control over chatting performance',
    'other': 'Other',
  };
  const accountsText = accountLabels[accounts] || accounts;
  const revenueText = revenueLabels[revenue] || revenue;
  const challengeText = challengeLabels[challenge] || challenge;

  // Real-time copy to the internal portal (best-effort; the email below is unaffected).
  await persistToPortal({ source: 'agency', name: agencyName, email, instagram, contact, accounts, revenue, challenge });

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #777; width: 160px; vertical-align: top;">${label}</td>
      <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 14px; line-height: 1.5; font-weight: 500;">${value || '—'}</td>
    </tr>`;

  try {
    const { data, error } = await resend.emails.send({
      from: 'MANGO Agency <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO || 'mangova.agency@gmail.com'],
      replyTo: email || undefined,
      subject: `Agency Partnership — ${agencyName} (${accountsText}, ${revenueText})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; max-width: 580px; margin: 0 auto; color: #1a1c1d;">
          <div style="border-bottom: 2px solid #000; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 18px; font-weight: 900; letter-spacing: -0.5px; margin: 0;">MANGO</h1>
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #777; margin: 4px 0 0;">New Agency Partnership Application</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            ${row('Agency / Brand', agencyName)}
            ${row('Instagram / Page', instagram)}
            ${row('Contact', contact)}
            ${row('Email', email)}
            ${row('Accounts to scale', accountsText)}
            ${row('Avg revenue / account', revenueText)}
            ${row('Biggest challenge', challengeText)}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f9f9fb; border-radius: 8px; font-size: 12px; color: #777;">
            Received ${new Date().toISOString()}
          </div>
        </div>
      `,
      text: `New Agency Partnership Application\nAgency: ${agencyName}\nInstagram: ${instagram}\nContact: ${contact}\nEmail: ${email || 'Not provided'}\nAccounts: ${accountsText}\nAvg revenue/account: ${revenueText}\nBiggest challenge: ${challengeText}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (e: any) {
    console.error('Send error:', e?.message);
    return res.status(500).json({ error: 'Internal error' });
  }
}
