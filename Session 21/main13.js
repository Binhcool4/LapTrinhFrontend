for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10-i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");
for(let i=10; i>0; i--){
    for(let j=0; j<10-i+1; j++){
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");
for(let i=0; i<10; i++){
    for(let j=0; j<10-i-1; j++){
        document.write("&nbsp;&nbsp;");
    }
    for(let k=0; k<10+i-9; k++){
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");
for(let i=0; i<10; i++){
    for(let k=0; k<10+i-9; k++){
        document.write("&nbsp;&nbsp;");
    }
    for(let j=0; j<10-i; j++){
        document.write("*");
    }
    document.write("<br>");
}
