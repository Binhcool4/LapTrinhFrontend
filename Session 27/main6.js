function arithmeticProgression(arr) {
    if (!Array.isArray(arr)) {
        return "dữ liệu không hợp lệ";
    }
    if (arr.length < 2) {
        return true;
    }
    let distance = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== distance) {
            return false;
        }
    }
    return true;
}
console.log(arithmeticProgression([2, 4, 6, 8]));
console.log(arithmeticProgression([3, 6, 9, 12, 14]));
console.log(arithmeticProgression("abc"));