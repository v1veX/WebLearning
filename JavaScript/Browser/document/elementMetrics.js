// offset
let a = elem.offsetParent; // предок элемента, который используется внутри браузера для вычисления координат при рендеринге

/* То есть, ближайший предок, который удовлетворяет следующим условиям:

Является CSS-позиционированным (CSS-свойство position равно absolute, relative, fixed или sticky),
или <td>, <th>, <table>,
или <body>. */

// offsetLeft/offsetTop содержат координаты x/y относительно верхнего левого угла offsetParent

// offsetWidth/Height - содержат «внешнюю» ширину/высоту элемента, то есть его полный размер, включая рамки

// client

// clientTop/Left - отступы внутренней части элемента от внешней. Включает рамки и скролл-бар

// clientWidth/Height - размер внутри рамок с учетом padding, но без скролл-бара

// scroll

// scrollWidth/Height - размер прокручиваемой части элемента

// scrollLeft/scrollTop – ширина/высота невидимой, прокрученной в данный момент, части элемента слева и сверху


// browser window metrics

// ширину и высоту можно взять через clientWidth/Height из document.documentElement

// высота ВСЕГО документа
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
// Почему? Лучше не спрашивайте. Эти несоответствия идут с древних времён. Глубокой логики здесь нет.

// текущая прокрутка
// window.pageXOffset/pageYOffset

window.scrollBy(x, y); // прокручивает страницу относительно её текущего положения
window.scrollTo(pageX, pageY); // прокручивает страницу на абсолютные координаты

// В обоих методах вместо координат также может использоваться объект options
window.scrollTo({
    top: 100,
    left: 0,
    behavior: "smooth"
});

elem.scrollIntoView(top); // прокручивает страницу, чтобы elem оказался вверху
// top=true (по умолчанию), то страница будет прокручена, чтобы elem появился в верхней части окна
// top=false, то страница будет прокручена, чтобы elem появился внизу
// так же принимает options
elem.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest"
});

// именно таким способом запрещается скролл страницы (и никак иначе)
document.body.style.overflow = "hidden"