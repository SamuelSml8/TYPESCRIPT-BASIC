// Ejercicio 1: Uso del método map()
// Para este ejercicio, necesitarás escribir una función en TypeScript que tome un array de números como entrada y devuelva un nuevo array donde cada número sea el doble del número correspondiente en el array original. Aquí hay algunos pasos que puedes seguir para completar el ejercicio:
// Define una función en TypeScript que acepte un array de números como parámetro de entrada.
// Dentro de la función, utiliza el método map() en el array de números para transformar cada número.
// Para cada número en el array original, devuelve el doble de ese número utilizando una función de flecha dentro del método map().
// Finalmente, devuelve el nuevo array resultante después de aplicar la transformación a todos los números.
// Recuerda probar tu función con algunos casos de prueba para asegurarte de que funcione como se espera.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function doubleNumber(numbers) {
    return numbers.map(function (number) { return number * 2; });
}
console.log(doubleNumber(numbers));
