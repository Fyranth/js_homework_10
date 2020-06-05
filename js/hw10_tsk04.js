/* 1 Объект ApllicationCahe 
Возвращает ссылку на объект с кэшированными данными приложения
*/

console.log(applicationCache);

/* 2
свойство customElements, являющееся доступным только для чтения, возвращаем ссылку на объект CustomElementRegistry, 
которая может быть использована для регистрирования новых кастомных элементов или получения информации о предыдущих 
*/
customElements.define('element-details',
    class extends HTMLElement {
        constructor() {
            super();
            const template = document
                .getElementById('element-details-template')
                .content;
            const shadowRoot = this.attachShadow({ mode: 'open' })
                .appendChild(template.cloneNode(true));
        }
    });

/* 3
Интерфейс Performance представляет информацию о производительности страницы с временными метками.
Объект этого типа может быть получен в результате вызова атрибута Window.performance, доступного только для чтения. 
*/
console.log(performance);

/* 4
Интерфейс Crypto представляет базовые криптографические функции, доступные в общеупотребительном контексте. 
Он позволяет получить доступ к криптографически сильному генеретору случайных чисел и к криптографическим примитивам.
*/

let array = new Uint32Array(10);
crypto.getRandomValues(array);
console.log(array);

/* 5
Window.history является свойством только для чтения, ссылающимся на объект History, 
который предоставляет интерфейс для манипулирования историей сессии браузера 
(страницы, посещенные в текущей вкладке или фрейме, который был загружен на текущей странице).
*/

let historyObj = history;
console.log(historyObj);

/* 6 свойство name
Позволяет получать/устанавливать свойство name объекта Window
*/
name = "my_name";

/* 7
Window.navigator является свойством только для чтения и возвращает ссылку на объект Navigator, 
который может запросить информацию о приложении, запустившем скрипт.
*/
console.log(navigator);

/* 8
Объект localStorage - позволяет сохранить данные (в видек ключ/знаение) в браузере.
Сохраненные данные доступны после обновления web-страницы.  
Не отправляются на сервер. 
*/

localStorage.setItem('myCat', 'Tom');
console.log(localStorage.getItem('myCat'));

/* 9
Интерфейс Location представляет собой адрес (URL) объекта, с которым он связан. 
Его модификации отражаются на родительском объекте. Интерфейсы Document и Window имеют подобный Location, 
к которому можно получить доступ через Document.location и Window.location соответственно.
*/
console.log(location);
console.log(Document.location);
console.log(Window.location);

/* 10
Возвращает элемент (например <iframe> или <object>), в который встроено окно, или  null, если это окно верхнего уровня.
*/

let frameEl = window.frameElement;
if (frameEl) {
    frameEl.src = 'http://google.ru/';
}

