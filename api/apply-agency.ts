import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Persist each application to the internal portal (app.mangova.agency) so the team
// sees them in real time. Best-effort: never blocks or breaks the email flow.
async function persistToPortal(payload: Record<string, unknown>) {
  // Token de una sola capacidad: solo autoriza mandar solicitudes. El anterior
  // (MANGO_INGEST_TOKEN) era una llave maestra que ademas dejaba leer el mapa
  // completo de la red y borrar filas de 12 tablas; no tiene por que vivir en
  // Vercel, que es lo mas expuesto que tenemos (23-ago-2026).
  const token = process.env['MANGO_SOLICITUDES_TOKEN'];
  if (!token) return;
  const url = process.env['PORTAL_INGEST_URL'] || 'https://app.mangova.agency/api/solicitudes';
  try {
    // Limite de tiempo: sin el, un portal que no responde deja la funcion colgada
    // hasta que Vercel la corta, y entonces el correo de abajo NO se envia. El lead
    // se perderia entero, sin fila y sin aviso (2026-08-22).
    const r = await (globalThis as any).fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(5000),
    });
    // fetch no lanza con un 500: hay que mirar el estado o el fallo pasa inadvertido.
    if (!r?.ok) console.error('portal persist rechazo:', r?.status);
  } catch (e: any) {
    console.error('portal persist failed:', e?.message);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { agencyName, instagram, contact, telegram, email, accounts, revenue, challenge, heardFrom } = req.body || {};

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
  const heardLabels: Record<string, string> = {
    chatgpt: 'ChatGPT / AI', google: 'Google', instagram: 'Instagram', tiktok: 'TikTok',
    twitter: 'X / Twitter', reddit: 'Reddit', friend: 'Friend / referral', other: 'Other',
  };
  const heardText = heardLabels[heardFrom] || heardFrom;


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
            ${row('Telegram', telegram)}
            ${row('Email', email)}
            ${row('Accounts to scale', accountsText)}
            ${row('Avg revenue / account', revenueText)}
            ${row('Biggest challenge', challengeText)}
            ${row('Heard about us', heardText || 'Not provided')}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f9f9fb; border-radius: 8px; font-size: 12px; color: #777;">
            Received ${new Date().toISOString()}
          </div>
        </div>
      `,
      text: `New Agency Partnership Application\nAgency: ${agencyName}\nInstagram: ${instagram}\nContact: ${contact}\nTelegram: ${telegram || 'Not provided'}\nEmail: ${email || 'Not provided'}\nAccounts: ${accountsText}\nAvg revenue/account: ${revenueText}\nBiggest challenge: ${challengeText}\nHeard about us: ${heardText || 'Not provided'}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    // El portal se avisa DESPUES del correo, a proposito: el correo es la copia
    // que nunca puede fallar. Si el portal esta caido, el lead llega igual al
    // buzon y solo falta la fila, que se puede recuperar.
    await persistToPortal({ source: 'agency', name: agencyName, email, instagram, contact, telegram, accounts, revenue, challenge, heardFrom });
    return res.status(200).json({ ok: true, id: data?.id });
  } catch (e: any) {
    console.error('Send error:', e?.message);
    return res.status(500).json({ error: 'Internal error' });
  }
}
