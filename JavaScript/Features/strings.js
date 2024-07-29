const str = 'sdasdasd'
console.log(str.length) // длина строки
console.log(str[0]) // обращение к символам строки по их индексу (отрицательных индексов нет, это не Питон)
console.log(str.at(-1)) // то же самое, но тут можно отрицательные индексы

const text = 'AmDjmDkFmFk'
console.log(text.toLowerCase()) // в нижний регистр
console.log(text.toUpperCase()) // в верхний регистр

const mes = '   Hello JS    '
console.log(mes)
console.log(mes.trim()) // обрезает лишние пробелы
// trimStart, trimEnd оюрезает пробелы в начале и конце соотв-но

const mes1 = 'Какое-то сообщение'
console.log(mes1.indexOf('-')) // возвращает индекс первого символа подстроки в строке
// если такой подстроки нет, то возвращает -1
console.log(mes1.includes('ssss')) // проверка вхождения подстроки в строку (true/false)
console.log(mes1.startsWith('ssss')) // проверка, начинается ли строка с данной подстроки
console.log(mes1.endsWith('ssss')) // проверка, заканчивается ли строка данной подстрокой
// в эти методы можно также передать индекс, с которого будет идти поиск

const str1 = 'JavaScript'
console.log(str1.substring(0, 4)) // обрезает строку с позиции начала до позиции конца не включительно
console.log(str1.slice(-6, -1)) // по сути то же самое, но тут можно юзать отрицательные индексы
console.log(str1.repeat(3)) // повторяет строку указанное кол-во раз

console.log(str1.replace('Java', 'Type')) // заменяет первое вхождение подстроки на другую
console.log(str1.replaceAll('Java', 'Type')) // заменяет все вхождения подстроки на другую

const hello = 'Hello, World!'
console.log(hello.split(', '))

// Задача: валидация вводимого значения
const value = prompt('Введите ваше имя:')

const clearValue = value.trim().toLowerCase()

if (clearValue.length === 0) {
    alert('Ошибка! Имя не может быть пустым!')
}

if (clearValue.includes('админ')) {
    alert('Ошибка! Вы не можете использовать слово "админ" во всех его вариациях!')
}

