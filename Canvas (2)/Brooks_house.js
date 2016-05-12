$(document).ready(function() {
    var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
   $("#submit").click(function() {
       ctx.clearRect(0, 0, 900, 900);
for (i = 0; i < 200; i++) {
 var widthMax = $("#maxWidth").val();
    var widthMin = $("#minWidth").val();
    var heightMax = $("#maxHeight").val();
    var heightMin = $("#minHeight").val();
    
var R = Math.floor((Math.random() * 255) + 1)
var G = Math.floor((Math.random() * 255) + 1)
var B = Math.floor((Math.random() * 255) + 1)
var Rs = Math.floor((Math.random() * 255) + 1)
var Gs = Math.floor((Math.random() * 255) + 1)
var Bs = Math.floor((Math.random() * 255) + 1)
var sx = Math.floor((Math.random() * 1000) + -20)
var sy = Math.floor((Math.random() * 1000) + -20)
var x = Math.floor((Math.random() * widthMax) + widthMin)
var c = Math.floor((Math.random() * 100) + 90)
var y = Math.floor((Math.random() * heightMax) + heightMin)
ctx.fillStyle = "rgba(" + R + "," + G + "," + B +",0.4)";
ctx.strokeStyle = "rgba(" + Rs + "," + Gs + "," + Bs +",0.8)";
    ctx.beginPath();
//ctx.arc(sx,sy,x,y,c*Math.PI);

ctx.stroke();
ctx.strokeRect(sx,sy,x,y);
ctx.fillRect(sx,sy,x,y);
}
   });
    $("#random").click(function() {
       ctx.clearRect(0, 0, 900, 900);
for (i = 0; i < 200; i++) {
 var widthMax = Math.floor((Math.random() * 1000) + 100)
    var widthMin = Math.floor((Math.random() * 1000) + 100)
    var heightMax = Math.floor((Math.random() * 1000) + 100)
    var heightMin = Math.floor((Math.random() * 1000) + 100)
    $("#maxWidth").val(widthMax)
	$("#minWidth").val(widthMin)
	$("#maxHeight").val(heightMax)
	$("#minHeight").val(heightMin)
var R = Math.floor((Math.random() * 255) + 1)
var G = Math.floor((Math.random() * 255) + 1)
var B = Math.floor((Math.random() * 255) + 1)
var Rs = Math.floor((Math.random() * 255) + 1)
var Gs = Math.floor((Math.random() * 255) + 1)
var Bs = Math.floor((Math.random() * 255) + 1)
var sx = Math.floor((Math.random() * 1000) + -50)
var sy = Math.floor((Math.random() * 1000) + -50)
var x = Math.floor((Math.random() * widthMax) + widthMin)
var c = Math.floor((Math.random() * 100) + 90)
var y = Math.floor((Math.random() * heightMax) + heightMin)
var grd = ctx.createLinearGradient(sx,sy,x,y);
grd.addColorStop(0,"rgba(255,0,0,.3)");
grd.addColorStop(.5,"rgba(0,0,255,.3)");
grd.addColorStop(1,"rgba(0,255,0,.3)");
ctx.fillStyle = grd;
ctx.strokeStyle = "rgba(" + Rs + "," + Gs + "," + Bs +",0.8)";
    ctx.beginPath();
//ctx.arc(sx,sy,x,y,c*Math.PI);

ctx.stroke();
ctx.strokeRect(sx,sy,x,y);
ctx.fillRect(sx,sy,x,y);
}
   });
$("#random2").click(function() {
       ctx.clearRect(0, 0, 900, 900);
for (i = 0; i < 200; i++) {
 var widthMax = Math.floor((Math.random() * 1000) + 100)
    var widthMin = Math.floor((Math.random() * 1000) + 100)
    var heightMax = Math.floor((Math.random() * 1000) + 100)
    var heightMin = Math.floor((Math.random() * 1000) + 100)
    $("#maxWidth").val(widthMax)
	$("#minWidth").val(widthMin)
	$("#maxHeight").val(heightMax)
	$("#minHeight").val(heightMin)
var R = Math.floor((Math.random() * 255) + 1)
var G = Math.floor((Math.random() * 255) + 1)
var B = Math.floor((Math.random() * 255) + 1)
var Rs = Math.floor((Math.random() * 255) + 1)
var Gs = Math.floor((Math.random() * 255) + 1)
var Bs = Math.floor((Math.random() * 255) + 1)
var sx = Math.floor((Math.random() * 1000) + -50)
var sy = Math.floor((Math.random() * 1000) + -50)
var x = Math.floor((Math.random() * widthMax) + widthMin)
var c = Math.floor((Math.random() * 100) + 90)
var y = Math.floor((Math.random() * heightMax) + heightMin)
var grd = ctx.createLinearGradient(sx,sy,x,y);
grd.addColorStop(0,"rgba(" + R + "," + G + "," + B + ",0.4)");
grd.addColorStop(.5,"rgba(" + R + "," + G + "," + B + ",0.4)");
grd.addColorStop(1,"rgba(" + R + "," + G + "," + B + ",0.4)");
ctx.fillStyle = grd;
ctx.strokeStyle = "rgba(" + Rs + "," + Gs + "," + Bs + ",0.8)";
    ctx.beginPath();
//ctx.arc(sx,sy,x,y,c*Math.PI);

ctx.stroke();
ctx.strokeRect(sx,sy,x,y);
ctx.fillRect(sx,sy,x,y);
}
   });
    $("#notUgly").click(function() {
       ctx.clearRect(0, 0, 900, 900);
for (i = 0; i < 200; i++) {
 var widthMax = Math.floor((Math.random() * 1000) + 100)
    var widthMin = Math.floor((Math.random() * 1000) + 100)
    var heightMax = Math.floor((Math.random() * 1000) + 100)
    var heightMin = Math.floor((Math.random() * 1000) + 100)
    $("#maxWidth").val(widthMax)
	$("#minWidth").val(widthMin)
	$("#maxHeight").val(heightMax)
	$("#minHeight").val(heightMin)
var R = Math.floor((Math.random() * 255) + 1)
var G = Math.floor((Math.random() * 255) + 1)
var B = Math.floor((Math.random() * 255) + 1)
var Rs = Math.floor((Math.random() * 255) + 1)
var Gs = Math.floor((Math.random() * 255) + 1)
var Bs = Math.floor((Math.random() * 255) + 1)
var sx = Math.floor((Math.random() * 1000) + -50)
var sy = Math.floor((Math.random() * 1000) + -50)
var x = Math.floor((Math.random() * widthMax) + widthMin)
var c = Math.floor((Math.random() * 100) + 90)
var y = Math.floor((Math.random() * heightMax) + heightMin)
var grd = ctx.createLinearGradient(sx,sy,x,y);
grd.addColorStop(0,"rgba(217, 0, 91,0.4)");
grd.addColorStop(.5,"rgba(0, 255, 95,0.4)");
grd.addColorStop(1,"rgba(255, 44, 0, 0.4)");
ctx.fillStyle = grd;
ctx.strokeStyle = "rgba(" + Rs + "," + Gs + "," + Bs + ",0.8)";
    ctx.beginPath();
//ctx.arc(sx,sy,x,y,c*Math.PI);

ctx.stroke();
ctx.strokeRect(sx,sy,x,y);
ctx.fillRect(sx,sy,x,y);
}
   });
});