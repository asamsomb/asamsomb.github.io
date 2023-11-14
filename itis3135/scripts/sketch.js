function setup() {
    createCanvas(1500, 1000);
}

document.addEventListener('mousedown', start);
document.addEventListener('mouseup', stop);
document.addEventListener('mousemove', draw);

var mouseDown = false;
var x, y;

function start(event) {
    mouseDown = true;
    mouseX = event.offsetX;
    mouseY = event.offsetY;
}

function stop() {
    mouseDown = false;
}

function draw(event) {
    if (mouseDown) {
        fill(0);
        ellipse(event.offsetX, event.offsetY, 80, 80);
    }
}