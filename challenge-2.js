/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const sonAnagramas = (palabra1,palabra2) =>{
    const ordenarLetras= palabra =>palabra.split("").sort().join("")
    return ordenarLetras(palabra1) === ordenarLetras(palabra2);
}


console.log(sonAnagramas('amor','roma'));
console.log(sonAnagramas('franco','jose'));