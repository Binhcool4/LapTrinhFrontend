function circularArea(radius) {
    return Math.PI * (radius**2);
}

function perimeterCỉcle(diameter) {
    return Math.PI * diameter;
}

function rectangleAcreage(height, width) {
    return height * width;
}

function rectanglePreimeter(height, width) {
    return (height + width) * 2;
}

let choice;
do {
    console.log("");
    console.log("1.Tính diện tích hình tròn.");
    console.log("2.Tính chu vi hình tròn.");
    console.log("3.Tính diện tích hình chữ nhật.");
    console.log("4.Tính chu vi hình chữ nhật.");
    console.log("5.Thoát.");
    choice = +prompt("Mời bạn nhập lựa chọn: ");
    switch (choice) {
        case 1:
            let n = +prompt("Nhập bán kính");
            console.log(circularArea(n).toFixed(2));
            break;
        case 2:
            let m = +prompt("Nhập đường kính");
            console.log(perimeterCỉcle(m).toFixed(2));
            break;
        case 3:
            let h = +prompt("Mời bạn nhập chiều cao: ");
            let w = +prompt("Mời bạn nhập chiều rộng: ");
            console.log(rectangleAcreage(h, w));
            break;
        case 4:
            let h1 = +prompt("Mời bạn nhập chiều cao: ");
            let w1 = +prompt("Mời bạn nhập chiều rộng: ");
            console.log(rectanglePreimeter(h1, w1));
            break;
        case 5:
            console.log("Thoát màn hình");
            break;                
        default:
            break;
    }
} while (choice != 5);