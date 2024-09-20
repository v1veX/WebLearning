// Базовый синтаксис:
let promise = fetch(url, [options]);
// url – URL для отправки запроса.
// options (объект) – дополнительные параметры: метод, заголовки и так далее

// Без options это простой GET-запрос, скачивающий содержимое по адресу url

// Процесс получения данных проходит в два этапа
/*
1. promise выполняется с объектом встроенного класса Response в качестве результата, как только сервер пришлёт заголовки ответа

На этом этапе мы можем проверить статус HTTP-запроса и определить, выполнился ли он успешно, а также посмотреть заголовки

Промис завершается с ошибкой, если fetch не смог выполнить HTTP-запрос, например при ошибке сети или если нет такого сайта. HTTP-статусы 404 и 500 не являются ошибкой.

Мы можем увидеть HTTP-статус в свойствах ответа:

status – код статуса HTTP-запроса, например 200.
ok – логическое значение: будет true, если код HTTP-статуса в диапазоне 200-299.
*/
/*
2. для получения тела ответа нам нужно использовать дополнительный вызов метода

Response предоставляет несколько методов, основанных на промисах, для доступа к телу ответа в различных форматах:

response.text() – читает ответ и возвращает как обычный текст,
response.json() – декодирует ответ в формате JSON,
response.formData() – возвращает ответ как объект FormData,
response.blob() – возвращает объект как Blob (бинарные данные с типом),
response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневое представление бинарных данных),
помимо этого, response.body – это объект ReadableStream, с помощью которого можно считывать тело запроса по частям.
*/

// Можно использовать как через await:
let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);

let commits = await response.json(); // читаем ответ в формате JSON

alert(commits[0].author.login);

// Так и через синтаксис промисов:
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(response => response.json())
    .then(commits => alert(commits[0].author.login));

// Заголовки ответа хранятся в объекте response.headers, для которого мы можем использовать методы для Map

// Для установки заголовка запроса в fetch мы можем использовать опцию headers. Она содержит объект с исходящими заголовками

// POST-запросы
let user = {
    name: 'John',
    surname: 'Smith'
  };
  
let respons = await fetch('/article/fetch/post/user', {
    method: 'POST',  // указываем метод
    headers: {
      'Content-Type': 'application/json;charset=utf-8'  // указываем верный заголовок (т.к. JSON это строка, по умолчанию ставится text/plain, что неверно)
    },
    body: JSON.stringify(user)  // указываем непосредственно тело запроса
});
  
let result = await respons.json();
alert(result.message);


// Отслеживание прогресса загрузки
// https://learn.javascript.ru/fetch-progress


// Прерывание запроса
let controller = new AbortController();  // контроллер
fetch(url, {
  signal: controller.signal  // передаем в fetch
});
// затем из любого места в коде вызываем:
controller.abort();

// Когда fetch отменяется, его промис завершается с ошибкой AbortError, поэтому мы должны обработать её, например, в try..catch

// AbortController также можно использовать и в своих промисах, добавив в них следующую строку:
controller.signal.addEventListener('abort', reject);