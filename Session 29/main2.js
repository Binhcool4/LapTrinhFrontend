let product = [];

function addProduct() {
    let id = +prompt("Mời bạn nhập mã sản phẩm: ");
    let name = prompt("Mời bạn nhập tên sản phẩm: ");
    let price = prompt("Mời bạn nhập giá sản phẩm: ");
    let category = prompt("Mời bạn nhập danh mục sản phẩm: ");
    let quantity = prompt("Mời bạn nhập số lượng sản phẩm trong kho: ");
    product.push({id, name, price, category, quantity});
}

function showProduct() {
    if (product.length === 0) {
        console.log("Danh bạ hiện tại trống.");
        return;
    }
    product.forEach((item) => {
        console.log(`ID: ${item.id}, Tên: ${item.name}, Giá: ${item.price}, Loại: ${item.category}, Số lượng: ${item.quantity}`);
    });
}

function showProductId() {
    let id = +prompt("Nhập id");
    let index = product.findIndex(function(el){
        return el.id === id;
    })

    if (index === -1){
        console.log("Ko hợp lệ");
    } else {
        console.log("Tìm thấy sản phẩm:");
        console.log("ID:",product[index].id);
        console.log("Tên:",product[index].name);
        console.log("Giá:",product[index].price);
        console.log("Loại:",product[index].category);
        console.log("Số lượng:",product[index].quantity);
    }
}

function updateProduct() {
    let id = +prompt("Mời bạn nhập id muốn update: ");
    let index = product.findIndex(function(el){
        return el.id === id;
    });

    if (index === -1) {
        console.log("ID không hợp lệ");
    } else {
        let name = prompt(`Mời bạn nhập tên mới (${product[index].name})`);
        let price = prompt(`Mời bạn nhập giá mới (${product[index].price})`);
        let category = prompt(`Mời bạn nhập loại mới (${product[index].category})`);
        let quantity = prompt(`Mời bạn nhập số lượng mới (${product[index].quantity})`);

        product[index].name = name;
        product[index].price = price;
        product[index].category = category;
        product[index].quantity = quantity;
        console.log("Cập nhật thành công !!")
    }
}

function deleteProduct() {
    let id = +prompt("Mời bạn nhập id muốn update: ");
    let index = product.findIndex((productItem) => productItem.id === id);
    if (index === -1) {
        console.log("Không tìm thấy sản phẩm với ID này.");
        return;
    }
    product.splice(index, 1);
    console.log("Đã xóa sản phẩm.");
}

function filterProduct() {
    let price = prompt("Mời bạn nhập giá để lọc sản phẩm");
    let findPrice = product.filter((product) => product.price.includes(price));
    if (findPrice.length === 0) {
        console.log("Không tìm thấy sản phẩm có giá này");
    } else {
        console.log("Kết quả tìm kiếm:");
        findPrice.forEach((productItem) => {
            console.log(`ID: ${productItem.id}, Tên: ${productItem.name}, Email: ${productItem.email}, SĐT: ${productItem.phone}`);
        });
    }
}

let choice;
do {
    console.log("");
    console.log("1.Thêm sản phẩm vào danh sách sản phẩm.");
    console.log("2.Hiển thị tất cả sản phẩm.");
    console.log("3.Hiển thị chi tiết sản phẩm theo id.");
    console.log("4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.");
    console.log("5.Xóa sản phẩm theo id.");
    console.log("6.Lọc sản phẩm theo khoảng giá.");
    console.log("7.Thoát.");
    choice = +prompt("Mời bạn nhập lựa chọn: ");
    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            showProduct();
            break;
        case 3:
            showProductId();
            break;
        case 4:
            updateProduct();
            break;
        case 5:
            deleteProduct();
            break;
        case 6:
            filterProduct();
            break;
        case 7:
            console.log("Thoát chương trình");
            break;                        
        default:
            break;
    }
} while (choice != 7);