// Ejercicio 2: Uso del método filter()
// Escribe una función en TypeScript que tome un array de números y devuelva un nuevo array que contenga solo los números pares del array original. Utiliza el método filter() para realizar esta operación.
var arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function numbersPairs(numbers) {
    var pairs = numbers.filter(function (number) { return number % 2 == 0; });
    console.log(pairs);
}
numbersPairs(arrayNumbers);
