var c = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.width  = window.innerWidth;
ctx.height = window.innerHeight;

function emit(e) {
    var pos = getMousePos(c, e);
    var rad = 0;
    var id = setInterval(frame, 10);
    x = pos.x;
    y = pos.y;
    ctx.strokeStyle = "red";
    function frame() {
        if (pos == 100) {
          clearInterval(id);
        } else {
            rad++; 
            ctx.beginPath();
            ctx.arc(x, y, 50, rad, 2*Math.PI);
            ctx.stroke();
        }
    }
}

function getMousePos(c, e) {
    var rect = c.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
}

c.addEventListener("click", emit);
