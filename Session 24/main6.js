let choice;
let arr = [];
do {
    console.log("");
    console.log("1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log("3. Tính độ dài của chuỗi");
    console.log("4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi");
    console.log("5. Kiểm tra chuỗi có phải là chuỗi đối xứng không");
    console.log("6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ");
    console.log("7. Thoát chương trình");
    choice = +prompt("Mời bạn nhập lựa chọn: ");
    switch (choice) {
        case 1:
            let n = +prompt("Mời bạn nhập khối lượng mảng");
            for (let i = 0; i < n; i++) {
                arr[i] = prompt(`Mảng thứ ${i+1}: `);
            }
            break;
        case 2:
            for (let j = 0; j < arr.length; j++) {
                console.log(arr[j]);
            }
            break;
        case 3:
            console.log(`Độ dài của mảng là ${arr.length}`);
            break;
        case 4:
            let find = prompt("Mời bạn nhập phần tử cần tìm: ");
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
        case 5:
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
        case 6:
            case 6:
            let inputString = prompt("Mời bạn nhập chuỗi cần chuyển đổi: ");
            let words = inputString.split(' '); 
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
            }
            let resultString = words.join(' '); 
            console.log(resultString); 
            break;
        case 7:
            console.log("Thoát chương trình");
            break;                        
        default:
            break;
    }
} while (choice !== 7);