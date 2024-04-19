// Ejercicios de filter():

// 1) Escribe una función en TypeScript que tome un array de números y devuelva un nuevo array que contenga solo los números pares del array original. Utiliza el método filter() para realizar esta operación.

const arrayNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numbersPairs(numbers: number[]) {
  const pairs: number[] = numbers.filter((number) => number % 2 == 0);
  console.log(pairs);
}

numbersPairs(arrayNumbers);

// 2) Filtrar Números Pares: Escribe una función que tome un array de números y devuelva un nuevo array que contenga solo los números pares.

// 3) Filtrar Números Primos: Escribe una función que tome un array de números y devuelva un nuevo array que contenga solo los números primos.

// 4) Filtrar Palabras Cortas: Escribe una función que tome un array de palabras y devuelva un nuevo array que contenga solo las palabras con menos de 5 letras.

// 5) Filtrar Personas Mayores de Edad: Escribe una función que tome un array de objetos que representen personas (cada objeto tiene una propiedad edad) y devuelva un nuevo array que contenga solo las personas mayores de 18 años.
