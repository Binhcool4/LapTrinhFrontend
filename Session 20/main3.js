let num = +prompt("Mời bạn nhập số nguyên: ")
let str = num.toString();
let len = str.length;
for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        document.write("Không phải số đối xứng");
        break;
    }

    if (str[i] === str[len - 1 - i]) {
        document.write("Là số đối xứng");
        break;
    }
}