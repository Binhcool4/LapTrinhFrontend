let arr = [];
function addArray() {
    for (let i = 0; i < 2; i++) {
        arr[i] = +prompt("Mời bạn nhập hàm: ");
    }
}

function totalArray() {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            console.log("Giá trị không hợp lệ");
        } else {
            for (let j = 0; j < arr.length; j++) {
                total += arr[j];
            }
            console.log(total);
            return;
        }
    }
}
addArray();
totalArray();