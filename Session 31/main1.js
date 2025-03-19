let box = document.getElementById('box')
let button = document.getElementById('btn');
button.onclick = function(){
    box.style.display = "none";
};

let button1 = document.getElementById('btn1');
button1.onclick = function(){
    box.style.display = "flex";
};