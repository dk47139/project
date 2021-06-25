// ФУНКЦИИ +СТРЕЛОЧНЫЕ

"use strict";


let num = 20;

function showFirstMessage (text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);


// console.log(calc(2, 6));
// console.log(calc(2, 6));
// console.log(calc(2, 6));
// console.log(calc(2, 6));

// function calc (a, b) {
//     return(a + b);
// }



function ret () {
    let num =50;
    return num;
}

const anotherNum = ret();

console.log(ret);
console.log(anotherNum);



const logger = function() {
    console.log('HELLO');
};

logger();


const calc = (a, b) => {
    console.log('1');
    return a + b;
};

console.log(calc(3, 5));
