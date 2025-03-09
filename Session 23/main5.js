let n = +prompt("Mời bạn nhập số lượng phần tử trong mảng: ");
if (n > 0) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt("Mời bạn nhập mảng phẩn tử: ");
    }

    let total = 0;
    for (let j = 0; j < arr.length; j++) {
        if (isFinite(arr[j])) {
            total += arr[j];
        }
    }
    if (total === 0) {
        document.writeln("Không có phần tử nào là số");
    } else {
        document.writeln(total);
    }
} else if (n === 0) {
    document.writeln("Mảng không có phần tử");
} else {
    document.writeln("Số lượng phần tử không được âm");
}