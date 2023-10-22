//## Q3 -- first class functions
// function square(num){
//   return num * num;
// }

// function displaySquare (fn){
//   console.log("Square"+ fn(5));
// }

// console.log(displaySquare(square))

//## Q4 What is IIFEE? # una funcion que se llama inmediatamente qeu se declara
// (function square(num){
//   return num * num;
// })();

//## Q5 IIFE -O/P Based Question

// (function (x){
//   return (function(y){
//     console.log(x+y);
//   })(2);
// })(1);

// ## Q6 SCOPE FUNCTIONS

// var num1=1,num2=2;

// function multiply(){
//   console.log(num1*num2);
// }

// multiply();

// function sum (){
//   var num1=3,num2=4;
//   return (num1+num2)
// }
// console.log(sum());

// ## Q7 SCOPE FUNCTIONS

// var tiene block scope que hace que solo se mantenga lo que está fuera tiene su ultimo valor
// for (let i = 0; i < 5; i++) {
//   setTimeout(()=>{
//     console.log(i)
//   }, i*1000);
  
// }

//## Function Hoisting

// --THIS WORKS FINE
// functionName();
// function functionName(){
//   console.log('Hey function hoisting')
// }

// -- THis not works because the functions always look up for the assign of the hoisting, instead the variables are defined as undefined and then you 
// assign the value 
// functionName();
// function functionName(){
//   console.log('Hey function hoisting')
// }
// console.log(x);
// var x=5;

// ## Q9 Function Hoisting - O/P Based Question


//Imprime undefined porque crea una ejecución del contexto por separado del global y local para esa funcion scope
// var x = 21;

// var fun = function (){
//   console.log(x);
//   var x = 20;
// }

// fun();


// ## Q10 Params vs Arguments

// function square(num){ // These are Params
//   console.log(num*num)
// }
// square(5)//this are arguments

// ## Q11 SPREAD VS REST

// function multiply(...nums){ // Rest operator Recibe numeros y los convierte en array aajaj
//   console.log(nums)
// }


// var arr = [1, 2]

// multiply(...arr) // Spread operator

// ## Q11 O/P BASES QUESTION  

//REST SIEMPRE DEBE DE ESTAR AL FINAL DE NUESTRA FUNCION
// const fn = (a, x,y, ...numbers)=>{
//   console.log(numbers)
//   console.log(x,y)
// }

// fn(1,2,3,4, 6)


// ## Q12 CALLBACK FUNCTIONS  
//Es una funcion que es pasada a otra funcion como argumento eso significa que sera invocada en la otra fncion

// function greeting(name){
//   console.log('hello', name)
// }

// function processUser(callback){
//   var name = 'Luis';
//   callback(name)
// }

// processUser(greeting);

// ## Q13 ARROW FUNCTIONS VS FUNCTIONS 

// La diferencia principal es que primeramente la sintaxis es más limpia, el return es implicito, y el ultimo es la opcion de 'arguments' que nos 
// da function() no la tenemos en las arrow functions y por ultimo la "this" keyword para poder utilizar las variables locales y globales
// con las arrow functions podemos utilizar this. para llamadas a locales mientras que con this en function es para globales


// ## Q14 CLOSURES

// Es una funcion que referencia a variables en el outer SCOPE

// Lexical scope

// var name = "Luis Martinez" // Global Scope

// //global scope
// function local(){
//   //local Scope
//   const name = 'Hola'; 
//   console.log(name)
// }

// local();


//CADA QUE CREAR UNA FUNCION SE ABRE UNA CLOSURE PARA TUS FUNCIONES DENTRO DE ESA FUNCION 
//Permite el uso de Private Variables

// var name = "Luis Martinez" // Global Scope

// //global scope
// //*OUTER SCOPE  */
// function local(){
//   console.log(name) //undefined
//   //*INNER SCOPE 2 */
//   //local Scope
//   var name = 'LuisM';
//   // LO DE ABAJO ES UNA CLOSURE 
//   // NOS DA ACCESO A UNA VARIABLE SIEMPRE Y CUANDO ESTË EN UN INNER SCOPE 
//   function displayName(){
//     //*INNER SCOPE  */
//     //innerScope
//     console.log(name) //LuisM
//   }
//   displayName();
//   // LO DE ARRIBA ES UNA CLOSURE 
  
//   console.log(name)//LuisM
// }

// local();

// ## CLOSURE SCOPE CHAIN

//LOCAL SCOPE; OUTER SCOPE; GLOBAL SCOPE

// TAMBIEN LAS CLOSURES PUEDEN TENER ACCESOO A TODOS ESOS SCOPES incluso los globales pero el outer no puede obtener del global pero el local si 

// global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // 20


// ## Shadowing concepts

// let count = 0;

// (function print(){
//   if(count ===0){
//     let count = 1; // Shadowing
//     console.log(count) // 1;
//   }
//   console.log(count) // 0
// })();


