let body = document.getElementById('body');
let text = document.getElementById('text');
let text1 = document.getElementById('text1');
let button = document.getElementById('btn');
let isDarkMode;
button.addEventListener('click', function(){
    if (!isDarkMode) {
        body.style.backgroundColor = "black";
        text.style.color = "white";
        text1.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        text.style.color = "black";
        text1.style.color = "black";
    }
    isDarkMode = !isDarkMode;
});