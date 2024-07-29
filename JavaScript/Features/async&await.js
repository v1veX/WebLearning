// async

async function f() {
    return 1;
  }
// гарантирует, что функция вернет промис

// await
// работает только внутри async функций. Грубо говоря ставит выполнение кода на паузу, пока промис справа от await не закончит работу

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 1000)
    });
  
    let result = await promise; // будет ждать, пока промис не выполнится (*)
  
    alert(result); // "готово!"
  }
  
  f();