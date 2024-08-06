let event = new Event(type, [options]);
/* 
type – тип события, строка, например "click" или же любой придуманный нами – "my-event".
options – объект с тремя необязательными свойствами:
    bubbles: true/false – если true, тогда событие всплывает.
    cancelable: true/false – если true, тогда можно отменить действие по умолчанию.
    composed: true/false – если true, тогда событие будет всплывать наружу за пределы Shadow DOM 
*/

elem.dispatchEvent(event); // вызывает созданное событие

event.isTrusted; // true для событий, порождаемых реальными действиями пользователя, и false для генерируемых кодом

// для слвершенно новых событий стоит использовать CustomEvent
let myEvent = new CustomEvent("hello", {
    detail: { name: "Вася" }
});
// detail (свойство объекта options) - дополнительная информация, которая потом может потребоваться в обработчике
