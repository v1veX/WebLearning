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