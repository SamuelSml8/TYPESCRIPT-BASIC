// Ejercicios de map():

// 1) Para este ejercicio, necesitarás escribir una función en TypeScript que tome un array de números como entrada y devuelva un nuevo array donde cada número sea el doble del número correspondiente en el array original. Aquí hay algunos pasos que puedes seguir para completar el ejercicio:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function doubleNumber(numbers: number[]): number[] {
  return numbers.map((number) => number * 2);
}

console.log(doubleNumber(numbers));

// 2) Duplicar Cadena: Escribe una función que tome un array de strings y devuelva un nuevo array donde cada string sea duplicado.

function doubleString(arrayString: string[]) {
  return arrayString.map((string) => string + string);
}

console.log(doubleString(["hola", "mundo"]));

// 3) Convertir Celsius a Fahrenheit: Escribe una función que tome un array de temperaturas en grados Celsius y devuelva un nuevo array donde cada temperatura esté convertida a grados Fahrenheit.

function celsiusConvert(celciusTemperatures: number[]): number[] {
  return celciusTemperatures.map((celcius) => celcius * (9 / 5) + 32);
}
const toConvert = [20, 15.2, 10.4, 10, 8, 30.7, 60.5];
console.log(celsiusConvert(toConvert));

// 4) Calcular Cuadrados: Escribe una función que tome un array de números y devuelva un nuevo array donde cada número sea elevado al cuadrado.

function squaredNumber(numbers: number[]): number[] {
  return numbers.map((number) => number ** 2);
}

console.log(squaredNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 5) Agregar Prefijo: Escribe una función que tome un array de palabras y un prefijo, y devuelva un nuevo array donde cada palabra tenga el prefijo agregado.

