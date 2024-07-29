// Map
const data = new Map([
    [1, 'Один как число'],
    ['1', 'Один как строка'],
])
// создание коллекции Map. Важно, что это набор пар "ключ-значение"
// почти как объект, но тут есть гибкость в имени ключа (хотя нахер оно надо?)
// ключом может быть даже объект

data.set(2, 'Два как число')
// добавление значения в коллекцию
console.log(data)

console.log(data.get(1))
console.log(data.get('1'))
// обращение к элементам коллекции по их ключу

console.log(data.has('1')) // проверка на существование элемента с таким ключом

data.delete(2) // удаление элемента по его ключу
console.log(data.has(2)) // false

//data.clear() полное очищение Map

console.log(data.size) // размер коллекции (аналог length у массивов)

// как и к объектам, к Map применимы методы keys, values и entries, но перебираются они иначе, через цикл for...of
for (const key of data.keys()) {
    console.log('key:', key)
}

// перебор через forEach
data.forEach((value, key, map) => {
    console.log('value:', value)
    console.log('key:', key)
    console.log('map:', map)
})

// из объекта можно получить Map так:
let obj = {
    name: 'ABOBA',
    age: 25,
}

let map = new Map(Object.entries(obj))

// а вот наоборот:
map = new Map([
    ['name', 'Alex'],
    ['age', 23],
])

obj = Object.fromEntries(map)


// Set
const set = new Set([1, 2, 2, 2, 3])
// Набор уникальных значений

set.add(4) // добавление в Set

// также применимы методы delete, has, clear и св-во size
// а также keys, values и entries, причем key == value, а entries это [key, value]
// Это сделано для обратной совместимости с Map
// перебор такой же как и у Map