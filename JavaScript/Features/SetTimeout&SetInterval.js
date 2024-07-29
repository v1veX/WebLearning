// setTimeout

setTimeout( someFunction, 2000 /* milliseconds */);

const f = (value, message) => {
    console.log(`value: ${value}, message: ${message}.`);
}

const timerId = setTimeout( f, 2000, 23, 'Hello'); // 3-й и последующие параметры, это параметры, которые мы передаем в функцию
// записывая setTimeout в переменную, мы получаем айди таймера
// затем через этот айди мы можем отменить выполнение
clearTimeout(timerId);

// setInterval
// такой же синтаксис

const intervalId = setInterval( f, 1000, 23, 'Hello');

clearInterval(intervalId);

// в комбинации с setTimeout можно отменить интервал через определенное время

// setInterval не гарантирует, что переданная функция отработает быстрее, чем закончится время
// в таком случае стоит воспользоваться вложенным setTimeout:
setTimeout(function logMessage() {
    alert('Message once in a second');

    setTimeout(logMessage, 1000);
}, 1000);