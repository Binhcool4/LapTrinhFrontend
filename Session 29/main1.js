let contact = [];
function addContact() {
    let id = +prompt("Mời bạn nhập định danh id người liên hệ: ");
    let name = prompt("Mời bạn nhập tên người liên hệ: ");
    let email = prompt("Mời bạn nhập email người liên hệ: ");
    let phone = prompt("Mời bạn nhập sđt người liên hệ: ");
    contact.push({id, name, email, phone});
}

function showContact() {
    if (contact.length === 0) {
        console.log("Danh bạ hiện tại trống.");
        return;
    }
    contact.forEach((contactItem) => {
        console.log(`ID: ${contactItem.id}, Tên: ${contactItem.name}, Email: ${contactItem.email}, SĐT: ${contactItem.phone}`);
    });

}

function searchPhone() {
    let phone = prompt("Mời bạn nhập sđt cần tìm: ");
    let findNumber = contact.filter((num) => num.phone.includes(phone));
    if (findNumber.length === 0) {
        console.log("Không tìm thấy liên hệ với số điện thoại này.");
    } else {
        console.log("Kết quả tìm kiếm:");
        findNumber.forEach((contactItem) => {
            console.log(`ID: ${contactItem.id}, Tên: ${contactItem.name}, Email: ${contactItem.email}, SĐT: ${contactItem.phone}`);
        });
    }
}

function updateContact() {
    let id = +prompt("Mời bạn nhập ID người liên hệ cần cập nhật: ");
    let contactToUpdate = contact.find((contactItem) => contactItem.id === id);
    if (!contactToUpdate) {
        console.log("Không tìm thấy người liên hệ với ID này.");
        return;
    }

    let name = prompt(`Mời bạn nhập tên mới (${contactToUpdate.name}): `) 
    let email = prompt(`Mời bạn nhập email mới (${contactToUpdate.email}): `) 
    let phone = prompt(`Mời bạn nhập số điện thoại mới (${contactToUpdate.phone}): `) 

    contactToUpdate.name = name;
    contactToUpdate.email = email;
    contactToUpdate.phone = phone;

    console.log("Cập nhật thông tin thành công.");
}

function deleteContact() {
    let id = +prompt("Mời bạn nhập ID người liên hệ cần xóa: ");
    let index = contact.findIndex((contactItem) => contactItem.id === id);
    if (index === -1) {
        console.log("Không tìm thấy người liên hệ với ID này.");
        return;
    }
    contact.splice(index, 1);
    console.log("Đã xóa người liên hệ.");
}


let choice;
do {
    console.log("");
    console.log("1.Thêm đối tượng Contact vào danh sách liên hệ.");
    console.log("2.Hiển thị danh sách danh bạ.");
    console.log("3.Tìm kiếm thông tin Contact theo số điện thoại.");
    console.log("4.Cập nhật thông tin Contact(name, email, phone) theo id.");
    console.log("5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.");
    console.log("6.Thoát.");
    choice = +prompt("Mời bạn nhập lựa chọn: ");
    switch (choice) {
        case 1:
            addContact();
            break;
        case 2:
            showContact();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            updateContact();
            break;
        case 5:
            deleteContact();
            break;
        case 6:
            console.log("Thoát chương trình");
            break;                    
        default:
            break;
    }
} while (choice != 6);