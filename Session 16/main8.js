let fistNum = +prompt("Mời bạn nhập số đầu: ");
let secondNum = +prompt("Mời bạn nhập số thứ hai: ");
let thirdNum = +prompt("Mời bạn nhập số thứ ba: ");

if (fistNum > secondNum && fistNum > thirdNum) {
    document.write(`Số thứ nhất chứa giá trị ${fistNum} là giá trị lớn nhất.`);
} else if (secondNum > fistNum && secondNum > thirdNum){
    document.write(`Số thứ hai chứa giá trị ${secondNum} là giá trị lớn nhất.`);  
} else {
    document.write(`Số thứ ba chứa giá trị ${thirdNum} là giá trị lớn nhất.`);
}
