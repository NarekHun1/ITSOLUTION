document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const buttons = document.querySelectorAll(".btn-order");
    const close = document.querySelector(".close");

    // Открытие формы
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "block";
        });
    });

    // Закрытие формы
    close.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Отправка данных в Telegram
    document.getElementById("order-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const botToken = '8026491620:AAE3qaSoZcsHuCwFyazbiuQ1f40vHfdlccs';  // Замени на свой токен бота
        const chatId = 934669069;  // Замени на свой Chat ID
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim() || "Нет сообщения";

        if (!name || !phone) {
            alert("Пожалуйста, заполните все поля!");
            return;
        }

        const text = `📝 *Новая заявка!*\n\n👤 *Имя:* ${name}\n📧 *Email:* ${email}\n📞 *Телефон:* ${phone}\n💬 *Сообщение:* ${message}`
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: text, parse_mode: "Markdown" })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Заявка успешно отправлена!");
                modal.style.display = "none";
                document.getElementById("order-form").reset();
            } else {
                alert("Ошибка при отправке: " + data.description);
            }
        })
        .catch(error => {
            alert("Ошибка сети! Проверьте интернет.");
            console.error(error);
        });
    });
});
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform =` translateX(-${slideIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Инициализация слайдера
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});



// Открыть модалку
function openCallModal() {
    document.getElementById("callModal").style.display = "block";
}

// Закрыть модалку
function closeCallModal() {
    document.getElementById("callModal").style.display = "none";
}

// Отправка формы в Telegram
document.getElementById("callForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("callback-name").value.trim();
    const phone = document.getElementById("callback-phone").value.trim();

    const message = `📞 <b>Новая заявка на звонок</b>\n👤 Имя: ${name}\n📱 Телефон: ${phone}`;

    const token = '8026491620:AAE3qaSoZcsHuCwFyazbiuQ1f40vHfdlccs';       // ← сюда твой токен
    const chat_id = "934669069";       // ← сюда твой chat_id

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message,
            parse_mode: "HTML"
        })
    })
        .then(response => {
            if (response.ok) {
                alert("✅ Заявка отправлена !");
                closeCallModal();
                document.getElementById("callForm").reset();
            } else {
                alert("❌ Ошибка при отправке.");
            }
        })
        .catch(() => alert("❌ Ошибка сети."));
});


function closeModal() {
    document.getElementById("modal").style.display = "none";
}


window.addEventListener("click", function (e) {
    const modal = document.getElementById("modal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
