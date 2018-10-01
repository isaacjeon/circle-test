var c = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.font="30px Arial";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("Click anywhere in this window.", canvas.width/2, canvas.height/2);

var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var maxRad = sqrt(pow(canvas.width, 2) + pow(canvas.height, 2));

function emit(col) {
    var pos = getCenterPos();
    var rad = 0;
    var id = setInterval(frame, 10);
    x = pos.x;
    y = pos.y;
    function frame() {
        if (rad == 10)
            emit((col + 1) % 7);
        if (rad == maxRad) {
          clearInterval(id);
        } else {
            rad++;
            ctx.strokeStyle = colors[col];
            ctx.beginPath();
            ctx.arc(x, y, rad, 0, 2*Math.PI);
            ctx.stroke();
        }
    }
}

function getCenterPos() {
    var rect = c.getBoundingClientRect();
    return {
      x: (rect.width - rect.left)/2,
      y: (rect.height - rect.top)/2
    };
}

window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var firstClick = true;
    c.onclick = function(){
        if (firstClick) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            firstClick = false;
        }
    emit(0);
    };
}
resizeCanvas();

