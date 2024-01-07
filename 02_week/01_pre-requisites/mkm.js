// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // let error = true;
//         let error = false;
//         if(!error) {
//             console.log("Hi my name is Kamran...");
//             resolve()
//         }
//         else {
//             reject('Something unexpected happened...')
//         }
//     }, 2000)
// })

// // promiseOne.then(() => {
// //     console.log("Promise cnsumed...");
// // })

// async function myName(){
//     try{
//         const response = await promiseOne;
//         console.log("Malik Kamran Mushtaq");
//         console.log(response);
//     }
//     catch(error) {
//         console.log(error);
//     }
// };
// myName()

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        // let error = true;
        let error = false;
        if (!error) {
            resolve({ language: "JavaScript", extension: "js" })
        } else {
            reject('ERROR! Something is not right...');
        }
    }, 2000)
})

async function consumePromiseFive() {    // when you want the task to be done first and then concume the promise, we use async await...
    console.log("malik");
    try {
        const response = await promiseFive;
        
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()