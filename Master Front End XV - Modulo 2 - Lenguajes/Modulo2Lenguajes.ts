// 1. Array operations
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
type firstElement = number | string;
const head = ([firstElement, ...rest]: firstElement[]): firstElement => {
   return firstElement;

    
}; 
//Ejemplo
console.log('Head',head([1,2,3,4])); // 1
console.log('Head',head(['a','b','c','d'])); // 'a
console.log('Head',head(['a','b','c'])); // 'a'

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
const tail = <T>([rest,...allElmentExceptTheFirst]: T[]): T[] => {
return allElmentExceptTheFirst;
}; 
//Ejemplo
console.log('tail',tail([1,2,3,4])); // [2,3,4]
console.log('tail',tail(['a','b','c','d'])); // ['b','c','d']
// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
const init = <T>( arr: T[]): T[] => {
   return arr.slice(0, arr.length - 1);
}; 

// Ejemplo
console.log('init',init([1,2,3,4])); // [1,2,3]
console.log('init',init(['a','b','c','d'])); // ['a','b','c']
// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = <T>( arr: T[]) => {
   return arr[arr.length - 1];
}; 
console.log('last',last([1,2,3,4])); // 4
console.log('last',last(['a','b','c','d'])); // 'd'


// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
type result = string | number;
const concat = (a: number[], b: string[] ): result[] => {
   return [...a, ...b];
}; 
// Ejemplo
console.log('concat',concat([1,2,3,4], ['a','b','c','d'])); // [1,2,3,4,'a','b','c','d']


// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const concatMultiple = <T>(...multiArr: T[]) => {
// Implementation here.
   return [].concat(...multiArr);
}
console.log('concatMultiple',concatMultiple([1,2,3,4], ['a','b','c','d'], ['e','f','g','h'])); // [1,2,3,4,'a','b','c','d','e','f','g','h']

// 3. Clone Merge
// Clone
//Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
function clone <T>(source: T): T {
   return {...source};
}
// Ejemplo
const person = { name: 'Maria', age: 25, address: { city: 'Barcelona' }, brothers: ['Juan', 'Marta' , {children:'pepe'}] };
const clonedPerson = clone( person );
console.log('clone',clonedPerson); //clone {name: 'Maria',age: 25,address: { city: 'Barcelona' },brothers: [ 'Juan', 'Marta', { children: 'pepe' } ]}

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
// Por ejemplo, dados estos 2 objetos:
const a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' }; 
const b = { name: 'Luisa', age: 31, married: true };

interface Person {
   name: string;
   surname?: string;
   country?: string;
   age?: number;
   married?: boolean;
}

//TIP: Puedes usar la función "clone" del apartado A.
function merge (source: Person, target: Person): Person {
   return {...target, ...source}
}

console.log('merge',merge(a, b));
// el resultado de mezclar a sobre b sería:
// merge(a, b); // {name: 'Maria', age: 31, married: true, surname: 'Ibañez', country: 'SPA'}


interface Book {
   title: string;
   isRead: boolean;
}
//4. Read Books
// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
function isBookRead(books: Book[], titleToSearch: string): boolean {
   //implementation here
   const book = books.find( book => book.title === titleToSearch)
   return book ? book.isRead : false;
}

// const isBookRead = (books, titleToSearch) => {
//    // Implementation here
//    return books.some(book => book.title === titleToSearch && book.isRead);
// }

// function isBookRead(books, titleToSearch) {
//    let isRead = false;
//    books.forEach(book => {
//        if (book.title === titleToSearch) {
//            isRead = book.isRead;
//        }
//    });
//    return isRead;
// }

// Ejemplo
const books = [
   { title: "Harry Potter y la piedra filosofal", isRead: true },
   { title: "Canción de hielo y fuego", isRead: false },
   { title: "Devastación", isRead: true },
 ];
 
 console.log(isBookRead(books, "Devastación")); // true
 console.log(isBookRead(books, "Canción de hielo y fuego")); // false
 console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

//  5. Slot Machine
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

class SlothMachine  {
   private coins: number;

   constructor() {
      this.coins = 0;
   }

   play(): void {
      this.coins++;
      const random1 = Math.random() >= 0.5;
      const random2 = Math.random() >= 0.5;
      const random3 = Math.random() >= 0.5;

      console.log(this.coins);
      if (random1 && random2 && random3) {
         console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
         this.coins = 0;
      } else {
         console.log("Good luck next time!!");
      }
   }
}
// Ejemplo de uso
const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"


