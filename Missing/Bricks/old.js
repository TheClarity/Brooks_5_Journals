var canvas;
var ctx;
var x = 450;
var y = 200;
var x1 = 450;
var y1 = 200;
var dx1 = 2;
var dy1 = 6;
var x2 = 480;
var y2 = 200;
var dx2 = 2;
var dy2 = 0;
var WIDTH = 900;
var HEIGHT = 900;


function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}
function rect2(x2,y2,w2,h2) {
  ctx.beginPath();
  ctx.rect(x2,y2,w2,h2);
  ctx.closePath();
  ctx.fillStyle = "Red";
  ctx.fill();
}
function rect1(x1,y1,w1,h1) {
  ctx.beginPath();
  ctx.rect(x1,y1,w1,h1);
  ctx.closePath();
  ctx.fillStyle = "Red";
  ctx.fill();
}


function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  return setInterval(draw, 10);
}

var stop = 230;
var sh = 200;
var length1;
function draw() {

  clear();
  ctx.fillStyle = "#FAF7F8";
  rect(0,0,WIDTH,HEIGHT);
  var i = 0;
  //ctx.fillStyle = "#444444";``
  while(i < 6) {
    i += 1;

    //x1 += 3;
  rect1(x1 + i * 30, y1, 30, 30);
      length1 += 30;


    // if (x1 + dx1 > WIDTH || x1 + dx1 < 0)
    // dx1 = -dx1;

if (i > 6) {
  i += 1;
  if(y2 + dy2 + 260 > HEIGHT ) {
    dy1 = 0;

   }
}
 else { if(y2 + dy2 + 220 > HEIGHT ) {
   dy1 = 0;

  }
}
  y1 += dy1;
  y2 += dy2;

  // y2 += dy2;

//  if (i > 4) for (i < 20; i++){
//    rect1(x1, y1, 30, 30);
//    x1 -= 30;

//  }
}
//if (i > 6) {
var stop;
  while ((i > 6) && (i < 10)) {
    //x1 += 3;
sh = 230;

stop = 230;
    if (x1 + dx1 > WIDTH || x1 + dx1 < 0)
    dx1 = -dx1;

if (i > 6) {
  sh = 230;
  rect1(x1 + i * 30, y1, 30, 30);
      length1 += 30;  if(y2 + dy2 + 260 > HEIGHT ) {

    dy1 = 0;

   }
}
 else { if(y2 + dy2 + 200 > HEIGHT ) {

  }
}
  y1 += dy1;
  y2 += dy2;

  // y2 += dy2;

//  if (i > 4) for (i < 20; i++){
//    rect1(x1, y1, 30, 30);
//    x1 -= 30;

//  }
}
if (y1 + dy1 + 50 > HEIGHT ) {
  rh = 230;
  dy1 = 0;
  dy2 = 6;
}


}
init();
