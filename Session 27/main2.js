function findStudent() {
    let name = prompt("Nhập tên sinh viên cần tìm: ");
    let found = student.filter(student => student === name);
    if (found.length > 0) {
        console.log("Sinh viên tìm thấy:", found);
    } else {
        console.log("Sinh viên không có trong danh sách.");
    }
}

function deleteStudent() {
    let name = prompt("Nhập tên sinh viên cần xóa: ");
    let index = student.indexOf(name);
    if (index !== -1) {
        student.splice(index, 1);
        console.log(`Đã xóa sinh viên "${name}" khỏi danh sách.`);
    } else {
        console.log("Sinh viên không có trong danh sách.");
    }
}

let choice;
let student = [];
do {
    console.log("");
    console.log("1.Nhập danh sách sinh viên.");
    console.log("2.Hiển thị danh sách sinh viên.");
    console.log("3.Tìm sinh viên theo tên.");
    console.log("4.Xóa sinh viên khỏi danh sách.");
    console.log("5.Thoát.");
    choice = +prompt("Mời bạn nhập lựa chọn: ");
   switch (choice) {
    case 1:
        let n = +prompt("Mời bạn nhập số lượng danh sách sinh viên cần nhập: ")
        for (let i = 0; i < n; i++) {
            student[i] = prompt(`Mời nhập thông tin sinh viên ${i + 1}: `);
        }
        break;
    case 2:
        console.log(student);
        break;
    case 3:
        findStudent();
        break;
    case 4:
        deleteStudent();
        break;
    case 5:
        console.log("Thoát màn hình");
        break;                
    default:
        break;
   } 
} while (choice != 5);