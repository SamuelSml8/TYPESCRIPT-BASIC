// 3. Crear una función que determine si una cadena de caracteres es un palíndromo.
// a. Convertir la cadena a minúsculas y eliminar espacios en blanco.
// b. Comparar la cadena original con la cadena invertida.
// c. Mostrar un mensaje indicando si la cadena es un palíndromo o no.

function isPalindrome(word: String): boolean {
  const wordReversed = word.toLowerCase().split("").reverse().join("");
  if (wordReversed === word.toLowerCase()) {
    console.log("Is palindrome");
    return true;
  } else {
    console.log("Not palindrome");
    return false;
  }
}

isPalindrome("reconocer");
