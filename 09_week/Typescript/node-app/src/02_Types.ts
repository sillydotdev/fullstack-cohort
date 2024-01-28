// greet function
function greet(name: string) {
    console.log("Hello: ",name);
}

// sum of 2 numbers
function sum(a: number, b: number): number {    // even if you don't give the type of sum() function here, Typescript already knows its type
    return a + b;                               // as both inputs are numbers... This is called "Type inference"
}

// boolean
function isLegal(age: number): boolean {
    if(age > 18) {
        return true;
    } else {
        return false;
    }
}

greet("kamran");
console.log(sum(10, 5));
console.log(isLegal(29));



