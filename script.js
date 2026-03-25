// document.addEventListener("DOMContentLoaded", function() {
//     const modal = document.getElementById("modal");
//     const buttons = document.querySelectorAll(".btn-order");
//     const close = document.querySelector(".close");
//
//     // Открытие формы
//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             modal.style.display = "block";
//         });
//     });
//
//     // Закрытие формы
//     close.addEventListener("click", () => {
//         modal.style.display = "none";
//     });
//
//     window.addEventListener("click", (event) => {
//         if (event.target === modal) {
//             modal.style.display = "none";
//         }
//     });
//
//     // Отправка данных в Telegram
//     document.getElementById("order-form").addEventListener("submit", function(event) {
//         event.preventDefault();
//
//         const botToken = '8026491620:AAE3qaSoZcsHuCwFyazbiuQ1f40vHfdlccs';  // Замени на свой токен бота
//         const chatId = 934669069;  // Замени на свой Chat ID
//         const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
//
//         const name = document.getElementById("name").value.trim();
//         const email = document.getElementById("email").value.trim();
//         const phone = document.getElementById("phone").value.trim();
//         const message = document.getElementById("message").value.trim() || "Нет сообщения";
//
//         if (!name || !phone) {
//             alert("Пожалуйста, заполните все поля!");
//             return;
//         }
//
//         const text = `📝 *Новая заявка!*\n\n👤 *Имя:* ${name}\n📧 *Email:* ${email}\n📞 *Телефон:* ${phone}\n💬 *Сообщение:* ${message}`
//         fetch(url, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ chat_id: chatId, text: text, parse_mode: "Markdown" })
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.ok) {
//                 alert("Заявка успешно отправлена!");
//                 modal.style.display = "none";
//                 document.getElementById("order-form").reset();
//             } else {
//                 alert("Ошибка при отправке: " + data.description);
//             }
//         })
//         .catch(error => {
//             alert("Ошибка сети! Проверьте интернет.");
//             console.error(error);
//         });
//     });
// });
// let slideIndex = 0;
//
// function showSlide(index) {
//     const slides = document.querySelectorAll('.slide');
//     const totalSlides = slides.length;
//     if (index >= totalSlides) {
//         slideIndex = 0;
//     } else if (index < 0) {
//         slideIndex = totalSlides - 1;
//     } else {
//         slideIndex = index;
//     }
//     const sliderContainer = document.querySelector('.slider-container');
//     sliderContainer.style.transform =` translateX(-${slideIndex * 100}%)`;
// }
//
// function moveSlide(step) {
//     showSlide(slideIndex + step);
// }
//
// // Инициализация слайдера
// document.addEventListener('DOMContentLoaded', () => {
//     showSlide(slideIndex);
// });
//
//
//
// // Открыть модалку
// function openCallModal() {
//     document.getElementById("callModal").style.display = "block";
// }
//
// // Закрыть модалку
// function closeCallModal() {
//     document.getElementById("callModal").style.display = "none";
// }
//
// // Отправка формы в Telegram
// document.getElementById("callForm").addEventListener("submit", function(e) {
//     e.preventDefault();
//
//     const name = document.getElementById("callback-name").value.trim();
//     const phone = document.getElementById("callback-phone").value.trim();
//
//     const message = `📞 <b>Новая заявка на звонок</b>\n👤 Имя: ${name}\n📱 Телефон: ${phone}`;
//
//     const token = '8026491620:AAE3qaSoZcsHuCwFyazbiuQ1f40vHfdlccs';       // ← сюда твой токен
//     const chat_id = "934669069";       // ← сюда твой chat_id
//
//     fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             chat_id: chat_id,
//             text: message,
//             parse_mode: "HTML"
//         })
//     })
//         .then(response => {
//             if (response.ok) {
//                 alert("✅ Заявка отправлена !");
//                 closeCallModal();
//                 document.getElementById("callForm").reset();
//             } else {
//                 alert("❌ Ошибка при отправке.");
//             }
//         })
//         .catch(() => alert("❌ Ошибка сети."));
// });
//
//
// function closeModal() {
//     document.getElementById("modal").style.display = "none";
// }
//
//
// window.addEventListener("click", function (e) {
//     const modal = document.getElementById("modal");
//     if (e.target === modal) {
//         modal.style.display = "none";
//     }
// });
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const cursorGlow = document.getElementById('cursorGlow');
const navLinks = Array.from(document.querySelectorAll('nav a, .mobile-menu a'));
const sections = Array.from(document.querySelectorAll('main section[id]'));
const heroVisual = document.getElementById('heroVisual');
const tiltCards = document.querySelectorAll('.tilt-card');
const counters = document.querySelectorAll('.stat-number');
const revealItems = document.querySelectorAll('.reveal');
const contactForm = document.querySelector('.form');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            menuToggle.classList.remove('active');
        });
    });
}

window.addEventListener('mousemove', (e) => {
    if (!cursorGlow || window.innerWidth <= 760) return;
    cursorGlow.style.transform = `translate(${e.clientX - 110}px, ${e.clientY - 110}px)`;
});

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    },
    { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute('id');
            document.querySelectorAll('nav a').forEach((link) => {
                link.classList.toggle('active-link', link.getAttribute('href') === `#${id}`);
            });
        });
    },
    { threshold: 0.5 }
);

sections.forEach((section) => sectionObserver.observe(section));

tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 1100) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = ((y / rect.height) - 0.5) * -8;
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

const counterObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            if (el.dataset.done) return;
            el.dataset.done = '1';

            const raw = el.textContent.trim();
            const digits = raw
                .split('')
                .filter((ch) => ch >= '0' && ch <= '9')
                .join('');
            const value = parseInt(digits, 10);
            if (!value) return;

            const suffix = raw
                .split('')
                .filter((ch) => !(ch >= '0' && ch <= '9'))
                .join('');

            const duration = 1200;
            const start = performance.now();

            const tick = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const current = Math.floor(value * (1 - Math.pow(1 - progress, 3)));
                el.textContent = `${current}${suffix}`;
                if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
        });
    },
    { threshold: 0.5 }
);

counters.forEach((counter) => counterObserver.observe(counter));

window.addEventListener(
    'scroll',
    () => {
        const y = window.scrollY * 0.08;
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${Math.min(y, 28)}px)`;
        }
    },
    { passive: true }
);

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const button = contactForm.querySelector('button[type="submit"]');
        if (!button) return;

        const originalText = button.textContent;
        button.textContent = 'Request Sent';
        button.disabled = true;

        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            contactForm.reset();
        }, 1800);
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 760 && mobileMenu && menuToggle) {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('active');
    }
});
