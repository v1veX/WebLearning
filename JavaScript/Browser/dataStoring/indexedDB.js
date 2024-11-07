/*
IndexedDB можно рассматривать как «localStorage на стероидах». Это простая база данных типа ключ-значение, достаточно мощная для оффлайн приложений, но простая в использовании.

Лучшим руководством является спецификация, текущая версия 2.0, но также поддерживаются несколько методов из 3.0 (не так много отличий) версии.

Использование можно описать в нескольких фразах:

1. Подключить обёртку над промисами, например idb.
2. Открыть базу данных: idb.openDb(name, version, onupgradeneeded)
   - Создайте хранилища объектов и индексы в обработчике onupgradeneeded или выполните обновление версии, если это необходимо
3. Для запросов:
   - Создать транзакцию db.transaction('books') (можно указать readwrite, если надо).
   - Получить хранилище объектов transaction.objectStore('books').
4. Затем для поиска по ключу вызываем методы непосредственно у хранилища объектов.
   - Для поиска по любому полю объекта создайте индекс.
5. Если данные не помещаются в памяти, то используйте курсор.
*/