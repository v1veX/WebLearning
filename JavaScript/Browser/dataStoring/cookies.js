// ВАЖНОЕ ЗАМЕЧАНИЕ
// как правило, куки устанавливаются сервером (т.е. без острой необходимости фронт их не добавляет и не читает)
// задача фронта сводится к тому, чтобы куки отправлялись при запросах на сервер



// Мы можем получить доступ к куки непосредственно из браузера, используя свойство document.cookie.


// Чтение

alert( document.cookie );
// Значение document.cookie состоит из пар [ключ=значение], разделённых ;. Каждая пара представляет собой отдельное куки


// Запись

// Запись в document.cookie обновит только упомянутые в ней куки, но при этом не затронет все остальные.

document.cookie = "user=John";

// Технически, и имя и значение куки могут состоять из любых символов, для правильного форматирования следует использовать встроенную функцию encodeURIComponent


// Настройки куки

/*
path

URL-префикс пути, куки будут доступны для страниц под этим путём. Должен быть абсолютным. По умолчанию используется текущий путь
*/
/*
domain

Домен определяет, где доступен файл куки. Однако на практике существуют определённые ограничения. Мы не можем указать здесь какой угодно домен.

Если нужно чтобы куки были видны на ПОДдомене, нужно явно указывать этот параметр
*/
/*
expires, max-age

Чтобы помочь куки «пережить» закрытие браузера, мы можем установить значение одной из этих опций

Дата истечения срока должна быть точно в этом формате, во временной зоне GMT. Мы можем использовать date.toUTCString, чтобы получить правильную дату. Если установить прошедшую дату, куки удалится

max-age определяет срок действия куки в секундах с текущего момента. Если установить 0 или число < 0, то куки удалится
*/
/*
secure

С этим флагом куки будут передаваться только по HTTPS-протоколу
*/
/*
samesite

Это ещё одна настройка безопасности, применяется для защиты от так называемой XSRF-атаки (межсайтовая подделка запроса).
*/