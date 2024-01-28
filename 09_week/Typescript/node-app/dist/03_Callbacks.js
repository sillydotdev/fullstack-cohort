"use strict";
function runAfterOneSecond(fn) {
    setTimeout(fn, 1000);
}
runAfterOneSecond(function () {
    console.log("Hi there");
    return 5;
});
