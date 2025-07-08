document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("telegram-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const botToken = '8026491620:AAE3qaSoZcsHuCwFyazbiuQ1f40vHfdlccs';  // Токен вашего бота
        const chatId = 934669069; // Ваш Chat ID
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const name = document.getElementById("tg-name").value.trim();
        const email = document.getElementById("tg-email").value.trim();
        const phone = document.getElementById("tg-phone").value.trim();
        const message = document.getElementById("tg-message").value.trim();

        if (!name || !email || !phone || !message) {
            alert("Пожалуйста, заполните все поля!");
            return;
        }

        const text = `📝 *Новая заявка*\n\n` +
            `👤 *Имя:* ${name}\n` +
            `📧 *Email:* ${email}\n` +
            `📞 *Телефон:* ${phone}\n` +
            `💬 *Сообщение:* ${message}`;

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: "Markdown"
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert("Заявка успешно отправлена!");
                    form.reset();
                } else {
                    alert("Ошибка при отправке: " + data.description);
                }
            })
            .catch(error => {
                alert("Ошибка сети! Проверьте подключение.");
                console.error(error);
            });
    });
});


document.getElementById("feature-3-button").addEventListener("click", function() {
    document.getElementById("request-section").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("feature-1-button").addEventListener("click", function() {
    document.getElementById("request-section").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("feature-2-button").addEventListener("click", function() {
    document.getElementById("request-section").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("ai-button").addEventListener("click", function() {
    document.getElementById("request-section").scrollIntoView({ behavior: "smooth" });
});
