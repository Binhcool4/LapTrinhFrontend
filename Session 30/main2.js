let books = [
    { id: 1, name: "Sách 1", price: 50000, quantity: 21, category: "Khoa học" },
    { id: 2, name: "Sách 2", price: 70000, quantity: 10, category: "Văn học" },
    { id: 3, name: "Sách 3", price: 60000, quantity: 8, category: "Khoa học" },
    { id: 4, name: "Sách 4", price: 80000, quantity: 4, category: "Trinh thám" }
];

function displayBooksByCategory() {
    let category = prompt("Nhập thể loại sách cần xem:");
    let found = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
    
    if (found.length > 0) {
        console.log(`\nDanh sách sách thuộc thể loại "${category}":`);
        found.forEach(book => console.log(`${book.id} - ${book.name} | ${book.price} VND | SL: ${book.quantity}`));
    } else {
        console.log("Không tìm thấy sách thuộc thể loại này.");
    }
}

function addBook() {
    let id = +prompt("Nhập mã sách:");
    let name = prompt("Nhập tên sách:");
    let price = +prompt("Nhập giá sách:");
    let quantity = +prompt("Nhập số lượng:");
    let category = prompt("Nhập thể loại:");

    books.push({ id, name, price, quantity, category });
    console.log(`Đã thêm sách "${name}" vào kho.`);
}

function searchBook() {
    let keyword = prompt("Nhập tên sách hoặc ID cần tìm:");
    let found = books.filter(book => book.name.includes(keyword) || book.id == keyword);

    if (found.length > 0) {
        console.log("\nKết quả tìm kiếm:");
        found.forEach(book => console.log(`${book.id} - ${book.name} | ${book.price} VND | SL: ${book.quantity}`));
    } else {
        console.log("Không tìm thấy sách.");
    }
}

function buyBook() {
    let id = +prompt("Nhập ID sách muốn mua:");
    let book = books.find(b => b.id === id);

    if (!book) {
        console.log("Sách không tồn tại.");
        return;
    }

    let quantity = +prompt("Nhập số lượng muốn mua:");

    if (quantity > book.quantity) {
        console.log("Số lượng trong kho không đủ.");
        return;
    }

    book.quantity -= quantity;
    let cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ id: book.id, name: book.name, price: book.price, quantity });
    }

    console.log(`Đã mua ${quantity} cuốn sách "${book.name}".`);
}

function sortBooksByPrice() {
    let temp;
    console.log("\na.Tăng dần.");
    console.log("b.Giảm dần.")
    let choice = prompt("Mời bạn nhập lựa chọn (a / b): ");
    if (choice === "a" || choice === "A") {
        for (let i = 0; i < books.length - 1; i++) {
            for (let j = 0; j < books.length - 1 - i; j++) {
                if (books[j].price > books[j + 1].price) {
                    temp = books[j];
                    books[j] = books[j + 1];
                    books[j + 1] = temp;
                }
            }
        }
        console.log("Sản phẩm sau khi sắp xếp tăng dần theo giá:");
    } else if (choice === "b" || choice === "B") {
        for (let i = 0; i < books.length - 1; i++) {
            for (let j = 0; j < books.length - 1 - i; j++) {
                if (books[j].price < books[j + 1].price) {
                    temp = books[j];
                    books[j] = books[j + 1];
                    books[j + 1] = temp;
                }
            }
        }
        console.log("Sản phẩm sau khi sắp xếp giảm dần theo giá:");
    } else {
        console.log("Lựa chọn không hợp lệ");
        return;
    }

    books.forEach((item) => {
        console.log(`ID: ${item.id} | Tên: ${item.name} | Giá: ${item.price} | Số lượng: ${item.quantity}`);
    });
}

function totalCart() {
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

    console.log(`Tổng số sách đã mua: ${totalQuantity}`);
    console.log(`Tổng tiền: ${totalPrice} VND`);
}

function totalBooksInStock() {
    let totalQuantity = books.reduce((sum, book) => sum + book.quantity, 0);
    console.log(`Tổng số sách còn trong kho: ${totalQuantity}`);
}

let cart = [];
let choice;
do {
    console.log("");
    console.log("1. Hiển thị danh sách sách theo thể loại");
    console.log("2. Thêm sách mới vào kho");
    console.log("3. Tìm kiếm sách theo tên hoặc ID");
    console.log("4. Mua sách");
    console.log("5. Sắp xếp sách theo giá");
    console.log("6. Tính tổng số lượng sách đã mua và tổng tiền");
    console.log("7. Hiển thị tổng số lượng sách trong kho");
    console.log("8. Thoát");

    choice = +prompt("Nhập lựa chọn:");

    switch (choice) {
        case 1:
            displayBooksByCategory();
            break;
        case 2:
            addBook();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            sortBooksByPrice();
            break;
        case 6:
            totalCart();
            break;
        case 7:
            totalBooksInStock();
            break;
        case 8:
            console.log("Thoát");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== 8);