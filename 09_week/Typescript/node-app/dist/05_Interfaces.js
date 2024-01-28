"use strict";
function isUserLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greetings(user) {
    console.log("Hi: ", user.firstname);
}
