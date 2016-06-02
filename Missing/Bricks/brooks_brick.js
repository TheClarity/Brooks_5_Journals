var canvas;
var ctx;

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

var boxes = [];
for (i = 350; i < 355; i++) {
boxes.push({
  xbox: i*3,
  yb: 450,
  wb: 30,
  hb: 30
})

}
function draw() {

  clear();
  ctx.fillStyle = "#FAF7F8";
  rect(0,0,WIDTH,HEIGHT);
  //ctx.fillStyle = "#444444";``
  //rect1(x1, y1, 30, 30);
  //rect2(x2, y2, 30, 30);
  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  ctx.beginPath();
  for(var i = 0; i < 5; i++){
    var b = boxes[i];
    ctx.moveTo(b.xbox, b.ybox);
    ctx.fillRect(b.xbox, b.ybox, b.wbox, b.hbox);
    b.xb += 30;
  }
  ctx.fill();
  update();

    // if (x1 + dx1 > WIDTH || x1 + dx1 < 0)
    // dx1 = -dx1;

function update() {
    if (y1 + dy1 + 28 > HEIGHT ) {
    dy1 = 0;
    dy2 = 6;
  }

 if (y2 + dy2 + 28 > HEIGHT ) {
    dy2 = 0;
  }
  y1 += dy1;
   y2 += dy2;
  // y2 += dy2;
}
}
init();
