$(document).ready(function() { // Ждём загрузки страницы
$(".dark-bg").click(function(){    // Событие клика на затемненный фон
$(".feedback").fadeOut(800);    // Медленно убираем всплывающее окно
});

function showPopup() {
$(".feedback").fadeIn(800); // Медленно выводим изображение

}
});
