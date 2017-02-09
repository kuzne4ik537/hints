//for each loop
array.forEach(function(value, key){console.log(key+" : " +value) });

	
//map (like foreach but needs to return)
var result = array.map(function(value, key){return(key+" : " +value)});console.log(result)

//take this function and call it like method of object(where a and b are 10 and 20)
some = function (age,name) {console.log(this.age + " , " +this.name)}; 
var mike = {name:"Mike"};
some.call(mike,10,"Jim")  or some.apply(mike, [10,20])

//function call itself
(function (a,b) {
	// body... 
})(10,20);

//null and undefined 
(null == undefined)    //this is true 
(null === undefined)    //this is false 

//strict form stirng to number 
var num = +"2";

//strange behavior of null
alert(null>0); //false
alert(null == 0)  //false
alert(null >= 0) //ture

//check if is number(best)
function isNumeric(n){
	return !isNaN(parseFloat(n))  && isFinite(n);
}

//check if object p has property a
var p = {};
if ("a" in p) alert("Yes");


//for in loop object
for(var i in object) console.log (i + " : " + object[i]);  

//check if value is in array
arr.indexOf("mama"); /*reurn will be or position (1 or 2 or 5) or -1(if there is no value in array)*/
/*if is it huge array better create from this array object and use if(obj[key]), it will be faster*/

//function declaration (we can declare function with name anywhere in code and call it also anywhere) 
f1();
function func1() {};
//function expression (first of all we need to express function without name and after we can call)
f2();/*will not work before express function */
var f2 = function () {};
f2();

//var visible before we init it with global object window
console.log("a" in window); /*return true*/
var a = 5;

//inside function first takes local element(from this function), if there is no element in this func it goes search up and ap until window object
//if func created with new that otherwise firs takes global var from window  object aand after goes searsh down

//Decorator and example of using it
function doublingDecorator(f) {        
  return function() {
    return 2*f.apply(this, arguments); // (*)
  };
}
// Использование:
function sum(a, b) {
  return a + b;
}
sumDoule = doublingDecorator(sum);

console.log( doublingDecorator(sum)(1,2) ); // 6
console.log( sumDoule(2,3) ); // 10

//now instead of this = _self you can use bind(this) ,   see example
var wrapper = func.bind(context[, arg1, arg2...])

//late binding function  (Оно используется для привязки в тех случаях, когда метод может быть переопределён после 
							//привязки или на момент привязки не существует.)
function bindLate(context, funcName) {
  return function() {
    return context[funcName].apply(context, arguments);
  };
}

//содержит информацию о браузере.
navigator.userAgent

//содержит информацию о платформе, позволяет различать
navigator.platform

//В большинстве случаев, для модификаций DOM подходит innerHTML.
// Но document.write работает быстрее, фактически это самый быстрый способ добавить на страницу текст, сгенерированный скриптом.

//Добавление скриптов через DOM делает страницу независимой от возможных тормозов чужого сервера.
  var script = document.createElement('script');
  script.src = 'http://ads.com/buyme?rand='+Math.random();
   
  // теперь добавляем скрипт в HEAD, он будет загружен и выполнен
  document.documentElement.children[0].appendChild(script);

// Элементы DOM могут быть вложены друг в друга. При этом обработчик, привязанный к родителю,
// срабатывает, даже если посетитель кликнул по потомку.
// Это происходит потому, что событие всплывает.

// difference between even.target and this   (bubbling stage)
var target = event.target || event.srcElement;
event.target/srcElement //- означает исходный элемент, на котором произошло событие.
this //- текущий элемент, до которого дошло всплытие и который запускает обработчик.

//Прекращения всплытия
  event.stopPropagation() or return false //(at hte end)  , but return false doesn't work on addEventListener        //(12)

//Отмена действия браузера
  event.preventDefault()           //(12)

//Существует нестандартное CSS-свойство "user-select:none", которые делает элемент невыделяемым.            (12)

//События focus и blur не всплывают.                                                                        (12)
// В современных стандартах есть события focusin/focusout — то же самое, что и focus/blur,
// только они всплывают.

// Обработчик "window.onload" срабатывает, когда загружается вся страница, включая ресурсы                  (12)
// на ней — стили, картинки, ифреймы и т.п.

// Когда человек уходит со страницы или закрывает окно, срабатывает "window.unload". В нём можно,           (12)
// например, закрыть вспомогательные popup-окна, но отменить сам переход нельзя.
// Это позволяет другое событие — "window.onbeforeunload".

//private and public methods and properties                                                                 (14)
function Menu( options ) {
  var self = this; // для обращения к объекту из методов
 
  this.property = публичное свойство Menu
   
   var property = приватное свойство Menu
 
  this.method = function() { публичный метод Menu }
 
   function method(args) { приватный метод Menu }
}

//принадлежит ли свойство самому объекту, без учета его прототипа.                                           (15)
object.hasOwnProperty('propertyName');

