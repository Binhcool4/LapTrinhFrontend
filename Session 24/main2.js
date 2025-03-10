let choice;
let arr = [];
do {
    console.log(" ");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm các phần tử chẵn và lẻ");
    console.log("4. Tính trung bình cộng của mảng");
    console.log("5. Xóa phần tử tại vị trí chỉ định");
    console.log("6. Tìm phần tử lớn thứ hai trong mảng");
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
            let even = [];
            let odd = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    even.push(arr[i]);
                } else {
                    odd.push(arr[i]);
                }
            }
            console.log(`Phần tử chãn là ${even} và phần tử lẻ là ${odd}`);
            break;
        case 4:
            let total = 0;
            for (let i = 0; i < arr.length; i++) {
                total += arr[i];
            }
            console.log(`Trung bình cộng của mảng là ${total / arr.length}`);
            break;
        case 5:
            let deleteIndex = prompt("Nhập phần tử muốn xóa: ");
            arr.splice(deleteIndex, 1);
            console.log(arr);
            break;
        case 6:
            if (arr.length < 2) {
                console.log("Không thể tìm số lớn thứ hai");
            } else {
                let max = arr[0];
                let secondMax = arr[1];
                if (secondMax > max) {
                    let temp = max;
                    max = secondMax;
                    secondMax = temp;
                }
                for (let j = 2; j < arr.length; j++) {
                    if (arr[j] > max) {
                        secondMax = max;
                        max = arr[j];
                    } else if (arr[j] > secondMax && arr[j] < max) {
                        secondMax = arr[j];
                    }
                }
                if (max === secondMax) {
                    console.log("Không có số lớn thứ hai");
                } else {
                    console.log(secondMax);
                }
            }
            break;
        case 7:
            console.log("Thoát chương trình");
            break;                        
        default:
            break;
    }
} while (choice !== 7);