var c = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
c.style.width  = window.innerWidth;
c.style.height = window.innerHeight;

function emit() {
    var pos = getCenterPos();
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
            ctx.arc(x, y, rad, 0, 2*Math.PI);
            ctx.stroke();
        }
    }
}

function getCenterPos() {
    var rect = c.getBoundingClientRect();
    return {
      x: rect.width - rect.left,
      y: rect.height - rect.top
    };
}

c.onload = function(){emit()};
