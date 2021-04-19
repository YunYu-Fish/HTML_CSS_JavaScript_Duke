function doyellow(){
  var c1 = document.getElementById("can1");
  c1.style.backgroundColor = "yellow";
  
  var cont = c1.getContext("2d");
  cont.fillStyle="gold";
  cont.fillRect(20,20,60,60);
  
  cont.fillStyle="black";
  cont.font="30px Arial";
  cont.fillText("Hello",20,80);
}

function dopink(){
  var c1 = document.getElementById("can1");
  var cont = c1.getContext("2d");
  cont.clearRect(0,0,c1.width,c1.height);
  c1.style.backgroundColor = "pink";
}