//Цикл for..in перебирает все свойства в объекте и его прототипе.                                            (15)

//Примитивы — не объекты, доказательство
console.log(12 instanceof Number);
console.log(new Number(12) instanceof Number);

// Свойства и методы, которые начинаются с подчеркивания "_", считаются защищенным.                          (15)
// Порядочный программист должен обращаться к ним только из самого объекта и из его
// наследников.

//Для наследования нужно, чтобы «склад методов потомка» (Child.prototype) наследовал от
//«склада метода родителей» (Parent.prototype).
Rabbit.prototype = Object.create(Animal.prototype);

//Наследник может вызвать конструктор родителя в своём контексте, используя
// apply(this, arguments), вот так:
function Rabbit(...) {
  Animal.apply(this, arguments);
}

//При переопределении метода родителя в потомке, к исходному методу можно обратиться,
// взяв его напрямую из прототипа:
Rabbit.prototype.run = function() {
  var result = Animal.prototype.run.apply(this, ...);
  // result -- результат вызова метода родителя
}






/******************EXAMPLS*****************/

//crate function myprint with the same fumcionality as have cosole.log using apply
function myprint () {
	console.log.apply(console, arguments);
}

// using slice if need to find string from space to space (even if there is no space return correct result)
var str  =  "lkasfj askf asflkj; sfa  asf asf";
str.slice( str.indexOf(" ") + 1 , str.indexOf(" "));

//instead of checking if var is undefined
/*function some{if(text == undefined) text = "some text";}*/
function some (text){ text = text || "some text"}

//find all word good in this string   (4)
var str =  "I'm good.Are You good?" 
var target = "good";
var pos = -1;
while((pos =str.indexOf(target, pos+1)) != -1){
	console.log(pos);
}


//for object prop better use '[]'' then  '.''      (4)
person['this string'] = "some";/* using . we can't make key from two words*/

//check if object is empty
function isEmpty(obj){
	for (var i in obj) {return false;}
		return true;
}

//sort array numeric asc   (4)
var arr = [2,9,5,10,1,25];
function sortNumericAsc(a,b){
	if(a>b) return 1;
	if(a<b)return -1;
}
console.log(arr.sort(sortNumericAsc));

//sort array numeric desc    (4)
var arr = [2,9,5,10,1,25];
function sortNumericDesc(a,b){
	return b-a;
}
console.log(arr.sort(sortNumericDesc));

//sort array numeric random   (4)
var arr = [2,9,5,10,1,25];
function sortNumericRundom(a,b){
	return 	Math.random() - .5;
}
console.log(arr.sort(sortNumericRundom));

//if function return object that this object will be returned , not this   (7)
function BigAnimal() {
	this.name = "Mouse";
	return{name: "Cat"};  
}
console.log(new BigAnimal().name) /*Cat*/

//if function return mot object that this return will be ignored 
function BigAnimal() {
	this.name = "Mouse";
	return "Cat";  
}
console.log(new BigAnimal().name) /*Mouse*/

//borrowing method
function sayHi() {
  arguments.join = [].join; // одолжили метод (1)
 
  var argStr = arguments.join(':');  // (2)
 
  console.log(argStr);  // сработает и выведет 1:2:3
}
sayHi(1, 2, 3);

//call method without borrowing(coping)
function sayHi() {
  var join = [].join; // ссылка на функцию теперь в переменной
 
  // вызовем join с this=arguments,
  // этот вызов эквивалентен arguments.join(':') из примера выше
  var argStr = join.call(arguments, ':');
 
  console.log(argStr);  // сработает и выведет 1:2:3
}
sayHi(1, 2, 3);

//convert object "arguments" to array
var args = [].slice.call(arguments);

//universal redirection from one function to another
function g() {
	console.log(arguments);
}
function sayHi() {
	g.apply(this, arguments);
}
 g(1,2,3,4);
sayHi(1,2);

//decorator like wrapper on any function return this function if everything ok or return some messege if not
var isAdmin = true;
function checkPermissionDecorator(f) {
  return function() {
    if ( isAdmin ) {
      return f.apply(this, arguments);
    }
    console.log('Недостаточно прав');
  }
}
function save() { console.log(arguments); }
save = checkPermissionDecorator(save);
save("mama","papa");

//tostring for object
var user = {
  firstName: 'Василий',
   toString: function() {
    return 'Пользователь ' + this.firstName;
  }
};
console.log( user );

//typeof  for Date, array, null, object return object. This helps to find what is it 
var toClass = {}.toString;// borowing method toString grom Object(just in case if we already definded toString in our method)

var type = toClass.call(date).slice(8, -1); // (3)
console.log(type); // Date

var type1 = toClass.call(arr).slice(8, -1); // (3)
console.log(type1); // Array

//find type by checking if exists method of this type (duck)
var x = new Date();
if (x.splice) {
  console.log('Дата!');
}
var x = [1,2,3];
 if (x.splice) {
   console.log('Массив!');
 }

