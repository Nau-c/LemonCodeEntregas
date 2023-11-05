// 1. Array operations
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
const head = ([firstElement, ...rest]/* array */) => {
   // Implementation here. 
   return firstElement;

    
}; 

//Ejemplo
console.log('Head',head([1,2,3,4])); // 1
console.log('Head',head(['a','b','c','d'])); // 'a'

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([rest, ...allElmentExceptTheFirst]/* array */) => {
   // Implementation here.
return allElmentExceptTheFirst;
}; 

//Ejemplo
console.log('tail',tail([1,2,3,4])); // [2,3,4]
console.log('tail',tail(['a','b','c','d'])); // ['b','c','d']

// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = ( arr /* array */) => {
// Implementation here.
   return arr.slice(0, arr.length - 1);

}; 

// Ejemplo
console.log('init',init([1,2,3,4])); // [1,2,3]
console.log('init',init(['a','b','c','d'])); // ['a','b','c']

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = ( arr/* array */) => {
// Implementation here.
   return arr[arr.length - 1];
}; 

console.log('last',last([1,2,3,4])); // 4
console.log('last',last(['a','b','c','d'])); // 'd'

// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = (a, b) => {
// Implementation here.
   return [...a, ...b];

}; 

// Ejemplo
console.log('concat',concat([1,2,3,4], ['a','b','c','d'])); // [1,2,3,4,'a','b','c','d']


// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const concatMultiple = (...multiArr) => {
// Implementation here.
   return [].concat(...multiArr);
}
console.log('concatMultiple',concatMultiple([1,2,3,4], ['a','b','c','d'], ['e','f','g','h'])); // [1,2,3,4,'a','b','c','d','e','f','g','h']