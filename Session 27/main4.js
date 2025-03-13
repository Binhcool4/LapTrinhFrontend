function inputNum() {
    let n = +prompt("Nhập số lượng phần tử: ");
    for (let i = 0; i < n; i++) {
        let num = +prompt(`Nhập số thứ ${i + 1}: `);
        arr.push(num);
    }
}

function avg() {
    if (arr.length === 0) {
        console.log("Danh sách rỗng, không thể tính trung bình.");
        return;
    }
    let sum = arr.reduce((total, num) => total + num, 0);
    let average = sum / arr.length;
    console.log("Giá trị trung bình:", average);
}

function findMaxEven() {
    let max = arr[0];
    let flag = false;
    arr.forEach( num =>{
        if (num > max && num % 2 === 0) {
            max = num;
            flag = true;
        }
    });
    if (flag == true) {
        console.log(max);
    } else {
        console.log("Không có số chẵn lớn nhất");
    }
    return;
}

function findMinOdd() {
    let min = arr[0];
    arr.forEach( num =>{
        if (num < min && num % 2 !== 0) {
            min = num;
        }
    });
    
    console.log(min);
    return;
}

let arr =[];
let choice;
do {
    console.log("");
    console.log("1.Nhập danh sách số nguyên.");
    console.log("2.Tính trung bình các số.");
    console.log("3.Tìm số chẵn lớn nhất.");
    console.log("4.Tìm số lẻ nhỏ nhất.");
    console.log("5.Thoát.");
    choice = +prompt("Mời bạn nhập lựa chọn: ");
    switch (choice) {
        case 1:
            inputNum();
            break;
        case 2:
            avg();
            break;
        case 3:
            findMaxEven();
            break;
        case 4:
            findMinOdd();
            break;
        case 5:
            console.log("Thoát màn hình");
            break;                
        default:
            break;
    }
} while (choice != 5);