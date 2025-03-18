let cart = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "Món ăn dân tộc Mông"
    },

    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "Món ăn dân tộc Kinh"
    },

    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "Món ăn dân tộc Mông"
    },

    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "Món ăn dân tộc Kinh"
    }
];

function showCart() {
    let category = prompt("Mời bạn nhập tên danh mục");
    let findCategory = cart.filter((product) => product.category === category);
    if (findCategory === -1) {
        console.log("Không tìm thấy danh mục đó");
    } else {
        console.log("\nKết quả tìm kiếm:");
        findCategory.forEach((item) => {
            console.log(`ID: ${item.id} | Tên: ${item.name} | Giá: ${item.price} | Số lượng: ${item.quantity}`);
        });
    }
}

function buyCart() {
    let id = +prompt("Mời bạn nhập id muốn mua: ");
    let index = cart.findIndex(function(el){
        return el.id === id;
    });
    if (index === -1) {
        console.log("ID không hợp lệ");
    } else {
        let quantity = +prompt("Mời bạn nhập số lượng muốn mua: ");
        if (cart[index].quantity - quantity < 0 || cart[index].quantity === 0) {
            console.log("Sản phẩm đã hết hàng");
        } else {
            console.log("Bạn đã mua hàng");
            cart[index].quantity = cart[index].quantity - quantity;
            console.log(`Còn lại: ${cart[index].quantity}`);
        }
    }
}

function sortCart() {
    let temp;
    console.log("\na.Tăng dần.");
    console.log("b.Giảm dần.")
    let choice = prompt("Mời bạn nhập lựa chọn (a / b): ");
    if (choice === "a" || choice === "A") {
        for (let i = 0; i < cart.length - 1; i++) {
            for (let j = 0; j < cart.length - 1 - i; j++) {
                if (cart[j].price > cart[j + 1].price) {
                    temp = cart[j];
                    cart[j] = cart[j + 1];
                    cart[j + 1] = temp;
                }
            }
        }
        console.log("Sản phẩm sau khi sắp xếp tăng dần theo giá:");
    } else if (choice === "b" || choice === "B") {
        for (let i = 0; i < cart.length - 1; i++) {
            for (let j = 0; j < cart.length - 1 - i; j++) {
                if (cart[j].price < cart[j + 1].price) {
                    temp = cart[j];
                    cart[j] = cart[j + 1];
                    cart[j + 1] = temp;
                }
            }
        }
        console.log("Sản phẩm sau khi sắp xếp giảm dần theo giá:");
    } else {
        console.log("Lựa chọn không hợp lệ");
        return;
    }

    cart.forEach((item) => {
        console.log(`ID: ${item.id} | Tên: ${item.name} | Giá: ${item.price} | Số lượng: ${item.quantity}`);
    });
}

function payCart() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng tiền thanh toán: ${total} VND`);
}

let choice;
do {
    console.log("");
    console.log("1.Hiển thị các sản phẩm theo tên danh mục.");
    console.log("2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.");
    console.log("3.Sắp xếp các sản phẩm trong cửa hàng theo giá");
    console.log("4.Tính số tiền thanh toán trong giỏ hàng.");
    console.log("5.Thoát.");
    choice = +prompt("Mời bạn nhập lựa chọn: ");
    switch (choice) {
        case 1:
            showCart();
            break;
        case 2:
            buyCart();
            break;
        case 3:
            sortCart();
            break;
        case 4:
            payCart();
            break;
        case 5:
            console.log("Thoát chương trình");
            break;                
        default:
            break;
    }
} while (choice !== 5);