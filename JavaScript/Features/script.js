// Урок 1
console.log('Hi!') // тут все понятно

// Урок 2
let message = 'Hello'

console.log(message)

message = 'Goodbye'

console.log(message)

// для переменных var есть прикол: к ним можно обратиться до того как они определены
// const - переменная, значение которой нелья изменить после ее определения (как и во всех языках собственно)

// 'use strict' - включает строгий режим, ограничивающий использование хреновых моментов (например, не дает объявить переменную
// без слов var, let, const), а также отключает устаревший функционал

// переменная не должна начинаться с цифры. 1myVar - неправильно

// рекомендуется именовать переменные в camelCase
// для констант иногда используют SCREAMING_SNAKE_CASE

// Урок 3

// string
const nameA = 'ABOBA'
const greeting = "Hello Mr."

const message2 = `${greeting} ${nameA}!` // так выглядят f-строки
console.log(message2)

// number
const x = 1
const y = 2.2
const z = -333.333

const r = 1_000_000_000 // можно писать так, например выделять разряды в больших числах

// bigInt
const a = 236234230423059235n
const b = 231487234823124967329n + 23n

// boolean
let isTrue = true
isTrue = false

// null
let nn = null

// undefined
let def
console.log(def) // будет выведено undefined

// object
const user = {
    name: 'Alex',
    age: 12
}

// typeof - позволяет определить тип данных перемнной

// преобразование типов данных
const num = 111
const str = '222'
const result = num + str
console.log(typeof result) // выведет string, т.к. произошло неявное преобразование переменной num в строку

console.log(typeof ('16' / '8')) // выведет number - произошло неявное преобразование строк в числа

const age = 11
const ageStr = String(age) // явное преобразование переменной в строку
const ageNum = Number(ageStr) // явное преобразование в число (если что-то не похоже на число, то результат будет NaN)
const ageBool = Boolean(age) // явно преобразование в bool. Все, что != 0 или пустой строке - true

// Урок 4

const power = 2 ** 10 // возведение в степень
const ostatok = 5 % 2 // остаток от деления
const w = +true // унарный оператор + приводит к числовому типу

// упрощенные операторы
let count = 1
count += 1 // так же и для - * / и тд
count--
count++
let newCount = ++count // инкрементируем count, а затем присваеваем его значение другой переменной
newCount = count++ // призваиваем значение count другой переменной, а затем инкрементируем count

console.log(2 == '2') // true - js попытался привести к одному типу данных и у него это получилось
console.log(2 === '2') // false - строгое сравнение без приведения к одному типу данных (стоит использовать именно его)

// Урок 5

// стандартный if-else

// тернарный оператор
const year = 2024
const message3 = year === 2024 ? 'Начинаю учиться!' : 'Нет :/'

// || = or, && - and, ! - not

// !! - сокращение Boolean()

// оператор нулевого слияния
const a1 = null
const b2 = 100
const res = a1 ?? b1 // если левая часть от ?? равна null или undefined, то переменной присвоится значение справа от ??

// Урок 6
alert('Whasup , nigga!')
const promptInput = prompt('How old are you?') // если пользователь введет что-либо, то это значение запишется в переменную, а если нажмет Отмену, то присвоится null
const isReady = confirm('Are you ready?') // возвращает true/false

//switch-case (стандартный для Си-подобных языков)
const ageS = 56
switch (ageS) {
    case 0: {
        console.log('SSSSSSSSS')
        break
    }
    case 10: {
        console.log('UFFFF')
        break
    }
    default: {
        console.log(ageS)
    }
}

// Урок 7

// while, do while, for - стандартные для Си-подобных языков

// то же и с break и continue

// Урок 8

// Функции
// Все стандартно, за исключением того, что в параметрах функций можно устанавливать значения по умолчанию

// Урок 9

// Function Expression
let logHello = function() {
    console.log('Hello World!')
}

// Arrow Function
logHello = (name) => {
    console.log(`Hi, ${name}! I am an Arrow Function!`)
}

const sum = (a, b) => a + b
console.log(sum(228, 1337))

// Callbacks (функции, передаваемые в качестве параметров другой функции)

const logMessage = (actionBefore, actionAfter) => {
    actionBefore()
    console.log('Hello')
    actionAfter()
}

const fn1 = () => console.log('Action before...')
const fn2 = () => console.log('Action after...')

logMessage(fn1, fn2)

// Функции могут быть возвращены другой функцией

const validate = (hasAccess) => {
    hasAccess
    ? () => console.log('Access!')
    : () => console.log('No access :(')
}

const logMes = validate(true)
logMes()

// Урок 12

// this
// используется для обращения к свойствам объекта. С его помощью можно создавать новые свойства в методах объекта и не только
// также в методах объекта можно указывать return this, чтобы вызывать его методы через  optional chaining