// объект Date для работы с датой и временем

// пустые скобки означают, что мы берем текущую дату и время
const now = new Date()

// переданное в скобки число соответствует прошедшим миллисекундам с 01.01.1970 UTC+0
const someDate = new Date(34534 * 342355 * 99)
alert(someDate)

// объект даты с заданными параметрами
const customDate = new Date(2024, 6, 18, 22, 49, 30, 458)

// можно получать компоненты даты
const nowYear = now.getFullYear()
const nowMonth = now.getMonth()
const nowDay = now.getDate()
const nowHours = now.getHours() // также и для минут, секунд и т.д.
const nowDayOfWeek = now.getDay() // 0 - воскресенье, 6 - суббота
const nowTimestamp = now.getTime() // возвращает миллисекунды с 01.01.1970

// в объекте Date есть автоисправление, например, если установить 30 февраля то это будет 2 марта (1 марта високосного, это тоже считается автоматически)

// преобразовав объект к числу мы получим timestamp
console.log(+now)

// если мы вычтем один объект из другого, то получим разность времени в миллисекундах
let start = new Date(); // начинаем отсчёт времени

// выполняем некоторые действия
for (let i = 0; i < 1000000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // заканчиваем отсчёт времени

alert( `Цикл отработал за ${end - start} миллисекунд` );

const now2 = Date.now() // количество миллисекунд
alert(now2)

const ms = Date.parse('2023-07-18T23:08:45') // парсит дату из строки, возвращает timestamp