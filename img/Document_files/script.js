
// //variable y contante
// let example= 'Hola';
// console.log(example);
// example='Marina' //se puede reasignar valor a una variable 
// console.log(example);
// const PI = 3.1416;
// console.log (PI);
//PI = 5; //no se puede reasignar valor a una constante. se define con un valor y no cambia por lo que marca error aqui
// let name = "Marina"; //comilla simple o doble es lo mismo
//  let color = "Alcubilla";

//tipo
// console.log (typeof PI); 

// concatenar cadenas
// console.log (name + ' ' + color);

//string interpolation
// console.log(`${name} ${color}`); //solo para imprimir en pantalla
// const fullName = (`  ${name} ${color}`); //para guardar en constantes o variables
// console.log (fullName);

// longitud cadena
// console.log(fullName.length);

//trim  quita espacios  a cadena
//console.log(`${name} ${color}`.trim().length);
// console.log(fullName.trim()); //quita los espacios blancos al inicio y al final
// console.log(`${name} ${color}`.trim().length); //longitud ya sin los espacios en blanco al inicio y fin

//Mayuscula y miniscula
// console.log(fullName.toUpperCase());
// console.log(fullName.toLocaleLowerCase());

// split ...separa cadenas
// console.log (fullName.split('a'));

//Numeros no hay enteros o flotate..todos son numeros
// let age = 26.533444;
// console.log(typeof age);

//toma la parte entera de mi número
//console.log (parseInt(age));

//toma la parte flotante
//console.log(parseFloat(age));

//toFixed redondea a los decimales indicados
// console.log(age.toFixed(5));

//booleanos
// let example= false;
// console.log(typeof example);

//array
// let cats = ['Gato','Gatito','Cisco'];
// console.log(cats.length);
// cats.push('galleta'); //agrega al final del arrglo
// console.log(cats); 
// cats.pop(); //elimina el ultimo
// console.log(cats);

//sobreescribir un elemento
// cats[2] = 'Garfield';
// console.log(cats); 

//recorrer
//cats.forEach(cats=> {console.log(cats);});

//objetos anidados
// user={name:'Marina',
//        lastName: 'Alcubilla',
//        address:{city: 'Mty',
//                 state: 'NL'
//                 },
//        cats: ['Bello','Pelusa']        
//     }
// console.log(user);

// console.log(Object.keys(user)); //obtener keys

// user.lastName= 'Torres'; //sobreescribir uno
// console.log(user); 
// console.log(Object.values(user)); //obtener valores

// console.log(user.hasOwnProperty('cats')); //ver si hay una propiedad ...true
// console.log(user.hasOwnProperty('dogs')); //ver si hay una propiedad...false

//operador relacional

//Incrementos y decrementos
// let example = 1;
// example = example + 1;
// console.log (example);
// example++;
// console.log (example);
// example += 5;  //suma 5
// console.log (example);

//COndicionales
// let altura = 1.70;
// if (altura >= 1.80)
// {
// console.log ('Eres alta');
// } else if (altura >= 1.60) 
// {console.log ('Eres altura promedio');
// } else 
// {console.log('Eres bajita');
// }


// and or
// let example = 5;
// if (example == 5 && altura == 1.70)
//     {
//         console.log('And');
//     }

//     if (example == 5 || altura == 1.50)
//     {
//         console.log('or');
//     }


//switch, matriz de escenarios
// let answer = 'C';

// switch(answer){
//     case 'A': 
//         console.log ('A es incorrecto');
//         break;  //va en cada case
//     case 'B':
//         console.log ('B si es correcto');
//         break;
//     default: 
//         console.log ('No es una respuesta valida'); //para las respuestas que no contemplamos
//      }


//loops o ciclos un determinado numero de veces (sabemos el numero de veces)
// for(let i = 0; i < 5; i++) {
//     console.log('numero', i);
// }

// let numArray = [10, 20, 30, 40, 50];
// let total = 0;

// for(let i = 0; i < numArray.length; i++) {
//     total += numArray[i];
//     console.log('Total', total);
// }



//while  no se sabe el numero de veces..aqui es mientras cumpla la condicion
//  let count = 0;

//  while (count < 20 ){ //que no sea ciclico infinito
//      count++;
//      console.log(count);
//  }


 //do while  se ejecuta al menos 1 vez
// let count = 0;

