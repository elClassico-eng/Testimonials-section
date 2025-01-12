const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalAvatar = document.getElementById("modal-avatar");
const modalName = document.getElementById("modal-name");
const modalPosition = document.getElementById("modal-position");
const closeButton = document.querySelector(".close-btn");
const modalTitle = document.querySelector(".modal-title");
const modalDescription = document.querySelector(".modal-description");

// Функция для открытия модального окна
function openModal(card) {
    const avatarSrc = card.querySelector("img").src;
    const name = card.querySelector("h3").textContent;
    const position = card.querySelector("p").textContent;
    const title = card.querySelector("h2").textContent;
    const description = card.querySelector(".card-description").textContent;

    modalAvatar.src = avatarSrc;
    modalName.textContent = name;
    modalPosition.textContent = position;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.style.display = "flex"; // Показываем модальное окно
}

// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = "none"; // Скрываем модальное окно
}

// Добавляем обработчики событий для карточек
cards.forEach((card) => {
    card.addEventListener("click", () => openModal(card));
});

// Добавляем обработчик события для кнопки закрытия
closeButton.addEventListener("click", closeModal);

// Закрытие модального окна при клике вне его содержимого
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

modal.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        closeModal();
    }
});
