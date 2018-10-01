var x = event.clientX;     // Get the horizontal coordinate
var y = event.clientY;     // Get the vertical coordinate
var coor = "X coords: " + x + ", Y coords: " + y;
document.getElementById("coord").onclick = function(){
document.getElementById("coord").innerHTML = coor;
}
