function divideArray(arr, size) {
    if (!Array.isArray(arr) || typeof size !== 'number' || size <= 0) {
        return "dữ liệu không hợp lệ";
    }
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(divideArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(divideArray([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(divideArray("abc", 3));