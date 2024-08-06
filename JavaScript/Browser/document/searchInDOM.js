let a = document.getElementById('id'); // поиск по атрибуту id

let b = elem.querySelectorAll('css-selector'); // поиск всех элементов по заданному css-селектору

let c = elem.querySelector('css-selector'); // поиск первого элемента по заданному css-селектору

let d = elem.matches('css-selector'); // проверка удовлетворяет ли элемент заданному css-селектору

let e = elem.closest('css-selector'); // ищет первого потомка с указанным css-селектором

// querySelectorAll возвращает статическую коллекцию
// getElementsBy возвращает живую коллекцию

let f = elemA.contains(elemB); // содержится ли elemB внутри elemA или elemA == elemB