var c = document.getElementById("canvas");
c.style.width = window.innerWidth;
c.style.height = window.innerHeight;

var colors = ["red", "orange", "yellow", "green", "blue", "purple"]
var count = 0;

function emit() {
    var pos = getCenterPos();
    var rad = 0;
    var id = setInterval(frame, 10);
    x = pos.x;
    y = pos.y;
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = colors[count];
    function frame() {
        if (rad == 10) {
            count == (count + 1) % 7;
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

function getCenterPos() {
    var rect = c.getBoundingClientRect();
    return {
      x: (rect.width - rect.left)/2,
      y: (rect.height - rect.top)/2
    };
}

c.onclick = function(){emit()};
