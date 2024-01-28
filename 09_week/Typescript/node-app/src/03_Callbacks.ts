function runAfterOneSecond(fn: () => void) {
    setTimeout(fn, 1000);
}

runAfterOneSecond(function() {
    console.log("Hi there");
    return 5;
    
})
