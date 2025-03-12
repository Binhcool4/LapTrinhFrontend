let arr = [1, 22, 10, 9, 8, 6, 44, 3, 5, 4];
if (!arr.every(num => !isNaN(num))) {
    console.log("Dữ liệu không hợp lệ");
} else if (!arr.length) {
    console.log("Mảng không có phần tử nào");
} else {
    let biggerNum = arr.filter((num) => num >= 10);
    console.log(biggerNum);
}