var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var head = function (_a) {
    var firstElement = _a[0], rest = _a.slice(1);
    return firstElement;
};
//Ejemplo
console.log('Head', head([1, 2, 3, 4])); // 1
console.log('Head', head(['a', 'b', 'c', 'd'])); // 'a
console.log('Head', head(['a', 'b', 'c'])); // 'a'
// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
var tail = function (_a) {
    var rest = _a[0], allElmentExceptTheFirst = _a.slice(1);
    return allElmentExceptTheFirst;
};
//Ejemplo
console.log('tail', tail([1, 2, 3, 4])); // [2,3,4]
console.log('tail', tail(['a', 'b', 'c', 'd'])); // ['b','c','d']
// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
var init = function (arr) {
    return arr.slice(0, arr.length - 1);
};
// Ejemplo
console.log('init', init([1, 2, 3, 4])); // [1,2,3]
console.log('init', init(['a', 'b', 'c', 'd'])); // ['a','b','c']
// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
var last = function (arr) {
    return arr[arr.length - 1];
};
console.log('last', last([1, 2, 3, 4])); // 4
console.log('last', last(['a', 'b', 'c', 'd'])); // 'd'
var concat = function (a, b) {
    return __spreadArray(__spreadArray([], a, true), b, true);
};
// Ejemplo
console.log('concat', concat([1, 2, 3, 4], ['a', 'b', 'c', 'd'])); // [1,2,3,4,'a','b','c','d']
// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
var concatMultiple = function () {
    var multiArr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        multiArr[_i] = arguments[_i];
    }
    // Implementation here.
    return [].concat.apply([], multiArr);
};
console.log('concatMultiple', concatMultiple([1, 2, 3, 4], ['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h'])); // [1,2,3,4,'a','b','c','d','e','f','g','h']
// 3. Clone Merge
// Clone
//Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
function clone(source) {
    return __assign({}, source);
}
// Ejemplo
var person = { name: 'Maria', age: 25, address: { city: 'Barcelona' }, brothers: ['Juan', 'Marta', { children: 'pepe' }] };
var clonedPerson = clone(person);
console.log('clone', clonedPerson); //clone {name: 'Maria',age: 25,address: { city: 'Barcelona' },brothers: [ 'Juan', 'Marta', { children: 'pepe' } ]}
// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
// Por ejemplo, dados estos 2 objetos:
var a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
var b = { name: 'Luisa', age: 31, married: true };
//TIP: Puedes usar la función "clone" del apartado A.
function merge(source, target) {
    return __assign(__assign({}, target), source);
}
console.log('merge', merge(a, b));
//4. Read Books
// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
function isBookRead(books, titleToSearch) {
    //implementation here
    var book = books.find(function (book) { return book.title === titleToSearch; });
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
var books = [
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
var SlothMachine = /** @class */ (function () {
    function SlothMachine() {
        this.coins = 0;
    }
    SlothMachine.prototype.play = function () {
        this.coins++;
        var random1 = Math.random() >= 0.5;
        var random2 = Math.random() >= 0.5;
        var random3 = Math.random() >= 0.5;
        console.log(this.coins);
        if (random1 && random2 && random3) {
            console.log("Congratulations!!!. You won ".concat(this.coins, " coins!!"));
            this.coins = 0;
        }
        else {
            console.log("Good luck next time!!");
        }
    };
    return SlothMachine;
}());
// Ejemplo de uso
var machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
