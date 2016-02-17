var number = Math.floor((Math.random() * 100) + 1);
$(document).ready(function() {
    var guessNum = 1;
   $("#submit").click(function() {
       number -= 1;
       var guess = $("#guess").val();
       var guessLeft = 5 - guessNum;
       if (number == 1) {
           number += 1;
       }
       else {
           number -= 1;
       }
       guessNum += 1;
       if (guess == number){
       alert("you guessed " + guess + " you were right!!");
           timeLeft();
       }
       else if (guess > number){
           document.getElementById("result").innerHTML = "you guessed " + guess + " you were too high!"
       }
       else{
           document.getElementById("result").innerHTML = "you guessed " + guess + " you were too low!"
       }
       document.getElementById("guessNum").innerHTML ="You have " + guessLeft + " guesses left"
       if (guessLeft == 0) {
           var time = setInterval(timeLeft ,2000);
           function timeLeft() {
           location.reload();
           }
         document.write("Game Over")  
       }
   });
   });
