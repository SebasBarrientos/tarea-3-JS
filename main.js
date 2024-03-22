// Crea una función resta que espere dos parámetros a y b, y que devuelva la resta de los mismos.

function resta(a, b) {
  return a - b;
}
console.log(resta(2, 4));

// Crea una función la cual te pregunte por una nota del 0 al 10 y, dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.
function nota(x) {
  switch (true) {
    case x <= 4:
      return "Insuficiente";
    case x <= 6:
      return "Suficiente";
    case x <= 8:
      return "Notable";
    case x <= 10:
      return "Sobresaliente";

    default:
      break;
  }
}
console.log(nota(10));
// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’.

function duplicar(num) {
  if (typeof num !== "number") {
    return "Debo ser ejecutada con un número";
  }
  return num * 2;
}
console.log(duplicar(10));
console.log(duplicar("10a"));

// Crea la función caracterInicial. Debe recibir un tipo string y devolver un string con el primer carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.
function caracterInicial(palabra) {
  if (typeof palabra === "undefined") {
    return "Debo ser ejecutada con un string no vacío";
  }
  if (typeof palabra !== "string") {
    return "Debo ser ejecutada con un string";
  }
  return palabra[0];
}
console.log(caracterInicial("Hola"));

// Crea la función ultimoCaracter. Debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.
function caracterFinal(palabra) {
  if (typeof palabra === "undefined") {
    return "Debo ser ejecutada con un string no vacío";
  }
  if (typeof palabra !== "string") {
    return "Debo ser ejecutada con un string";
  }
  return palabra.at(-1);
}
console.log(caracterFinal("Hola"));
// Crea la función cuentaCaracteres. Debe recibir un tipo string y devolver un number con el número de carácteres.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
function cuentaCaracteres(palabra) {
  if (typeof palabra === "undefined") {
    return "Debo ser ejecutada con un string no vacío";
  }
  if (typeof palabra !== "string") {
    return "Debo ser ejecutada con un string";
  }
  return palabra.length;
}
console.log(cuentaCaracteres("holaaafssaf"));

// Un palíndromo es una palabra que se escribe igual del derecho que del revés, por ejemplo: orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'.
//Ejemplo utilizado para dar vuelta la palabra
// let hola = "hola";
// hola = hola.split("").reverse().join("");
// console.log(hola);
function esPalindromo(palabra) {
  let palindromo = palabra.split("").reverse().join("");
  if (typeof palabra === "undefined") {
    return "Debo ser ejecutada con un string no vacío";
  }
  if (typeof palabra !== "string") {
    return "Debo ser ejecutada con un string";
  }
  if (palabra == palindromo) {
    return true;
  }
  return false;
}
console.log(esPalindromo("ollllo"));
// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €.
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.
function getPrecioMostrar(num) {
  if (typeof num !== "number") {
    return "No es un formato correcto";
  }
  return num.toFixed(2) + "€";
}

console.log(getPrecioMostrar(2));
// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división.
function division(x, y) {
  return x / y;
}
console.log(division(8, 4));
// Crea una función que, dada una array de números, devuelva una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8].
const x = [3, 6, 8, 2];

function mas5(x) {
  let nuevoArray = [];
  for (let i = 0; i < x.length; i++) {
    const element = x[i];
    if (element > 5) {
      nuevoArray.push(element);
    }
  }
  return nuevoArray;
}
console.log(mas5(x));
// Crea una aplicación que nos pida un número por prompt y, con un método, se lo pasemos por parámetro para que nos indique si es o no un número primo. Debe devolver true si es primo, sino false.
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

function esprimo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(esprimo(6));

// Extras
// Crear la función obtenerImpares que acepte como argumento un array de números y devuelva un array con los elementos impares.
const y = [1, 2, 3, 4, 5, 6, 7];
function obtenerImpares(arr) {
  let nuevoArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 !== 0) {
      nuevoArray.push(element);
    }
  }
  return nuevoArray;
}
console.log(obtenerImpares(y));

// Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6.
function sumarArray(arr) {
  let element = 0;
  for (let i = 0; i < arr.length; i++) {
    element += arr[i];
  }
  return element;
}
console.log(sumarArray(y));
// Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24.
function multiplicarArray(arr) {
  let element = 1;
  for (let i = 0; i < arr.length; i++) {
    element *= arr[i];
  }
  return element;
}
console.log(multiplicarArray(x));

// Crea una función checkPassword con una variable tipo string que contenga una contraseña cualquiera. Después, se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes, ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena” (ej. un alert). Piensa bien en la condición de salida (3 intentos y, si acierta, sale aunque le queden intentos).
function checkPassword() {
  const contrasena = 1234;
  let i = 0;
  let contra;
  while (contrasena != contra && i != 3) {
    contra = prompt(`Intento ${i + 1} de contraseña`);
    i++;
  }
  if (contra == contrasena) {
    return alert("Enhorabuena");
  } else {
    return alert("Fallaste los 3 intentos, borrando windows");
  }
}
checkPassword();
