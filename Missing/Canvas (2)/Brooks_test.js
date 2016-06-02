
    var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
   var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;
var canvasWidth = ctx.width;
var canvasHeight = ctx.height;
var angle = 0;
function random2() {
   ctx.clearRect(0, 0, canvasWidth, canvasHeight);
     
    // color in the background
    ctx.fillStyle = "#EEEEEE";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
     
    // draw the circle
    ctx.beginPath();
     
    var radius = 25 + 150 * Math.abs(Math.cos(angle));
    ctx.arc(225, 225, radius, 0, Math.PI * 2, false);
    ctx.closePath();
     
    // color in the circle
var R = Math.floor((Math.random() * 255) + 1)
var G = Math.floor((Math.random() * 255) + 1)
var B = Math.floor((Math.random() * 255) + 1)
//grd.addColorStop(0,"rgba(" + R + "," + G + "," + B + ",0.4)");
//grd.addColorStop(.5,"rgba(" + R + "," + G + "," + B + ",0.4)");
//grd.addColorStop(1,"rgba(" + R + "," + G + "," + B + ",0.4)");
ctx.fillStyle = "rgba(" + R + "," + G + "," + B + ",0.4)";
ctx.strokeStyle = "rgba(" + R + "," + G + "," + B + ",0.8)";
    ctx.fill();
      
    angle += Math.PI / 64;
     


//ctx.arc(sx,sy,x,y,c*Math.PI);

ctx.stroke();
//ctx.strokeRect(sx,sy,x,y);
//ctx.fillRect(sx,sy,x,y);
requestAnimationFrame(random2);
   }
    random2();
