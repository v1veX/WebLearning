// mousedown -> mouseup -> click (-> mousedown -> mouseup -> click -> dblclick)

// кнопки мыши
/* 
Левая кнопка (основная)             0
Средняя кнопка (вспомогательная)	1
Правая кнопка (вторичная)           2
Кнопка X1 (назад)                   3
Кнопка X2 (вперёд)                  4 
*/

// модификаторы: shift, alt, ctrl и meta (Cmd на Mac - используется как Ctrl на других системах)
// это свойства объекта event

// например, alert сработает, когда при клике зажали Alt+Shift
button.onclick = function(event) {
    if (event.altKey && event.shiftKey) {
      alert('Ура!');
    }
};

// координаты
// clientX/Y, pageX/Y - коорды, где произошло событие, находятся в event

elem.oncopy; // задает обработчик на вызов копирования через контекстное меню или Ctrl+C
// можно запретить копирование через return false

// mouseover/mouseout

/* Для события mouseover:

event.target – это элемент, на который курсор перешёл.
event.relatedTarget – это элемент, с которого курсор ушёл */

/* Для события mouseout:

event.target – это элемент, с которого курсор ушёл.
event.relatedTarget – это элемент, на который курсор перешёл */

// mouseenter/mouseleave

// Drag'n'Drop
/* 
Базовый алгоритм Drag’n’Drop выглядит так:

1. При mousedown – готовим элемент к перемещению, если необходимо (например, создаём его копию).
2. Затем при mousemove передвигаем элемент на новые координаты путём смены left/top и position:absolute.
3. При mouseup – остановить перенос элемента и произвести все действия, связанные с окончанием Drag’n’Drop.
*/