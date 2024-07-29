let promise = new Promise(function(resolve, reject) {
    // функция-исполнитель (executor), которая выдаст результат позже
});

// получение результата от промиса

// then
promise.then(
    function(result) { /* обработает успешное выполнение */ },
    function(error) { /* обработает ошибку */ }
);
// второй параметр можно опустить, если нам не нужно обрабатывать ошибку

// catch
promise.catch(errorHandlingFunction);
// для случая, если нам нужно только обработать ошибку

// finally
promise.finally(() => alert('Промис завершен'));
// выполнится всегда, независимо от результата, например тут можно закрывать сетевое соединение или останавливать индикатор загрузки
// finally не предназначен для обработки результата или ошибки

// обработчики можно добавлять по цепочке через точку
// если обработчик возвращает промис, то последующие элементы цепочки ждут, пока этот промис выполнится. Когда это происходит, результат его выполнения (или ошибка) передаётся дальше.

// обработка ошибок
// если один из обработчиков упал с ошибкой, то ошибка передается ближайшему обработчику ошибок
fetch('/article/promise-chaining/user.json')  // fetch возвращает промис
.then(response => response.json())
.then(user => fetch(`https://api.github.com/users/${user.name}`))
.then(response => response.json())
.then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
        img.remove();
        resolve(githubUser);
    }, 3000);
}))
.catch(error => alert(error.message));
// если один из then выпадет в ошибку, то catch сразу перехватит ее

// если catch не пробросит ошибку дальше, выполнение перейдет в ближайший then (если есть)

// методы класса Promise

// Promise.all - запуск множества промисов параллельно, затем полчение массива результатов выполнения
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // когда все промисы выполнятся, результат будет 1,2,3
// каждый промис даёт элемент массива

// Promise.allSettled(iterable) - то же самое, что и Promise.all, но здесь промис не падает от одной ошибки, а сохраняет ее в массив результатов

// Promise.race(iterable) - берет результат первого (тот который быстрее) выполненного промиса, остальные игнорируются

// Promise.any(iterable) - берет результат первого успешно выполненного промиса

// Promise.resolve(value) создаёт успешно выполненный промис с результатом value

// Promise.reject(error) создаёт промис, завершённый с ошибкой error