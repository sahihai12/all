'use strict';

console.log('asynchronus js');
// callbacks 
// promises
// async and await

// function name(parameters) {}
// name(arguments)

let i = 0 ;
function* generator() {
    if (i < 10) {
        // yield i++;
        console.log(yield i++);
    }
}

// console.log(generator().next());
// console.log(generator().next());
// console.log(generator().next());
// console.log(generator().next());
// console.log(generator().next());
// console.log(generator().next());
// console.log(generator().next());
// console.log(generator().next());


