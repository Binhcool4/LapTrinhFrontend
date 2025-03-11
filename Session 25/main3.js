let arr = [11,4,65,6];
function checkArray() {
    let check = [];
    let flag = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            console.log("Dữ liệu không hợp lệ");
        } else {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] % 2 === 0) {
                    check.push(arr[j]);
                    flag++;
                }
            }
            if (flag !== 0) {
                console.log(check);
                return;
            } else {
                console.log("Mẳng không có số chẵn");
                return;
            }
        }
    }
}

checkArray();