//bind
 function f() {
  console.log(this.name);
}
 
var user = { name: "Вася" };
 
var f2 = f.bind(user);
f(); // undefined
f2(); // выполнит f с this = user

//bind in constructor
function User() {
  this.id = 1;
 
  this.sayHi = function() {
    alert(this.id);
  }.bind(this);
}
 
var user = new User();
 
setTimeout(user.sayHi, 1000); // выведет "1"

//bind with arguments                    //(11)
function mul(a, b) {
  return a * b;
};
// double умножает только на два
var double = mul.bind(null, 2); // первым аргументом всегда идёт контекст
var triple = mul.bind(null, 3); // первым аргументом всегда идёт контекст
console.log( double(4) );  // 3*2 = 6
console.log( triple(4) );  // 4*2 = 8

// Чтобы избежать выделения, мы должны предотвратить действие браузера по умолчанию                                     (12)
// для события selectstart в IE и mousedown в других браузерах.
// Полный код элемента, который обрабатывает двойной клик без выделения:    (Это работает благодаря всплытию событий.)                 
  <div ondblclick="alert('Тест')" onselectstart="return false"    
  onmousedown="return false" >
    Двойной клик сюда выведет "Тест", без выделения
  <div>    


//Применение делегирования для абсолютно разных действий
  <div id="menu">
    <button data-action="save">Нажмите, чтобы Сохранить</button>
    <button data-action="load">Нажмите, чтобы Загрузить</button>
  <div>
   
  <script>
  function Menu(elem) {
    this.save = function() { alert('сохраняю'); };
    this.load = function() { alert('загружаю'); };
   
    var self = this;
   
    elem.onclick = function(e) {
      var target = e && e.target || event.srcElement; // (*)
      var action = target.getAttribute('data-action');
      if (action) {
        self[action]();
      }
    };
  }
   
  new Menu(document.getElementById('menu'));
  <script>

// Как заставить обработчик сработать после действия браузера?
// Решение — отложить обработку через setTimeout(..., 0):
<input id="my" type="text" placeholder="Оптимальный вариант">
 
<script>
document.getElementById('my').onkeydown = function() {
  var self = this;
  function handle() {
    self.value = self.value.toUpperCase()
  }
  setTimeout(handle, 0);
 
};
<script>

//using ctrl,shift, alt 
<button>Ctrl+Shift+Кликни меня!<button>
<script>
  document.body.children[0].onclick = function(e) {
    e = e || event;
    if (e.ctrlKey && e.shiftKey)     alert('Ура!');

  }
<script>

//Find out Ctrl-C Ctrl-V and Ctrl-X
<input type="text"> event: <span id="result"><span>
<script>
var input = document.body.children[0];
 
input.oncut = input.oncopy = input.onpaste = function(e) {
  e = e || event;
  document.getElementById('result').innerHTML = e.type +' '+input.value;
  //return false;
}
<script>

//Count quantity of symbols typed                                         (12)
<input type="text"> символов: <span id="result"><span>
<script>
var input = document.body.children[0];
function showCount() {;
  document.getElementById('result').innerHTML = input.value.length;
}
input.oncut = input.onkeyup = input.oninput = showCount;
<script>

//when loading script  onload and onerror                                   (12)
<script>var script = document.createElement('script');
script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js";
document.documentElement.appendChild(script);
 
script.onload = function() {
  alert(jQuery);
}
script.onerror = function() {
  alert("Ошибка: " + this.src);
}
<script> 

//Проверить, существует ли атрибут для события, например input.oninput:          (12)
<script>
  var input = document.createElement('input');
  alert( "ontouchstart" in input );
<script>

//Наследование через ссылку __proto__                                   (15)
var animal = { eats: true };
var rabbit = { jumps: true };
rabbit.__proto__ = animal;  // унаследовать
alert(rabbit.eats); // true
alert(rabbit.jumps); // true

//Наследование через Object.create(proto)                               (15)
var animal = { eats: true };
var rabbit = Object.create(animal);
alert(rabbit.eats); // true

//Этот метод даёт возможность получить __proto__. но не изменить его.    (15)
var animal = { eats: true }
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
var rabbit = new Rabbit('John');
rabbit2 = Object.create(animal);
console.log(Object.getPrototypeOf(rabbit));
console.log(Object.getPrototypeOf(rabbit2));

//Иногда хочется посмотреть, что находится именно в самом объекте, а не в прототипе.   (15)
//Это можно сделать, если профильтровать key через hasOwnProperty:
var animal = {
  eats: true
};
rabbit = Object.create(animal);
rabbit.jumps = true;
for (var key in rabbit) {
  if ( !rabbit.hasOwnProperty(key) ) continue; // пропустить "не свои" свойства
  alert (key + " = " + rabbit[key]); // выводит только "jumps"
}

