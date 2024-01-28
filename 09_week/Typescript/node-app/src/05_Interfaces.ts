interface User {
    firstname: string,
    lastname: string,
    age: number
}

function isUserLegal(user: User): boolean {
    if(user.age > 18) {
        return true;
    } else {
        return false;
    }
}

function greetings(user: User) {
    console.log("Hi: ", user.firstname);
    
}

