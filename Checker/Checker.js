$(document).ready(function() {
    var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
   var r;
  var sx = -300
var sy = -200
var x = 200
var y = 100  
var color = -1;
    var fillColor;
    for (j = 1; j < 12; j++) {
     if (j % 2 === 0) {
         sx = 0
     }
        else {
         sx = -100   
        }
        sx += 0;
sy += 100;
x += 00;
y += 000;
for (i = 2; i < 1000; i++) {
   
    if (i % 2 == 0 ) {
        fillColor = i*j;
    }
    else {
        fillColor = "blue";
    }
 var widthMax = $("#maxWidth").val();
    var widthMin = $("#minWidth").val();
    var heightMax = $("#maxHeight").val();
    var heightMin = $("#minHeight").val();
    

sx += 100;
sy += 0;
x += 100;
y += 0;

    ctx.beginPath();
//ctx.arc(sx,sy,x,y,c*Math.PI);

if (sx + sy % 2 === 0 ) {
        fillColor = "red";
    ctx.fillStyle = fillColor;
    }
    else if (sx + sy % 3 === 0 ) {
        fillColor = "orange";
        ctx.fillStyle = fillColor;
    }
ctx.fillRect(sx,sy,x,y);
}
      
    }
});