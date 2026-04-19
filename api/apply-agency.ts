import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { agencyName, models, revenue, handle, looking, contact } = req.body || {};

  if (!agencyName || !models || !handle || !looking || !contact) {
    return res.status(400).json({ error: 'Required fields missing' });
  }

  const modelsLabels: Record<string, string> = {
    '1-3': '1–3 models',
    '4-10': '4–10 models',
    '10-plus': '10+ models',
  };
  const handleLabels: Record<string, string> = {
    'traffic': 'Traffic',
    'chatting': 'Chatting',
    'both': 'Both',
  };
  const modelsText = modelsLabels[models] || models;
  const handleText = handleLabels[handle] || handle;

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
      subject: `Agency Application — ${agencyName} (${modelsText})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; max-width: 560px; margin: 0 auto; color: #1a1c1d;">
          <div style="border-bottom: 2px solid #000; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 18px; font-weight: 900; letter-spacing: -0.5px; margin: 0;">MANGO</h1>
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #777; margin: 4px 0 0;">New Agency Application</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            ${row('Agency', agencyName)}
            ${row('Models', modelsText)}
            ${row('Monthly Revenue', revenue || 'Not provided')}
            ${row('Currently handles', handleText)}
            ${row('Looking for', (looking || '').replace(/\n/g, '<br>'))}
            ${row('Contact', contact)}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f9f9fb; border-radius: 8px; font-size: 12px; color: #777;">
            Received ${new Date().toISOString()}
          </div>
        </div>
      `,
      text: `New Agency Application\nAgency: ${agencyName}\nModels: ${modelsText}\nRevenue: ${revenue || 'Not provided'}\nHandles: ${handleText}\nLooking for: ${looking}\nContact: ${contact}`,
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
