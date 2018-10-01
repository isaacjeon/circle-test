var c = document.getElementById("canvas");
c.style.width = window.innerWidth;
c.style.height = window.innerHeight;

var context = canvas.getContext("2d");
context.font="30px Arial";
context.textAlign = "center";
context.fillText("Click anywhere in this window", canvas.width/2, canvas.height/2);

var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
var count = 0;

function emit() {
    var pos = getCenterPos();
    var rad = 0;
    var id = setInterval(frame, 100);
    x = pos.x;
    y = pos.y;
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = colors[count];
    function frame() {
        if (rad == 10) {
            temp = count;
            count = (count + 1) % 7;
            emit();
            count = temp;
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

var firstClick = true;
c.onclick = function(){
    if (firstClick) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        firstClick = false;
    }
    emit();
};
