let n =+prompt("Mời bạn nhập số lượng phần tử trong mảng: ");
if (n > 0) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("Mời bạn nhập mảng phẩn tử: ");
    }
    let find = [];
    for (let j = 0; j < arr.length; j++) {
        if (isFinite(arr[j])) {
            find += arr[j] + " ";
        }
    }
    document.writeln(find);  
} else {
   document.writeln("Không có ký tự số") 
}