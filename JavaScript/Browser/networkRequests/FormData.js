// FormData - это объект, представляющий данные HTML формы

let formData = new FormData([form]);

// Если передать в конструктор элемент HTML-формы form, то создаваемый объект автоматически прочитает из неё поля

// Простая форма
/*
<form id="formElem">
  <input type="text" name="name" value="John">
  <input type="text" name="surname" value="Smith">
  <input type="submit">
</form>
*/
formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('/article/formdata/post/user', {
        method: 'POST',
        body: new FormData(formElem)
    });

    let result = await response.json();

    alert(result.message);
};

// Методы объекта FormData

formData.append(name, value)  // добавляет к объекту поле с именем name и значением value,
formData.append(name, blob, fileName)  // добавляет поле, как будто в форме имеется элемент <input type="file">, третий аргумент fileName устанавливает имя файла (не имя поля формы), как будто это имя из файловой системы пользователя,
formData.delete(name)  // удаляет поле с заданным именем name,
formData.get(name)  // получает значение поля с именем name,
formData.has(name)  // если существует поле с именем name, то возвращает true, иначе false

formData.set(name, value),
formData.set(name, blob, fileName)  // разница в том, что set сначала удаляет поле с указанным name, а затем добавляет его

// Поля объекта formData можно перебирать, используя цикл for..of

//
// Объекты FormData всегда отсылаются с заголовком Content-Type: multipart/form-data, этот способ кодировки позволяет отсылать файлы. Таким образом, поля <input type="file"> тоже отправляются, как это и происходит в случае обычной формы
//

