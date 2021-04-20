img = null;
canvas = null;
grayImg = null;
redImg = null;
rainbowImg = null;

//upload image
function upload(){
  var fileinput = document.getElementById("finput");
  canvas = document.getElementById("can");
  img = new SimpleImage(fileinput);
  grayImg = new SimpleImage(fileinput);
  redImg = new SimpleImage(fileinput);
  rainbowImg = new SimpleImage(fileinput);
  
  img.drawTo(canvas);
}

//clear canvas and reset
function clearCanvas(){
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height); 
}

function resetImage(){
  clearCanvas();
  img.drawTo(canvas);
}

//make image gray
function filterGray(){
  for(var pixel of grayImg.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

function doGray(){
  if(img==null||!grayImg.complete()){
    alert("Your image is not loaded!");
    return;
  }
  clearCanvas();
  filterGray();
  grayImg.drawTo(canvas);
}

//make image red
function filterRed(){
  for(var pixel of redImg.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg<128){
      pixel.setRed(avg*2);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }else{
      pixel.setRed(255);
      pixel.setGreen(avg*2-255);
      pixel.setBlue(avg*2-255);
    }
  }
}

function doRed(){
  clearCanvas();
  filterRed();
  redImg.drawTo(canvas);
}

//meka image rainbow
function filterRainbow() {
  var height = rainbowImg.getHeight();
  for (var pixel of rainbowImg.values()) {
    var y = pixel.getY();
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (y < height / 7) {
      //red
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 2 / 7) {
      //orange
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 3 / 7) {
      //yellow
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 4 / 7) {
      //green
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 5 / 7) {
      //blue
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else if (y < height * 6 / 7) {
      //indigo
      if (avg < 128) {
        pixel.setRed(.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else {
      //violet
      if (avg < 128) {
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      } else {
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(0.4*avg+153);
      }
    }
  }
}

function doRainbow(){
  if(img==null||!rainbowImg.complete()){
    alert("Your image is not laoded!");
    return;
  }
  clearCanvas();
  filterRainbow();
  rainbowImg.drawTo(canvas);
}

