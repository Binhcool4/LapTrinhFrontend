function positive(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            console.log("dữ liệu không hợp lệ");
            return;
        }
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            count++;
        }
    }
    
    if (count > 0) {
        console.log(count);
    } else {
        console.log("không có số nguyên dương trong mảng");
    }
}
let input = prompt("Nhập các phần tử của mảng: ");
let arr = input.split(",").map(Number);
positive(arr);