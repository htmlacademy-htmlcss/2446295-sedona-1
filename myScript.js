let likeCount = 12;
let liked = false; 

// Функция для обновления счетчика и состояния лайка
function updateLike() {
    if (!liked) {
        likeCount++;
        liked = true;
        document.getElementById("likeButton").style.display = "none"; // Скрываем "непонравилось"
        document.getElementById("likedButton").style.display = "inline"; // Показываем "понравилось"
    } else {
        likeCount--;
        liked = false;
        document.getElementById("likeButton").style.display = "inline"; // Показываем "непонравилось"
        document.getElementById("likedButton").style.display = "none"; // Скрываем "понравилось"
    }
    document.getElementById("likeCounter").innerText = likeCount;
}

// Добавляем обработчик события на нажатие кнопки лайка
document.addEventListener("DOMContentLoaded", function() {
    const likeButton = document.getElementById("likeButton");
    likeButton.addEventListener("click", updateLike);
});