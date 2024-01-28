type StringOrNumber = number | string;

function username(name: StringOrNumber) {
    console.log(`name: ${name}`);
    
}

username(123);
username("Kamran123")