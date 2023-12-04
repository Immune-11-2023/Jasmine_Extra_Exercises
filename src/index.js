// 0) ENUNCIADO: dados 2 números a y b, retorna su producto (su multiplicación)
function multiplyTwoNumbers(a, b) {}

// 1) ENUNCIADO: Dado una palabra, devuelve el número de vocales que contiene
// Ejemplo: "oso" => 2
function countVowels(word) {}

// 2) ENUNCIADO: dada una string s (como "oso"), determina si dicha palabra es un palíndromo
// Devuelve un valor booleano (true si la palabra es un palíndromo, false si no)

// Ejemplos de palíndromos: "radar", "level", "rotor", "madam" ...
// Ejemplos de NO palíndromos: "zombi"
function isPalindrome(s) {}

// 3) ENUNCIADO: dado un array de palabras (words), encuentra y devuelve la palabra más larga del array

// Ejemplo: ["oso", "pera", "ornitorrinco", "Berlín"] => ornitorrinco
function findLongestWord(words) {}

// 4) Get unique words array from array
// ENUNCIADO: dado un array de palabras repetidas más de una vez, devuelve un array con elementos únicos
// Ejemplo: ["oso", "gato", "gato", "oso"] => ["oso", "gato"]
function getUniqueWordsArray(words) {}

// 5) No time to waste!
// ENUNCIADO: completa la función para que traduzca segundos a horas. 3600 => 1, 3656 => 1 (no queremos decimales; buscamos un valor exacto)
function getAmountOfHours(seconds) {}

// 6) Pako's Tinder Adventure
// ENUNCIADO: Pako ha vuelto a instalarse Tinder. Su plan es simple: ha creado un bot que automatiza sus swipes.
// Pako ha pensado afrontar sus problemas con un enfoque estrictamente matemático.
// El bot de Pako acepta a todo el mundo. Dice que está buscando amigos ("no tiene estándares").
// Nuestra misión es simple: dado un objeto con propiedades: {name, age, hobbies, nailsColor, bio, successRate,swipesPerMinute}, encuentra el número de matches que Pako tiene al día
// NOTA FINAL: Si el número no es exacto (que no va a ser exacto), trunca el resultado.

const pakoProfile = {
  name: "pakito_98",
  age: 25,
  hobbies: ["fishing", "football", "wine"],
  nailsColor: "black",
  bio: "buscando amigos ;P",
  successRate: 0.001,
  swipesPerMinute: 120,
}

function getPakosDailyMatchesAmount(pako = pakoProfile) {}

// 🔥🔥🔥 BONUS 1: Números palíndromos: https://leetcode.com/problems/palindrome-number/

// 🔥🔥🔥 BONUS: 2: Palíndromos avanzados (una kata super bonita) :DDD => https://leetcode.com/problems/valid-palindrome/

// NO SE TOCA 👹
if (typeof module !== "undefined") {
  module.exports = {
    multiplyTwoNumbers,
    isPalindrome,
    getUniqueWordsArray,
    findLongestWord,
    countVowels,
    getAmountOfHours,
    getHumanHour,
    getPakosDailyMatchesAmount,
  }
}
