var canvas;
var ctx;
var x = Math.floor((Math.random() * 900) + 1);
var y = Math.floor((Math.random() * 900) + 1);
var x1 = Math.floor((Math.random() * 900) + 1);
var y1 = Math.floor((Math.random() * 900) + 1);
var x2 = Math.floor((Math.random() * 900) + 1);
var y2 = Math.floor((Math.random() * 900) + 1);
var dx = 2;
var dy = 4;
var dx1 = 2;
var dy1 = 4;
var dx2 = 2;
var dy2 = 2;
var WIDTH = 900;
var HEIGHT = 900; 

function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
   ctx.fillStyle = "Blue";
  ctx.fill();
}
function circle1(x1,y1,r1) {
  ctx.beginPath();
  ctx.arc(x1, y1, r1, 0, Math.PI*2, true);
    ctx.fillStyle = "Green";
  ctx.fill();
}
function circle2(x2,y2,r2) {
  ctx.beginPath();
  ctx.arc(x2, y2, r2, 0, Math.PI*2, true);
    ctx.fillStyle = "Red";
  ctx.fill();
}

function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
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


function draw() {
    
  clear();
  ctx.fillStyle = "#FAF7F8";
  rect(0,0,WIDTH,HEIGHT);
  //ctx.fillStyle = "#444444";
  circle(x, y, 30);
    circle1(x1, y1, 30);
    circle2(x2, y2, 30);

  if (x + dx > WIDTH || x + dx < 0)
    dx = -dx;
    if (x1 + dx1 > WIDTH || x1 + dx1 < 0)
    dx1 = -dx1;
    if (x2 + dx2 > WIDTH || x2 + dx2 < 0)
    dx2 = -dx2;
  if (y + dy > HEIGHT || y + dy < 0)
    dy = -dy;
    if (y1 + dy1 > HEIGHT || y1 + dy1 < 0)
    dy1 = -dy1;
    if (y2 + dy2 > HEIGHT || y2 + dy2 < 0)
    dy2 = -dy2;
    

  x += dx;
  y += dy;
    x1 += dx1;
  y1 += dy1;
    x2 += dx2;
  y2 += dy2;
}
init();