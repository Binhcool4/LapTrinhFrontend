function evenSquared(input) {
    if (!Array.isArray(input)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    if (input.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }

    let squared =  input.map((num) => num**2);
    let result = squared.filter((num) => num % 2 === 0);
    console.log(result);
}

evenSquared([ 2, 4, 5, 10 ]);