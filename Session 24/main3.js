let choice;
let arr = [];
do {
    console.log("");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
    console.log("4. Tính tổng và trung bình cộng của các số dương trong mảng");
    console.log("5. Đảo ngược mảng");
    console.log("6. Kiểm tra mảng có đối xứng không");
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
            let max = arr[0];
            let index = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    index = i;
                }
            }
            console.log(`Số lớn nhất trong mảng là ${max} và chỉ số là ${index}`);
            break;
        case 4:
            let positive = [];
            let flag = 0;
            let total = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    positive.push(arr[i]);
                    flag++;
                }
            }
            if (flag === 0) {
                console.log("Trong mảng không có số dương");
            } else {
                for (let j = 0; j < positive.length; j++) {
                    total += positive[j];
                }
                console.log(`Tổng của số dương là ${total} và trung bình cộng số dương là ${total / positive.length}`);
            }
            break;
        case 5:
            arr.reverse();
            console.log(arr);
            break;
        case 6:
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === arr[arr.length - 1 - i]) {
                    console.log("Là số đối xứng");
                    break;
                }
                if (arr[i] !== arr[arr.length - 1 - i]) {
                    console.log("Không phải số đối xứng");
                    break;
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