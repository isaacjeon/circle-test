document.addEventListener("click", function(e){
    var x = e.clientX;
    var y = e.clientY;
});
var coor = "X coords: " + x + ", Y coords: " + y;
document.getElementById("coord").onclick = function(){
document.getElementById("coord").innerHTML = coor;
}
