"use strict";
function greet(name) {
    console.log("Hello: ", name);
}
function sum(a, b) {
    return a + b;
}
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
greet("kamran");
console.log(sum(10, 5));
console.log(isLegal(29));
