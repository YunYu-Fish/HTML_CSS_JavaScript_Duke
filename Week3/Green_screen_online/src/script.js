var fgimage = null;
var bgimage = null;
var canvas1 = null;
var canvas2 = null;

function loadForegroundImage(){
  var imgfile = document.getElementById("fgfile");
  canvas1 = document.getElementById("can");
  fgimage = new SimpleImage(imgfile);
  
  fgimage.drawTo(canvas1);
 }

function loadBackgroundImage(){
  var imgfile = document.getElementById("bgfile");
  canvas2 = document.getElementById("can2");
  bgimage = new SimpleImage(imgfile);
  
  bgimage.drawTo(canvas2);
 }

function clearCanvas(){
  var ctx1 = canvas1.getContext("2d");
  var ctx2 = canvas2.getContext("2d");
  ctx1.clearRect(0,0,canvas1.width,canvas1.height);
  ctx2.clearRect(0,0,canvas2.width,canvas2.height);
 }

function createComposite(){
  var output = new SimpleImage(fgimage.getWidth(),fgimage.getHeight());
  var greenThreshold = 240;
  for (var pixel of fgimage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (pixel.getGreen() > greenThreshold) {
      var bgPixel = bgimage.getPixel(x,y);
      output.setPixel(x,y,bgPixel);
    }
    else {
      output.setPixel(x,y,pixel);
    }
  }
  return output;
}

function doGreenScreen(){
  if((fgimage==null)||!fgimage.complete()){
    alert("foreground not loaded");
    return;
  }
  if((bgimage==null)||!bgimage.complete()){
    alert("background not loaded");
  }
  clearCanvas();
 
  var finalimage = createComposite();
  finalimage.drawTo(canvas1);
}