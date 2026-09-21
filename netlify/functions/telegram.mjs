export default async (request) => {
    // Faqat POST
    if (request.method !== "POST") {
        return new Response(
            JSON.stringify({
                success: false,
                message: "Method not allowed"
            }),
            {
                status: 405,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }

    try {
        // Environment variables
        const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
        const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

        if (!BOT_TOKEN || !CHAT_ID) {
            console.error("Telegram environment variables are missing");

            return new Response(
                JSON.stringify({
                    success: false,
                    message: "Server configuration error"
                }),
                {
                    status: 500,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
        }

        // JSON olish
        let data;

        try {
            data = await request.json();
        } catch {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: "Invalid JSON"
                }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
        }

        const name = String(data?.name || "").trim();
        const phone = String(data?.phone || "").trim();
        const course = String(data?.course || "").trim();
        const message = String(data?.message || "").trim();

        // Validation
        if (!name || !phone || !course) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: "Required fields are missing"
                }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
        }

        // Telegram xabari
        const telegramMessage = [
            "📩 YANGI ARIZA",
            "",
            `👤 Ism: ${name}`,
            `📞 Telefon: ${phone}`,
            `📚 Kurs: ${course}`,
            "",
            `💬 Xabar: ${message || "Xabar yozilmagan"}`,
            "",
            `🌐 Sayt: ILM MARKAZI`
        ].join("\n");

        // Telegram API
        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: telegramMessage
                })
            }
        );

        const telegramResult = await telegramResponse.json();

        if (!telegramResponse.ok || !telegramResult.ok) {
            console.error(
                "Telegram API error:",
                telegramResult
            );

            return new Response(
                JSON.stringify({
                    success: false,
                    message: "Telegram API error"
                }),
                {
                    status: 502,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
        }

        return new Response(
            JSON.stringify({
                success: true,
                message: "Application sent successfully"
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

    } catch (error) {
        console.error(
            "Telegram function error:",
            error
        );

        return new Response(
            JSON.stringify({
                success: false,
                message: "Internal server error"
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }
};
