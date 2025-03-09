for (let j = 0; j < 10; j++) {
    let arr = [prompt("Mời bạn nhập phần tử: ")];
    let find = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 10) {
            find += arr[i] + " ";
        }
            
    }
    document.writeln(find);   
}


