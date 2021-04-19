function dopink(){
  var c1 = document.getElementById("canvas");
  c1.style.backgroundColor="pink";
}

function docolor(){
  var c1 = document.getElementById("canvas");
  var colorinput = document.getElementById("clr");
  
  var color = colorinput.value;
  c1.style.backgroundColor = color;
}

function docolour(){
  var c1 = document.getElementById("canvas");
  var colorinput = document.getElementById("cl");
  
  var color = colorinput.value;
  c1.style.backgroundColor = color;
}

/*canvas 2 below here*/
function dosalmon(){
  var c2 = document.getElementById("canvas2");
  c2.style.backgroundColor="salmon";
}

function dosquare(){
  var c2 = document.getElementById("canvas2");
  var sizeinput = document.getElementById("sldr");
  
  var size = sizeinput.value;
  var context = c2.getContext("2d");
  
  context.clearRect(0,0,c2.width,c2.height);
  context.fillStyle= "pink";
  context.fillRect(10,10,size,size);
}