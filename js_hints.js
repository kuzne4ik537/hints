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

//bind with arguments 
function mul(a, b) {
  return a * b;
};
// double умножает только на два
var double = mul.bind(null, 2); // первым аргументом всегда идёт контекст
var triple = mul.bind(null, 3); // первым аргументом всегда идёт контекст
console.log( double(4) );  // 3*2 = 6
console.log( triple(4) );  // 4*2 = 8