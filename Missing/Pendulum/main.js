var height = 800; var width = 800;
var canvas = ctx = false;
var frameRate = 1/40;
var frameDelay = frameRate * 1000;
var loopTimer = false;
var lastTime = false;

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

var pendulum = {mass: 10, length:500, theta: (Math.PI/2) - 0.4, omega: 0, alpha:0, J:0};
var setup = function() {
    pendulum.J = pendulum.mass * pendulum.length * pendulum.length / 100;
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    
    ctx.strokeStyle = "black";
    ctx.fillStyle = "gold";
    

    
    lastTime = new Date();
    requestAnimFrame(loop);
}
var loop = function(time) {
    var deltaT = (time - lastTime.getTime()) / 1000;


    

    if (deltaT > 0.050)
    {
        deltaT = 0.050;
    }
    deltaT = 0.01;

    time = new Date(time);


    
    pendulum.theta += pendulum.omega * deltaT + ( 0.5 * pendulum.alpha * deltaT * deltaT );


    
    var T = pendulum.mass * 500.81 * Math.cos(pendulum.theta) * pendulum.length;


    
    var alpha = T / pendulum.J;


    
    pendulum.omega += 0.5 * (alpha + pendulum.alpha) * deltaT;

    
    pendulum.alpha = alpha;

    var px = width/2 + pendulum.length*Math.cos(pendulum.theta);
    var py = 50 + pendulum.length*Math.sin(pendulum.theta);
    
    

    
    ctx.clearRect(0,0, width, height);

    
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(width/2, 50);
    ctx.lineTo(px, py);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle ='red';

    
    ctx.beginPath();
    ctx.arc(px, py, 30, 0, Math.PI*2, false);
    ctx.fill();
    ctx.closePath();
    
    

    lastTime = new Date();
    requestAnimFrame(loop);
    
}
    
    setup();