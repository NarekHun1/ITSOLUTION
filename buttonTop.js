// Получаем кнопку
const scrollBtn = document.getElementById("scrollToTopBtn");

// Отслеживаем прокрутку и показываем/скрываем кнопку
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

// При клике — прокрутка вверх
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
