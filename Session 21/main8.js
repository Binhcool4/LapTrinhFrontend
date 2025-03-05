for (let i = 100; i <= 999; i++) {
    let sum = 0;
    let num = i;
    let originalNum = num;

    while (num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, 3);
        num = Math.floor(num / 10);
    }

    if (sum === originalNum) {
        document.write(i + "<br>");
    }
}