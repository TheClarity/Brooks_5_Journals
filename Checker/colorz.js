
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var rectWidth = 150;
var rectHeight = 700;
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, c.width, c.height);
for (var i = 0; i< 50; i++) {
    for (var j = 0; j <= 50; j++) {
        ctx.fillStyle = "#424242";
        if((i + j ) % 2 === 0) {
            ctx.fillRect((43 * i), (43 * j), 3, 43);
            if((i + j ) % 3 === 0) {
            ctx.fillStyle = "blue";
                ctx.fillRect((43 * i), (43 * j), 3, 43);
            }
        }
    }
}
    
ctx.rotate(Math.PI / 10);
for (var i = 0; i < 50; i++) {
    for (var j = 0; j <= 50; j++) {
        ctx.fillStyle = "#424242";
        if((i + j) % 2 === 0) {
            ctx.fillRect((-645 + (43 * i)), (-645 + (43 * j)), 43, 43);
        }
    }
}