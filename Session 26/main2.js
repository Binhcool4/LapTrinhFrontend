let arr = ["apple", "banana", "cat", "elephant", "dog"];
if (!arr.length) {
    console.log("Mảng không có phần tử nào");
} else {
    let text = arr.filter((name) => name.length > 5);
    console.log(text);
}
