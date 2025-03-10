let choice;
let arr = [];
do {
    console.log(" ");
    console.log("1. Nhập mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng");
    console.log("4. Tính tổng các phần tử trong mảng");
    console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng");
    console.log("6. Sắp xếp mảng tăng dần");
    console.log("7. Thoát chương trình");
    choice = +prompt("Mời bạn nhập lựa chọn: ");
    switch (choice) {
        case 1:
            let n = +prompt("Mời bạn nhập khối lượng mảng");
            for (let i = 0; i < n; i++) {
                arr[i] = +prompt(`Mảng thứ ${i+1}: `);
            }
            break;
        case 2:
            for (let j = 0; j < arr.length; j++) {
                console.log(arr[j]);
            }
            break;
        case 3:
            let max = 0;
            let min = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            console.log(`Số lớn nhất là ${max} và số nhỏ nhất là ${min}`);
            break;
        case 4:
            let total = 0;
            for (let i = 0; i < arr.length; i++) {
                total += arr[i];
            }
            console.log(`Tổng của mảng là ${total}`);
            break;
        case 5:
            let find = +prompt("Mời bạn nhập phần tử cần tìm: ");
            let result = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === find) {
                    result++;
                }
            }
            if (result === 0) {
                console.log("Phần tử đó không có trong mảng");
            } else {
                console.log(`Số lần xuất hiện của phần tử đó là ${result}`);
            }
            break;
        case 6:
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - 1 - i; j++) {
                    if (arr[j] > arr[j+1]) {
                        let temp = arr[j+1];
                        arr[j+1] = arr[j];
                        arr[j] = temp;
                    } 
                }
            }
            console.log(arr);
            break;
        case 7:
            console.log("Thoát chương trình")
            break;                 
        default:
            break;
    }
} while (choice !== 7);