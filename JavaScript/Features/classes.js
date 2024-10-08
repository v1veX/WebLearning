// Важное упоминание: используются не так часто, но иногда без них никуда

// По сути, класс - это удобная хрень для создания объектов, поскольку именно объекты являются экземплярами классов.
// Просто классы позволяют эту всю штуку структурировать и сделать более читаемой.

class Student {
    // тут можно устанавливать значения по умолчанию и тд
    #street = null;

    // конструктор класса
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // сеттер
    set city(value) {
        this._city = value;
    }

    // геттер
    get city() {
        return this._city;
    }

    // Самописный метод
    logAge() {
        console.log(this.age);
    }

    // Приватный метод класса. Вообще, его можно вызвать извне, НО соглашением принято, что с символа _ начинаются названия ПРИВАТНЫХ методов и свойств
    _secretAction() {

    }

    // А вот символ # делает невозможным доступ к методу или свойству извне. НО в таком случае свойство должно быть указано в теле класса по умолчанию.
    set street(value) {
        this.#street = value;
    }

    get street() {
        return this.#street;
    }

    #anotherSecretAction() {
        // при попытке вызвать concreteStudent.#anotherSecretAction() будет ошибка
    }

    eat() { console.log('Я ем...') }

    // Статичные методы и свойства можно использовать без создания экземпляров. НО в них нельзя использовать this, а также их нельзя вызвать у экземпляров.
    static staticMethod() {
        // ...
    }
}

const firstStudent = new Student('Sasha', 23);

firstStudent.logAge();

// Наследование классов
class JavaScriptLearner extends Student {
    // Переопределение конструктора
    constructor(name, age, isHappy) {
        super(name, age); // вызывает родительский конструктор, а дальше уже пойдет новая логика
        this.isHappy = isHappy;
    }

    learn() { console.log('Учу JavaScript...') }

    // Переопределение метода
    eat() {
        super.eat(); // Использование метода из родительского класса, чтобы не переписывать его логику заново. Т.е. нам нужно только добавить кусочек функционала
        console.log('И учу JavaScript...');
    }
}

console.log(firstStudent instanceof Student); // проверка экземпляром какого класса является объект