'use strict';

// fasly value 
// => null , undefined , 0 , NAN , false , ''

// prototype inheritace 

let admin = {
    // top: 1,
    designation: 'admin',
}

let guest = {
    top: 0,
    designation: 'guest',
}

admin.__proto__ = guest;

console.log(admin.top);

class Admin {
    constructor(top ,designation){
        this.top = top 
        this.designation = designation 
    }
    rValue() {
        console.log(this.top , this.designation);    
    }
}
// console.log(typeof Admin);
// console.log(typeof(admin));

const objfirst = new Admin(1,'class Admin');
// console.log(typeof(objfirst));
// objfirst.rValue()

















// topics 


// Let var const 
// datatypes 
// control flow 
// functions
// operators
// arrow function
// error handling
// destructuring



 
// Array and Arrays method 
// string and string method '
// for of , for in , generator , combinatrion
// prototype prototype inheritance 
// pure function
// rest , spread
// shallow copy 
// deep copy 
// closure
// curring
// proxy



 
// object , classes 
// object methods 
// constructor functions
// prototype
// this 
// clases 
// class- creaation(inheritance)


 
// promises , promise chaining
// promise comostion
// asyn-await


 
// call , apply , bind
// prototyping chaining 
// object ceration pattern  
