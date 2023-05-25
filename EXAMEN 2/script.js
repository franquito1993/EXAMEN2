/* 5️⃣ En el archivo script.js muestra en consola los tipos (typeof) de las siguientes variables: 🚩
let uno = true;
let dos = "2";
let tres = 3;
let cuatro = null;
let cinco;
let seis = {numero: 6};
let siete = [7];   */

let uno = true;
let dos = "2";
let tres = 3;
let cuatro = null;
let cinco;
let seis = {numero: 6};
let siete = [7]; 
console.log(typeof(uno));
console.log(typeof(dos));
console.log(typeof(tres));
console.log(typeof(cuatro));
console.log(typeof(cinco));
console.log(typeof(seis));
console.log(typeof(siete));

//6️⃣ En el archivo script.js declara las siguiente variables: nombreProducto, precio, direccionEnvio, país y costoEnvio en una sola línea y asignar los valores correspondiente. 🚩

let nombreProducto = "Reloj";
let precio = 2100;
let direcionEnvio = "calle umarayu";
let pais = "Bolivia";
let costoEnvio = 300;

//7️⃣ Declare una variable llamada libreria y asígnele el valor inicial React es una biblioteca Javascript de código abierto creada por Facebook., en el archivo script.js. 🚩

let libreria = "React es una biblioteca Javascript de código abierto creada por Facebook."

//8️⃣ Mostrar la longitud de la variable libreria. 

console.log(libreria.length);

//9️⃣ Cambiar la frase React es una biblioteca por ReactNative es un framework, luego mostrar el resultado en consola. 🚩

libreria = libreria.replace("React es una biblioteca", "ReactNative es un framework");
console.log(libreria);

//1️⃣0️⃣ De la variable libreria, utilizar los métodos aprendidos (concat, toLowerCase, etc...)para mostrar en consola el siguiente resultado: 🚩
//               REACT es una BIBLIOTECA JavaScript de CÓDIGO ABIERTO CREADA por FACEBOOK.
let libreria2 = "React es una biblioteca JavaScript de código abierto creada por Facebook.";

let palabras = libreria2.split(" ");
let resultado = palabras[0].toUpperCase() + " " + palabras[1].toLowerCase() + " " + palabras[2].toLowerCase() + " " + palabras[3].toUpperCase() + " " + "JavaScript" + " " + palabras[5] + " " + palabras[6].toUpperCase() + " " + palabras[7].toUpperCase() + " " + palabras[8].toUpperCase() + " " + palabras[9].toLowerCase() + " " + palabras[10].toUpperCase();

//console.log(palabras);
console.log(resultado);

/*1️⃣1️⃣ Divide la cadena en la coma y cámbiala a una matriz. 
TOYOTA, SUZUKI, BMW, FORD, KIA, ISUZU, AUDI  */ 

let cadena = "TOYOTA, SUZUKI, BMW, FORD, KIA, ISUZU, AUDI";
let matriz = cadena.split(',');

console.log(matriz);

// 1️⃣2️⃣ Mostrar en consola de tipo error el código ASCII de la letra R. 

let error = "R";
console.error(error.charCodeAt(0));

// 1️⃣3️⃣ Mostrar en consola 4 veces la siguiente frase: HOLA MUNDO. 

console.log("HOLA MUNDO, ".repeat(4));

/* 1️⃣4️⃣ Mostrar en consola con el siguiente formato el mensaje: 
Hola estudio "Sistema" y estoy llevando la materia de:
    PROGRAMACION 1
    Turno: Noche
En el grupo 2  */

console.log("Hola estudio \"Sistema\" y estoy llevando la materia de:\n\tPROGRAMACION 1\n\tTurno: Noche\nEn el grupo 2");

// 1️⃣5️⃣ Mostrar en consola un número random entre 25 y el 50. 

console.log(Math.floor(Math.random() * 26) + 25);

//1️⃣6️⃣ Mostrar en consola el caracter que se encuentra en la posicion 8 de la variable libreria. 🚩

console.log(libreria.indexOf(8));  // es un espacio en blanco

// 1️⃣7️⃣ Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio. El resultado mostrar en la consola de tipo advetencia 🚩

let cadenaJava = "JavaScript";
let indiceAleatorio = Math.floor(Math.random() * cadenaJava.length);
let caracterAleatorio = cadenaJava.charAt(indiceAleatorio);

console.log(caracterAleatorio);

/* 1️⃣8️⃣ Convertir los siguientes valores: 
9.8     -> Numero entero
-5      -> Numero Absoluto
62      -> Cadena de texto
"28"    -> Numero entero
"15.65" -> Numero decimal */

let valor1 = 9.8
let valor2 = -5
let valor3 = 62
let valor4 = "28"
let valor5 = "15.65" 

let entero1 = Math.floor(valor1);
console.log(entero1); 

let absoluto = Math.abs(valor2);
console.log(absoluto); 

let cadenaT = valor3.toString();
console.log(cadenaT); 

// Convertir a número entero
let entero2 = parseInt(valor4);
console.log(entero2); 

// Convertir a número decimal
let decimal = parseFloat(valor5);
console.log(decimal); 

/* 1️⃣9️⃣ Muestra el valor máximo y mínimo del siguiente conjunto de número: 
4, 8, 16, 18, -52, -3, -1, 7     */ 

let conjunto = [4, 8, 16, 18, -52, -3, -1, 7];

let maximo = Math.max.apply(Math, conjunto);
let minimo = Math.min.apply(Math, conjunto);

console.log("Máximo:", maximo);
console.log("Mínimo:", minimo);

/* 2️⃣0️⃣ Redondea hacia arriba y hacia abajo el siguiente conjunto de número: 
let num1 = 9.78
let num2 = 5.20
let num3 = 1.64
let num4 = 5.7
let num5 = 3.23   */ 

let num1 = 9.78;
let num2 = 5.20;
let num3 = 1.64;
let num4 = 5.7;
let num5 = 3.23;

let redondeoHaciaArriba1 = Math.ceil(num1);
let redondeoHaciaAbajo1 = Math.floor(num1);
let redondeoHaciaArriba2 = Math.ceil(num2);
let redondeoHaciaAbajo2 = Math.floor(num2);
let redondeoHaciaArriba3 = Math.ceil(num3);
let redondeoHaciaAbajo3 = Math.floor(num3);
let redondeoHaciaArriba4 = Math.ceil(num4);
let redondeoHaciaAbajo4 = Math.floor(num4);
let redondeoHaciaArriba5 = Math.ceil(num5);
let redondeoHaciaAbajo5 = Math.floor(num5);
console.log("Redondeo hacia arriba de num1:", redondeoHaciaArriba1);
console.log("Redondeo hacia abajo de num1:", redondeoHaciaAbajo1);
console.log("Redondeo hacia arriba de num2:", redondeoHaciaArriba2);
console.log("Redondeo hacia abajo de num2:", redondeoHaciaAbajo2);
console.log("Redondeo hacia arriba de num3:", redondeoHaciaArriba3);
console.log("Redondeo hacia abajo de num3:", redondeoHaciaAbajo3);
console.log("Redondeo hacia arriba de num4:", redondeoHaciaArriba4);
console.log("Redondeo hacia abajo de num4:", redondeoHaciaAbajo4);
console.log("Redondeo hacia arriba de num5:", redondeoHaciaArriba5);
console.log("Redondeo hacia abajo de num5:", redondeoHaciaAbajo5);
