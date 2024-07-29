const emptyObject = {} // пустой объект
const emptyObject2 = new Object() // тоже пустой объект

// Это набор пар ключ-значение
const user = {
    login: 'iamsuperhero',
    password: 'qwerty123',
    sayHi: () => console.log('Hi!')
}

// Варианты обращения к свойствам объекта
console.log(user.login)
console.log(user['password'])
// Вызов метода объекта (ну прям уже почти ООП)
user.sayHi()

// Создание свойств объекта вручную
const uzver = {}

uzver.name = 'Volodimir'
uzver['is developer'] = true

console.log(uzver)

delete uzver['is developer'] // удаление свойств
console.log(uzver)

// сокращенная запись объектов (когда имя переменной совпадает с именем свойства объекта)
const Name = 'Sashka'
const age = 54

const user2 = {Name, age}

//
const nameOfField = 'blblblblb'
const obj = {
    [nameOfField]: age // [] - позволяют задать имя свойства из какой-л. переменной
}

// Проверка наличия свойства с определенным именем в объекте
const isInObj = 'isDeveloper' in obj // false

// Перебор свойств объекта
for (const key in user) { // key в данном случае это конкретно имя, т.е. в цикле идет перебор ИМЕН свойств
    console.log(key)
    console.log(user[key]) // мы делаем так, если нам надо обратиться к значению свойства
}

// Note: объекты - это ссылочный тип данных (как в Питоне)

// Копирование объекта
const obj1 = {name: 'Vasya', age: 35}
const obj2 = Object.assign({}, obj1)
// или 
const obj3 = {...obj1}

// сравнение объектов делается через отдельные ф-ции, а с глубоким сравнением ваще забел (юзаем либу lodash)

// С помощью Object.assign можно поверхностно объединять объекты. Если имена каких-л сво-в совпадут,
// то будет применено последнее значение 

console.log(obj3?.address)
// ?. проверяет есть ли такое свойство у объекта и является ли переменная объектом вообще (Optional Chaining)

// Деструктуризация объекта
const {name, address} = obj3

const {name: gug} = obj3 // конечное имя переменной - gug
const {city = 'Не указан'} = obj3 // значение по умолчанию, в случае undefined или null

const {name: userName, age: userAge, ...otherInfo} = obj3 // otherInfo - это остаточные параметры. Используется,
// например, если часть параметров гарантированно существует, а остальная часть может и отсутствовать. Это будет объект

// перебор объектов

const user3 = {
    name: 'Galya',
    age: 58,
    city: 'Moscow',
}

const userKeys = Object.keys(user3) // получение массива строк имен св-в объекта
const userValues = Object.values(user3) // получение массива значений св-в объекта
const userEntries = Object.entries(user3) // получение массива св-в объекта, где каждое св-во представлено как массив [имяСвойства, значениеСвойства]
// все это можно перебрать методами массивов
const user4 = Object.fromEntries(userEntries) // создание объекта из entries
