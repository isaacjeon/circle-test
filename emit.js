var c = document.getElementById("canvas");
c.style.width = window.innerWidth;
c.style.height = window.innerHeight;

var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
var count = 0;

function emit() {
    var pos = getMousePos(e);
    var rad = 0;
    var id = setInterval(frame, 10);
    x = pos.x;
    y = pos.y;
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = colors[count];
    function frame() {
        if (rad == 10) {
            count = (count + 1) % 7;
            emit();
        }
        if (pos == 100) {
          clearInterval(id);
        } else {
            rad++; 
            ctx.beginPath();
            ctx.arc(x, y, rad, 0, 2*Math.PI);
            ctx.stroke();
        }
    }
}

function getMousePos(e) {
    var rect = c.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

c.addEventListener("click", emit);