// ## Example of closure

// function createBase(num){
//   return function(val){
//     return val + num;
//   }
// }

// var addSix = createBase(6);

// addSix(10) // PRINTS 16
// addSix(21) // PRINTS 27

// ## TIME OPTIMIZATION
// NO MANCHES esto tambien sirve para optimizar el tiempo de salida o de ejecución de las cosas

// agregando un closure a nuestro return podremos hacer menos tiempo

// ## Ques 3 TIME OPTIMIZATION WITH CLOSURE

// function find(index){
//   let a = []
//   for(let i = 0; i< 1000000; i++){
//     a[i]= i*i
//   }
//   console.log(a[index]);
// }

// console.time('6');
// find(6)
// console.timeEnd('6');
// console.time('50');
// find(50)
// console.timeEnd('50');
// EL CODIGO DE ARRIBA TARDA MUCHO Y PODRIAMOS OPTIMIZARLO CON EL USO DE UNA CLOSURE


// function find(){
//   let a = []
//   for(let i = 0; i< 1000000; i++){
//     a[i]= i*i
//   }
//   return function (index){
//     console.log(a[index]);
//   }
// }

// const closure = find()
// console.time('6');
// closure(6)
// console.timeEnd('6');
// console.time('50');
// closure(50)
// console.timeEnd('50');
// ESTE CODIGO ES MUCHO MÄS OPTIMO

// ## QUES 4 BLOCK scope and setTimeout
// VAR HAS A FUNCTION SCOPE NOT A BLOCK SCOPE

// for (var i = 0; i < 3; i++) {
//   setTimeout(function log () {
//     console.log(i)
//   }, 1000)
// }
// ## SIN usar let tienes que imprimir 0, 1 , 2 en vez de 3 3 3 como lo harías


// function a(){
//   for (var i = 0; i < 3; i++) {
//   function inner(i){
//     setTimeout(function log () {
//       console.log(i)
//     }, 1000)
//   }
//   inner(i)
//   }
// }

// a()
// ## Q5 using closure to create a private counter

// function counter(){
//   var _counter= 0;
//   function add(increment){
//     _counter+=increment;
//   }

//   function retrieve (){
//     return "Counter" + _counter;
//   }
//   return {
//     add,
//     retrieve
//   }
// }


// const c = counter();

// c.add(4);
// c.add(10);
// console.log(c.retrieve()) 

// ##  Q6 - QUESTION WHAT IS A MODULE PATTERN

// var Module = (function(){
//   function privateMethod(){
//     console.log('private')
//   }
//   return {
//     publicMethod: function(){
//       // can call privateMethod()
//       console.log('public')
//       privateMethod();
//     }
//   }
// })();
// Module.publicMethod()
// // Module.privateMethod();

//## Make this run only once

// let view;
// function likeTheVideo(){
//   view = "RoadSide Coder";
//   console.log('Subscribe to ', view)

// }
// likeTheVideo();
// likeTheVideo();
// likeTheVideo();
// likeTheVideo();
// likeTheVideo();

// SOLUTION
// let view;
// function likeTheVideo(){
//   let called = 0;
//   return function inner(){
    
//     if(called>0){
//       console.log('Already called')
//     }else{
//       view = "RoadSide Coder";
//       console.log('Subscribe to ', view)
//       called++;
//     }
    
//   }
// }
// let isSubscribed = likeTheVideo();
// isSubscribed();
// isSubscribed();
// isSubscribed();
// isSubscribed();


// ##Q8 ONCE POLIFYLL

// function once(func, context){
//   let ran;
//   return function(){
//     if(func){ // si existe una regresa el exec de esa funcion y luego la nullea para poder no usarla
//       ran = func.apply(context || this, arguments)
//       func = null;
//     }
//     return ran;
//   }
// }

// const hello = once(()=> console.log('hello'));

// hello()
// hello()
// hello()

// ## CACHING MEMORIZE FUNCION IN JAVASCRIPT
// function myMemoize (fn, context){
//   const res = {}
//   return function(...args){
//     var argsCache = JSON.stringify(args)
//     if(!res[argsCache]){
//       res[argsCache]= fn.call(context|| this, ...args);
//     }
//     return res[argsCache]
    
//   }
// }
// const clumsysquare = (num1, num2)=>{
//   for (let i = 0; i <= 1000000; i++) {
//   }
//   return num1*num2;
// }

// const memoizedClumzyProduct = myMemoize(clumsysquare);

// console.time("first");
// console.log(memoizedClumzyProduct(9458, 7649))
// console.timeEnd('first')

// console.time("second");
// console.log(memoizedClumzyProduct(9458, 7649))
// console.timeEnd('second')


//## Difference between closure and ScriptProcessorNode

// Two kind of scopes //global and local
//and closure have 3 globalThis, outterscope, local scope

