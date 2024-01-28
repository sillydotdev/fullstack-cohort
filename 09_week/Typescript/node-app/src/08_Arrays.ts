function maxValue(arr: number[]) {
    // if (arr.length === 0) {
    //     // Handle empty array case
    //     throw new Error("Array is empty");
    // }
    // ..
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));