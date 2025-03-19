let body = document.getElementById("body");
let green = document.getElementById("pressGreen");
let red = document.getElementById("pressRed");
let purple = document.getElementById("pressPurple");

green.onclick = function(){
    body.style.backgroundColor = "green";
};

red.onclick = function(){
    body.style.backgroundColor = "red";
};

purple.onclick = function(){
    body.style.backgroundColor = "rgb(233, 30, 233)";
}