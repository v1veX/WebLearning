// Событийный цикл (EventLoop) - очередь асинхронных задач, которые выполнятся после выполнения синхронных (основной поток)

// Promise - специальный объект-надстройка для работы с асинхронным кодом
// имеет 3 состояния:
/*
    pending - ожидание
    fulfilled - выполнено успешно, результат получен
    rejected - выполнено с ошибкой
*/
// основные методы
/*
    then() - обработка fulfilled состояния
    catch() - обработка rejected состояния
*/

const promise = new Promise((resolve, reject) => {
    console.log('Начало, сотояние prnding...');

    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('Состояние fulfilled');
        }
        else {
            reject('Состояние rejected');
        }
    }, 3000);
});

promise
    .then((successData) => {
        console.log(successData);
    })
    .catch((errorData) => {
        console.log(errorData);
    })
    .finally(() => {
        console.log('Отработает в любом случае');
    });

// async - для функций, возвращающих промис
async function doSomething() {}