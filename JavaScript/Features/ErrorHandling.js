// try...catch

try {
    // Код, в котором может возникнуть ошибка
} 
catch (error) {
    // Код, который выполнится в случае обнаружения ошибки
    // у error есть три свойства: name, message и stack
}

// мы можем создавать свои ошибки, используя конструкторы Error, SyntaxError, ReferenceError, TypeError и другие

let user = { age: 20 };

if (!user.name) {
    throw new Error('Отсутствует имя пользователя!'); // с помощью throw мы можем генерировать ошибку
}

// try...catch...finally
try {
    // ... пробуем выполнить код...
} catch(e) {
    // ... обрабатываем ошибки ...
} finally {
    // ... выполняем всегда ...
    // выполняется всегда, даже если есть return или throw
}

// мы можем создавать свои ошибки, наледуясь от классов встроенных ошибок
// затем это можно использовать, проверяя instanceof
class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MyError';
        // или this.name = this.constructor.name; если мы хотим дальше наследовать от этого класса и не писать вручную this.name = ...
    }
}