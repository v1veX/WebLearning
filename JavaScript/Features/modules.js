// Что такое модуль?
// Модуль – это просто файл. Один скрипт – это один модуль

// Чтобы работал import/export, нужно для браузеров указывать атрибут <script type="module">

// export
// указываем это ключевое слово перед тем, что будет использовано в других модулях

// экспорт массива
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// экспорт константы
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// экспорт класса
export class User {
  constructor(name) {
    this.name = name;
  }
}

// import

// если нужно импортировать немного
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

// если нужно импортировать все, при этом записав все в объект
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');

// можно использовать as для переименования

// import {sayHi as hi, sayBye as bye} from './say.js';
// export {sayHi as hi, sayBye as bye};

// export default когда нужно экспортировать что-то одно
// export default class User { // просто добавьте "default"
//     constructor(name) {
//       this.name = name;
//     }
// }

// затем импортируем так
// import User from './user.js'; // не {User}, просто User

// динамический импорт

// Выражение import(module) загружает модуль и возвращает промис, результатом которого становится объект модуля, содержащий все его экспорты.

// Пример
// let modulePath = prompt("Какой модуль загружать?");

/* import(modulePath)
  .then(obj => <объект модуля>)
  .catch(err => <ошибка загрузки, например если нет такого модуля>) */