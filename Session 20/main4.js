let str = prompt("Mời bạn nhập chuỗi kí tự");
let arr = [];
arr += str;
let search = prompt("Mời bạn nhập kí tự cần tìm");
let find = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
        document.write("Tồn tại từ cần tìm kiếm");
        find = 1;
    }
}

if (find === 0) {
    document.write("Không tồn tại từ cần tìm kiếm");
}