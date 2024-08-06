let div = document.createElement('div'); // создание элемента
let textNode = document.createTextNode('А вот и я'); // создание текстового узла

// вставка элемента на страницу
/* 
node.append(...nodes or strings) – добавляет узлы или строки в конец node,
node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
node.before(...nodes or strings) –- вставляет узлы или строки до node,
node.after(...nodes or strings) –- вставляет узлы или строки после node,
node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками. 
*/

elem.insertAdjacentHTML(where, html); // вставляет строку именно как HTML
// Значения where:
/* 
"beforebegin" – вставить html непосредственно перед elem,
"afterbegin" – вставить html в начало elem,
"beforeend" – вставить html в конец elem,
"afterend" – вставить html непосредственно после elem 
*/

node.remove(); // удаляет узел

// Не нужно удалять узел, чтобы изменить его местоположение. Все методы вставки автоматически удаляют узлы со старых мест.

elem.cloneNode(true); // клонирует элемент со всеми атрибутами и дочерними элементами
elem.cloneNode(false); // клонирует элемент без дочерних элементов