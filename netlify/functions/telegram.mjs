export default async (req) => {
  const json = (data, status = 200) =>
    new Response(JSON.stringify(data), {
      status,
      headers: { "Content-Type": "application/json" },
    });

  if (req.method !== "POST") {
    return json({ success: false, error: "Method not allowed" }, 405);
  }

  try {
    const { name, phone, course, message } = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return json({ success: false, error: "Env variables topilmadi" }, 500);
    }

    const text =
      `📩 Yangi ariza\n\n` +
      `👤 Ism: ${name}\n` +
      `📞 Telefon: ${phone}\n` +
      `📚 Kurs: ${course}\n` +
      `💬 Xabar: ${message || "-"}`;

    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    const data = await tg.json();

    if (!data.ok) {
      return json({ success: false, error: data.description }, 500);
    }

    return json({ success: true });
  } catch (err) {
    return json({ success: false, error: err.message }, 500);
  }
};