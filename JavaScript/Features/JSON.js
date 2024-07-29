const user = {
    name: 'Vladimir',
    age: 19,
    city: 'Vladivostok',
    address: {
        street: 'Derzhavina str., 21, room 701',
        zipcode: 123456
    },
    todos: ['eat', 'sleep', 'code'],
    hasCar: false,
    yacht: null,
}

const userDataAsString = JSON.stringify(user)
// приведение JS объекта в JSON объект
console.log(userDataAsString)

const parsedUserData = JSON.parse(userDataAsString)
// парсинг JSON объекта в JS объект
console.log(parsedUserData)

const invalidJSON = `
{
    "name": "Vladimir",
    "age": 19,
    "city": "Vladivostok",
    "address": {
        "street": "Derzhavina str., 21, room 701",
        "zipcode": 123456
    },
    "todos": ["eat", "sleep", "code"],
    "hasCar": false,
    "yacht": null,
}
`
// если JSON объект невалиден, то будет выбиваться ошибка

// наверное это можно обрабатывать через try-catch
try {
    console.log(JSON.parse(invalidJSON))
} catch (error) {
    console.log('Something went wrong')
}