// do { //que no sea ciclico infinito
//     count++;
//    if (count>= 20 ) {
//          break;
//      }
//       }
//   while (false)

//  console.log(count);


//funciones  estracto de codigo para reutilizar

// function add() {
//     console.log('ADD!'); 
//                 }
// add(); //invocacion si no no se ejecuta


// function add()
// {
//     return 5; //regresar valores
// }
//     let myValue = add();
//     console.log (myValue);


//parametros
///






////////ES6   
////////

// console.log('ES6!');  

// //ttemplate literals

let name = 'Marina';
 let apellido = 'Alcubilla';
 console.log (`${name}-${apellido} / ${ 2 + 3}`);

console.log(`${apellido}   ${name}`);
//destructuracion de objetos

// const user = {
//     firstName: 'Marina',
//     lastName: 'Alcubilla',
//     city: 'Mty',
//     state: 'NL'
// }


//let copyName = user.firstName;

// const { firstName, lastName} =user; //sacar del objeto
// console.log (`${firstName} ${lastName}`); //concatena

// const { firstName:fn, lastName:ln} =user; //sacar del objeto y le cambia el nombre 
// console.log (`${fn} ${ln}`); //concatena

//Destructuracion de arreglos

// let colors = [ 'azul', 'blanco', 'verde'];
// let [firstColor, secondColor] = colors;  
// console.log(firstColor, secondColor);


//object literal

// function addressMaker (city, state){
//     const newAdress = { city: city, 
//                         state: state};
// console.log ('Mty', 'NL');

// }

// addressMaker ('MTY', 'NL');


// //mas sencillo


// function addressMaker (city, state){
//     const newAdress = { city, state};
// console.log (newAdress);
// }

// addressMaker ('MTY', 'NL');





//for of loop

// let incomes = [1000, 1200, 900]; //arreglo de num

// total = 0;

// for (const income of incomes){

//     total += income;

// }

// console.log(total);




///Recorrer cadenas de texto

// let fullName = 'Marina Alcubilla';
// for (const char of fullName){
//     console.log(char);
// }



//Spread operator

// let example1 = [1,2,3,4,5]; //arreglo
// let example2 = example1; //copiar la referencia a el arreglo
// example1.push(6);

// console.log(example1);
// console.log(example2);

//el spread si permite hacer una copia 

// let example1 = [1,2,3,4,5]; //arreglo
// let example2 = [...example1]; //copiar el arreglo..clon
// example1.push(6);
// console.log(example1);
// console.log(example2);


//operador rest..lo recibe como un arreglo con los tres puntos sin tner que definir cada parametro


// function add (...nums){
//     console.log(nums);
// }
// add(4,5,6,7);


// ///arrow function

// function add(...nums){
//     let total = nums.reduce (function (x , y){
//         return x + y;
//     } );
//     //suma los elem de adernto
//     console.log(total);
// }

// add(1,2,3,4,5);

//con flecha

// function add(...nums){
//   let total = nums.reduce ((x,y) => x + y)
//    console.log (total);
// }

// add(1,2,3,4,5);


// default parameters

// function add(num1, num2 = 10){
//     return num1 + num2;
// }

// console.log(add(2));

//Includes

// let numArray =[1,2,3,4,5];
// console.log(numArray.indexOf(0)); // busca y manda -1 si no lo encuentrea

// console.log(numArray.includes(5)); //booleano si lo encuentra en lel arreglo




// //scope
// if (true){
//     let example = 5; //definimos una variable solo dentro del scope
//     console.log(example);
// }


// //import && export 

// import { data } from './example.js';



//padStart ()  & paddEnd()

// let name = 'Ceci';

// console.log(name.padStart(10, 'c' ));  //rellena al incio hasta 10
// console.log(name.padEnd(10, 'i')); //rellena al final





//clases


// class Animales {
//     constructor(type, legs) //como definimos la clase cuando se crea
//     {
//         this.type = type;
//         this.legs = legs;
//     }

//     //aqui definimos metodos que son realmente funciones dentro de las clases
//     makeNoise(sound = 'Loud noise'){
//         console.log(sound);
//     }
// }

// //creamos un objeto propio de esa clase
// let cat = new Animales ('Cat', 4);
// console.log(cat.type);
// console.log(cat.legs);
// cat.makeNoise('Meow');













