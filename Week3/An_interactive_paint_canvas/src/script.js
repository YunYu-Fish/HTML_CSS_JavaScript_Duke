var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// only paint if mouse is being dragged (moved while the button is pressed)
var isPainting = false;

function setWidth(value) {
  paintcanvas.width = value;
}

function setHeight(value){
  paintcanvas.height = value;
}

function startPaint(){
  isPainting = true;
}

function endPaint(){
  isPainting = false;
}

function doPaint(x,y){
  if(isPainting == true){
    paintCircle(x,y);
  }
}

function clearCanvas () {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

function changeColor(newColor){
  color = newColor;
}

// verify the given value is actually a number
function isNumeric (value) {
    // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
    return !isNaN(value);
}

function resizeBrush(newSize){
  radius = newSize;
  doucument.getElementById("sizeOutput").value = newSize;
}