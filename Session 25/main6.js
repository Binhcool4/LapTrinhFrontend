function isPalindrome(string) {
    let myString = string.split("");
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === myString[myString.length - 1 - i]) {
            console.log("Là đối xứng");
            break;
        }
        if (myString[i] !== myString[myString.length - 1 - i]) {
            console.log("Không phải đối xứng");
            break;
        }
    }
}
let input = prompt("Mời bạn nhập chuỗi kí tự: ");
isPalindrome(input);