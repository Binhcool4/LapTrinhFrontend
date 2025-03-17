let menu = {};
function addMenu() {
    let category = prompt("Nhập danh mục món ăn:");
    let name = prompt("Nhập tên món ăn:");
    let price = +prompt("Nhập giá món ăn:");
    let description = prompt("Nhập mô tả món ăn:");
    if (!menu[category]) {
        menu[category] = [];
    }
    menu[category].push({ name, price, description });    
    console.log(`Đã thêm món "${name}" vào danh mục "${category}".`);
}

function deleteMenu() {
    let category = prompt("Nhập danh mục:");
    let name = prompt("Nhập tên món cần xóa:");

    if (menu[category]) {
        let index = menu[category].findIndex(dish => dish.name === name);
        if (index !== -1) {
            menu[category].splice(index, 1);
            console.log(`Đã xóa món "${name}" khỏi danh mục "${category}".`);
        } else {
            console.log("Không tìm thấy món ăn.");
        }
    } else {
        console.log("Danh mục không tồn tại.");
    }
}

function updateMenu() {
    let category = prompt("Nhập danh mục:");
    let name = prompt("Nhập tên món cần cập nhật:");

    if (menu[category]) {
        let dish = menu[category].find(d => d.name === name);
        if (dish) {
            dish.name = prompt("Nhập tên mới:");
            dish.price = +prompt("Nhập giá mới:");
            dish.description = prompt("Nhập mô tả mới:");
            console.log("Cập nhật món ăn thành công.");
        } else {
            console.log("Không tìm thấy món ăn.");
        }
    } else {
        console.log("Danh mục không tồn tại.");
    }
}

function displayMenu() {
    if (Object.keys(menu).length === 0) {
        console.log("Menu trống.");
    } else {
        for (let category in menu) {
            console.log(`\nDanh mục: ${category}`);
            menu[category].forEach(dish => {
                console.log(`- ${dish.name} | ${dish.price} VND | ${dish.description}`);
            });
        }
    }
}

function searchMenu() {
    let searchName = prompt("Nhập tên món ăn cần tìm:");
    let found = false;
    for (let category in menu) {
        menu[category].forEach(dish => {
            if (dish.name.toLowerCase().includes(searchName.toLowerCase())) {
                console.log(`Danh mục: ${category} | ${dish.name} | ${dish.price} VND | ${dish.description}`);
                found = true;
            }
        });
    }
    if (!found) console.log("Không tìm thấy món ăn nào.");
}

let choice;
do {
    console.log("");
    console.log("1. Thêm món ăn vào danh mục");
    console.log("2. Xóa món ăn theo tên khỏi danh mục");
    console.log("3. Cập nhật thông tin món ăn");
    console.log("4. Hiển thị toàn bộ menu");
    console.log("5. Tìm kiếm món ăn theo tên");
    console.log("6. Thoát");

    choice = +prompt("Nhập lựa chọn của bạn:");

    switch (choice) {
        case 1:
            addMenu();
            break;
        case 2:
            deleteMenu();
            break;
        case 3:
            updateMenu();
            break;
        case 4:
            displayMenu();
            break;
        case 5:
            searchMenu();
            break;
        case 6:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
    }
} while (choice !== 6);