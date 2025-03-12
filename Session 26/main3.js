function checkString(text) {
    return text.includes("@");
}

let arr = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
if (!arr.length) {
    console.log("Mảng không có phần tử nào");
} else {
    let result = arr.filter(checkString);
    console.log(result);
}

