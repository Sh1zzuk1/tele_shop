function showCatalog(catalogId) {
    document.getElementById('catalog1').classList.remove('active');
    document.getElementById('catalog2').classList.remove('active');

    document.getElementById(catalogId).classList.add('active');
}

// Получаем цвета из Telegram (предполагается, что они будут переданы при инициализации веб-страницы)
document.documentElement.style.setProperty('--telegram-background-color', '#f0f0f0'); // Замените на реальный цвет из Telegram
document.documentElement.style.setProperty('--telegram-button-color', '#6200ea'); // Замените на реальный цвет из Telegram
document.documentElement.style.setProperty('--telegram-button-hover-color', '#3700b3'); // Замените на реальный цвет при наведении
