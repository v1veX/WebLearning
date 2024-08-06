// Есть два способа отменить действие браузера при каком-либо событии
event.preventDefault();
// или
elem.onclick = () => {
    return false; // возвращаем false из обработчика
};

// passive: true для addEventListener сигнализирует браузеру, что обработчик не собирается выполнять preventDefault()

event.defaultPrevented // true, если действие по умолчанию было предотвращено, и false, если нет

