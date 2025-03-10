let choice;
let rows;
let cols;
let array = [];
do {
    console.log("");
    console.log("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. TÌm phần tử lớn nhất trong mảng và chỉ số của nó");
    console.log("5. Tính trung bình cộng cấc phần tử của một hàng cụ thể");
    console.log("6. Đảo ngược các hàng trong mảng");
    console.log("7. Thoát chương trình");
    choice = +prompt("Mời bạn nhập lựa chọn: ");
    switch (choice) {
        case 1:
            rows = +prompt("Nhập số hàng");
            cols = +prompt("Nhập số cột");
            for (let i = 0; i < rows; i++) {
                let row = [];
                for (let j = 0; j < cols; j++) {
                    row.push(+prompt(`Nhập phần tử thứ arr [${i}][${j}]`));
                }
                array.push(row);
            }
            break;
        case 2:
            console.log(array);
            break;
        case 3:
            let total = 0;
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    total += array[i][j];
                }
            }
            console.log(`Tổng các phần tử trong mảng ${total}`);
            break;
        case 4:
            let max = array[0][0];
            let rowsindex;
            let colsindex;
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if (array[i][j]> max) {
                        max = array[i][j];
                        rowsindex = i;
                        colsindex = j;
                    }
                }    
            }
            console.log(`Phần tử lớn nhất là ${max} nằm tại vị trí [${rowsindex}][${colsindex}]`);
            break;
        case 5:
            let sum2 = 0;
            let avg = 0;
            let rowavg = +prompt("Mời bạn nhập hàng muốn tính trung bình cộng");
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if (i == rowavg - 1) {
                        sum2 += array[i][j];
                    }
                } 
            }
            avg = sum2 / cols;
            console.log(`Trung bình cộng hàng ${rowavg} là: ${avg}`);
            break;
        case 6:
            array.reverse();
            console.log("Mảng sau khi đảo ngược các hàng:");
            console.log(array);
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            break;
    }
} while (choice !== 7);