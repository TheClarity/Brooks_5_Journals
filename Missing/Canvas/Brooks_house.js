
for (i = 0; i < 200; i++) {
 
    var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var R = Math.floor((Math.random() * 255) + 1)
var G = Math.floor((Math.random() * 255) + 1)
var B = Math.floor((Math.random() * 255) + 1)
var Rs = Math.floor((Math.random() * 255) + 1)
var Gs = Math.floor((Math.random() * 255) + 1)
var Bs = Math.floor((Math.random() * 255) + 1)
var sx = Math.floor((Math.random() * 700) + 1)
var sy = Math.floor((Math.random() * 700) + 1)
var x = Math.floor((Math.random() * 100) + 90)
var c = Math.floor((Math.random() * 100) + 90)
var y = Math.floor((Math.random() * 100) + 90)
ctx.fillStyle = "rgba(" + R + "," + G + "," + B +",0.4)";
ctx.strokeStyle = "rgba(" + Rs + "," + Gs + "," + Bs +",0.8)";
    ctx.beginPath();
//ctx.arc(sx,sy,x,y,c*Math.PI);

ctx.stroke();
ctx.strokeRect(sx,sy,x,y);
ctx.fillRect(sx,sy,x,y);
}