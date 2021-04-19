function upload(){
  var fileinput = document.getElementById("textinput");
  var filename = fileinput.value;
  alert("You chose " + filename);
}

function upload2(){
  var imgcanvas = document.getElementById("can2");
  var fileinput = document.getElementById("finput");
  var image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}