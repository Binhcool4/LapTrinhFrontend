let n = +prompt("Mời bạn nhập số lượng phần tử trong mảng: ");
if (n > 0) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("Mời bạn nhập mảng phẩn tử: ");
    }

    let negative = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < 0) {
            negative += 1;
        }
    }
    document.writeln(`Có ${negative} số âm trong mảng`);
} else if (n === 0) {
    document.writeln("Mảng không có phần tử");
} else {
    document.writeln("Số lượng phần tử không hợp lệ");
}