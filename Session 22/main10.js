let choice;
let myArray = [];
do {
    console.log("Menu");
    console.log("1. Nhập vào mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Thêm");
    console.log("4. Sửa");
    console.log("5. Xoá");
    console.log("6. Thoát");
    choice = +prompt("Lựa chọn của bạn");
    switch (choice) {
        case 1:
            let arrayLength = +prompt("Nhập số lượng phần tử");
            for (let i = 0; i < arrayLength; i++) {
                let element = prompt(`Nhập vào phần tử thứ ${i + 1}`);
                myArray[i] = element;
            }
            break;
        case 2:
            for (let i = 0; i < myArray.length; i++) {
                console.log(myArray[i]);
            }
            break;
        case 3:
            let element = prompt("Nhập phần tử muốn thêm");
            myArray.push(element);
            break;
        case 4:
            let updateIndex = +prompt("Nhập vị trí muốn sửa");
            let newValue = prompt(`Giá trị cũ là: ${myArray[updateIndex]}.Nhập giá trị mới`);
            myArray[updateIndex] = newValue;
            console.log(myArray);
            break;
        case 5:
            let deleteIndex = prompt("Nhập vị trí muốn xoá");
            myArray.splice(deleteIndex, 1);
            console.log(myArray);
            break;
        case 6:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Vui lòng nhập lại");
    }
} while (choice !== 6)