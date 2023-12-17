export function square(num) {
    return num ** 2;
}

export function cube(num) {
    return num ** 3;
}

export function sum (a, b) {         // or we can directly export like this
    return a + b;
}

// export {        // we can export like this as well
//     square, 
//     myCube as cube
// }