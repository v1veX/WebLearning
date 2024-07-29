const price = 99.555
const roundedPrice = price.toFixed(1) // округляет число до N знаков после запятой
const presisedPrice = price.toPrecision(1) // округляет число до N знаков с начала числа
const priceAsString = price.toString() // перевод в строку
const priceAsBinary = price.toString(2) // перевод числа в строку с другой системой счисления

// Math object
console.log(Math.random()) // генерация случайного числа
console.log(Math.abs(price)) // получение модуля числа
console.log(Math.pow(2, 10)) // возвеление в степень
console.log(Math.sqrt(16)) // квадратный корень
console.log(Math.cbrt(27)) // кубический корень
console.log(Math.min(1, 2, 3, -5, 6, 100, 1111)) // минимальное число
console.log(Math.max(1, 2, 3, -5, 6, 100, 1111)) // максимальное число

const arr = [1, 2, 3, -5, 6, 100, 1111]
console.log(Math.min(...arr)) // если давать массив, то нужен sread-оператор

console.log(Math.round(-3.49)) // округление до ближайшего целого
console.log(Math.floor(-3.49)) // округление до ближайшего целого ВНИЗ
console.log(Math.ceil(-3.49)) // округление до ближайшего целого ВВЕРХ
console.log(Math.trunc(-3.49)) // округление до ближайшего целого без учета знака (т.е. отрицательные ВВЕРХ, положительные ВНИЗ)

const elHeight = '100px'
console.log(parseInt(elHeight, 10)) // парсит целое число из строки, даже если там есть другие символы
// по умолчанию 10-я система, но еси число записывается как 0XXX, то это будет 16-я система
// parseFloat парсит дробные числа
