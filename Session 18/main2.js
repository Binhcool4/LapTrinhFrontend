let math = +prompt("Mời bạn nhập điểm toán: ");
let literature = +prompt("Mời bạn nhập điểm văn: ");
let english = +prompt("Mời bạn nhập điểm anh: ");

let average = (math + literature + english) / 3;
if (average >= 8.0) {
    document.write("Học lực Giỏi");
} else if (average >= 6.5 && average <= 7.9) {
    document.write("Học lực Khá");
} else if (average >= 5.0 && average <= 6.4) {
    document.write("Học lực Trung Bình");
} else {
    document.write("Học lực Yếu");
}