const clean = (value, max = 2000) => String(value ?? '').trim().slice(0, max);

export default async function handler(request, response) {
    if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' });

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) return response.status(503).json({ error: 'Inquiry service is not configured' });

    const body = request.body ?? {};
    const name = clean(body.name, 120);
    const email = clean(body.email, 180);
    const idea = clean(body.idea, 3500);
    if (!name || !email || !idea) return response.status(400).json({ error: 'Required fields are missing' });

    const text = [
        '🚀 NEW PROJECT REQUEST', '', `👤 Name: ${name}`, `🏢 Company: ${clean(body.company, 180) || 'Not provided'}`,
        `📩 Work email: ${email}`, `📞 Contact: ${clean(body.contact, 180) || 'Not provided'}`, '',
        `💻 Project Type: ${clean(body.type, 180)}`, `💰 Budget: ${clean(body.budget, 80)}`,
        `⏱ Timeline: ${clean(body.timeline, 80)}`, '', '📝 Project brief:', idea,
    ].join('\n');

    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
    });
    if (!telegramResponse.ok) return response.status(502).json({ error: 'Message delivery failed' });
    return response.status(200).json({ ok: true });
}
