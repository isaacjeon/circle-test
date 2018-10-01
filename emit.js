var c = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function draw(e) {
    var pos = getMousePos(c, e);
    x = pos.x;
    y = pos.y;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2*Math.PI);
    ctx.stroke();
}

function getMousePos(c, e) {
    var rect = c.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
}

c.addEventListener("click", draw);
