let arr = ["", false, 0, 5, 10, "Hello world!"];
let find = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "" && arr[i] !== false && arr[i] !== 0 && arr[i] !== null && arr[i] !== undefined) {
        find.push(arr[i]);
    }
    
}
document.writeln(find);