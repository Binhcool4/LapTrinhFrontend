let arr = [];
function addArray() {
    let n = +prompt("Mời bạn nhập số lượng phần tử: ");
    if (n <= 0) {
        console.log("Mảng không chứa phần tử");
        return;
    } else {
        for (let i = 0; i < n; i++) {
            arr[i] = +prompt(`Mời bạn nhập mảng ${i + 1}: `);
        }
    }
}
 function checkArray() {
    let min = arr[0];
    for (let j = 0; j < arr.length; j++) {
        if (isNaN(arr[j])) {
            console.log("Giá trị không hợp lệ");
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            console.log(`Phần tử nhỏ nhất trong mảng là : ${min}`);
        }
        
    }
}

addArray();
checkArray();