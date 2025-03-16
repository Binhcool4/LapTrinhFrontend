let rectangle = {
    width: 10,
    heigth: 5,
    getArena: function(){
        return this.width * this.heigth;
    }
}
let arena = rectangle.getArena();
console.log(arena);