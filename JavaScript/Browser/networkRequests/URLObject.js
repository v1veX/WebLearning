new URL(url, [base]);
/*
url – полный URL-адрес или только путь, если указан второй параметр,
base – необязательный «базовый» URL: если указан и аргумент url содержит только путь, то адрес будет создан относительно него
*/

let url1 = new URL('https://javascript.info/profile/admin');
let url2 = new URL('/profile/admin', 'https://javascript.info');
// url1 == url2

let newUrl = new URL('tester', url1);

alert(newUrl); // https://javascript.info/profile/tester

// Объект URL даёт доступ к компонентам URL
// а именно:
/* 
protocol - протокол, заканчивается символом двоеточия :
hostname - доменное имя
port - порт
host - hostname и port вместе
origin
pathname - путь после origin
search - строка параметров, начинается с вопросительного знака ?
hash - начинается с символа #
href - это полный URL-адрес, то же самое, что url.toString()
*/

// Мы можем использовать объект URL в методах fetch или XMLHttpRequest и почти во всех других, где ожидается URL-строка


// Объект URL имеет свойство searchParams для работы с параметрами запроса
// Его методы:
/* 
append(name, value) – добавить параметр по имени,
delete(name) – удалить параметр по имени,
get(name) – получить параметр по имени,
getAll(name) – получить все параметры с одинаковым именем name (такое возможно, например: ?user=John&user=Pete),
has(name) – проверить наличие параметра по имени,
set(name, value) – задать/заменить параметр,
sort() – отсортировать параметры по имени, используется редко
*/
// Является перебираемым, аналогично Map