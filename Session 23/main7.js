let n = +prompt("Mời bạn nhập số lượng phần tử trong mảng: ");
if (n > 0) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt("Mời bạn nhập mảng phẩn tử: ");
    }

    if (n < 2) {
        document.writeln("Không thể tìm số lớn thứ hai");
    } else {
        let max = arr[0];
        let secondMax = arr[1];
        if (secondMax > max) {
            let temp = max;
            max = secondMax;
            secondMax = temp;
        }
        for (let j = 2; j < n; j++) {
            if (arr[j] > max) {
                secondMax = max;
                max = arr[j];
            } else if (arr[j] > secondMax && arr[j] < max) {
                secondMax = arr[j];
            }
        }
        if (max === secondMax) {
            document.writeln("Không có số lớn thứ hai");
        } else {
            document.writeln(secondMax);
        }
    }
} else if (n === 0) {
    document.writeln("Mảng không có phần tử nào");
} else {
    document.writeln("Số lượng phần tử không được nhỏ hơn 0");
}