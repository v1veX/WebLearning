// classes

let a = elem.className; // значение атрибута class у элемента

let b = elem.classList; // спец объект с методами

elem.classList.add/remove("class"); // добавить/удалить класс.
elem.classList.toggle("class"); // добавить класс, если его нет, иначе удалить.
elem.classList.contains("class"); // проверка наличия класса, возвращает true/false.

// style

// ничего сложного
document.body.style.backgroundColor = '#066bc6';
// для удаления свойства устанавливаем ему пустую строку

let c = getComputedStyle(element, [pseudo]); // получение всех стилей элемента (вкладка "вычисленные" в DevTools, но по сути возвращает окончательные стили)
// element - элемент, [pseudo] - псевдоэлемент, например ::before (необязателен)
