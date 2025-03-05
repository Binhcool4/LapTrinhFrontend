let num = +prompt("Nhập một số");
if (num < 2) {
    document.write("Không phải là số nguyên tố");
} else {
    if (num >= 2) {
        let find = 0; 
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                document.write("Không phải là số nguyên tố");
                find = 1;
                break;
            }
        }
        if (find === 0) {
            document.write("Là số nguyên tố");
        }
    } else {
        document.write("Không phải là số nguyên tố"); 
    }
}