const arr1 = []
const arr2 = new Array()
// Массив может хранить различные типы данных
// массив - это объект в js. А так это структура данных

console.log(arr1[5]) // undefined
console.log(arr1[-1]) // undefined. Отрицательные индексы не работают в массивах

// обращение к элементам стандартное, как в других языках

const arr3 = [1, 2, 'dd', false]
arr3[10] = 'Cool' // да, мы можем добавлять значения на несуществующие индексы
// в некоторых случаях пред этим элементом будут пустые значения

const len = arr3.length // длина массива

console.log(arr3.at(-1)) // другой вид обращения. Поддерживает отриц индексы

// Methods
arr3.push('GGWP') // добавление в конец
arr3.unshift(322) // добавление в начало
console.log(arr3)

const lastElem = arr3.pop() // удаление из конца + возвращает этот элемент
const firstElem = arr3.shift() // удвление из начала + возврат элемента

console.log(arr3.toString()) // простое приведение к строке (не совсем эффективный)
console.log(arr3.join(' ')) // приведение к строке с разделителем

const arr4 = [...arr3] // копирование массива через spread-оператор (можно через slice)

// slice позволяет обрезать массив

const arr5 = ['A', 'B']
const arr6 = ['C', 'D']
let arr5PlusArr6 = [...arr5, ...arr6] // объединение массивов
arr5PlusArr6 = arr5.concat(arr6) // тоже объединение

// сравнение массивов делается через отдельную ф-цию

const someVal = 5
const isArray = Array.isArray(someVal) // проверка является ли массивом

const data = ['Vladimir', 19]

const [name, age] = data // деструктуризация массива

// перебор массива
const letters = ['a', 'b', 'c', 'd', 'e', 'f']

letters.forEach((element, index, array) => {
    console.log(element) // выводим элементы
    console.log(index) // выводим индексы
    // array это просто ссылка на перебираемый массив

    // порядок параметров важен, но использовать можно не все. Чаще всего юзают только первую (но и наличие второй тоже может быть полезно)
    // это касается и дальнейших методов
})

console.log(letters.indexOf('d')) // поиск индекса (-1 если отсутствует)
// lastIndexOf ищет индекс с конца
// также можно добавить индекс начала поиска

letters.findIndex((element, index, array) => {
    if (element.name === 'Vasya') return true
    // подойдет для поиска индекса элемента, если внутри массива могут быть объекты
})

console.log(letters.includes('h')) // входит ли элемент в массив.
// можно добавлять индекс для старта поиска

letters.some((element) => element.name === 'Vasya')
// входит ли объект в массив

letters.every((element) => element.age >= 18)
// если при переборе коллбэк каждый раз вернет true, то результатом будет true

letters.find((element) => element.name === 'Vasya')
// получаем первый элемент, который удовлетворяет условию коллбэка
// получить все элементы можно с помощью filter (это будет массив)

const users = [
    {name: 'Александр', age: 23, city: 'Москва'},
    {name: 'Михаил', age: 34, city: 'Пятигорск'},
    {name: 'Владимир', age: 19, city: 'Владивосток'},
    {name: 'Владислав', age: 43, city: 'Хабаровск'},
    {name: 'Никита', age: 21, city: 'Екатеринославск'},
    {name: 'Ольга', age: 51, city: 'Находка'},
]
const usersFormatted = users.map(({name, age, city}) => {
    return `${name}, ${age} лет, живет в г. ${city}`
})
console.log(usersFormatted)
// map позволяет возвращать отформатированный массив. На каждой итерации метода происходит требуемое нам форматирование

const cities = users.reduce((accumulator, element, index, array) => {
    return `${accumulator} ${element.city}`
}, 'Города:')
console.log(cities)
// reduce - перебор массива с накоплением какого-л значения
// второй аргумент задает начальное значение 
// reduceRight делает перебор массива справа налево

let usersReversed = users.reverse() // переворачивает массив и мутирует его
usersReversed = [...users].reverse() // делаем так, если не хотим изменять изначальный массив

const names = ['Sasha', 'Vasya', 'Vika', 'Zabel', 'Alesha']
const namesSorted = [...names].sort() // сортировка по алфавиту (причем всего)

const nums = [2, 45, 65, 4, -6, 66, 0]
const numsSorted = [...nums].sort((a, b) => a - b)
// сортировка чисел по возрастанию. В коллбэке можно сделать любое условие сортировки
// важно, чтобы возвратом было отриц число, положит число или 0
// отриц результат: a слева, b справа
// 0: не меняет местами
// положит результат: a справа, b слева

const usersByName = [...users].sort(({name: name1}, {name: name2}) => {
    return name1.localeCompare(name2)
})
console.log(usersByName)