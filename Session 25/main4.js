function prime() {
    if (num < 2) {
        console.log("Không phải là số nguyên tố");
    } else {
        if (num >= 2) {
            let find = 0; 
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    console.log("Không phải là số nguyên tố");
                    find = 1;
                    break;
                }
            }
            if (find === 0) {
                console.log("Là số nguyên tố");
            }
        } else {
            console.log("Không phải là số nguyên tố"); 
        }
    }
}

let num = +prompt("Mời bạn nhập một số: ");
prime();