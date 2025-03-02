let edge1 = +prompt("Mời bạn nhập cạnh đầu tiên: ");
let edge2 = +prompt("Mời bạn nhập cạnh thứ hai: ");
let edge3 = +prompt("Mời bạn nhập cạnh thứ ba: ");
if (edge1 + edge2 > edge3 && edge1 + edge3 > edge2 && edge2 + edge3 > edge1) {
    if (edge1 === edge2 && edge2 === edge3) {
        document.write("Tam giác đều");
    } else if (edge1 === edge2 || edge1 === edge3 || edge2 === edge3) {
        document.write("Tam giác cân");
    } else if ((edge1 ** 2) + (edge2 ** 2) === (edge3 ** 2) || (edge1 ** 2) + (edge3 ** 2) === (edge2 ** 2) || (edge2 ** 2) + (edge3 ** 2) === (edge1 ** 2)) {
        document.write("Tam giác vuông");
    } else {
        document.write("Tam giác thường");
    }
} else {
    document.write("Đây không phải là hình tam giác")
}