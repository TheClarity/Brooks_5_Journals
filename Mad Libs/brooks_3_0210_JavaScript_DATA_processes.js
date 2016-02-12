
document.write("This is how we math in JavaScript.");
var k = 3;
var r = 7;
var d = k + r;
$(document).ready(function() {
   $("#add").click(function() {
       var num1 = $("#num1").val();
var num2 = $("#num2").val();
       var finala = +num1 + +num2;
       
       document.getElementById("answer").innerHTML = "The Answer is: "
       + finala + "<br><input type='button' name='set1' id='set1' value='Set as Number 1'>"
       $("#set1").click(function() {
       document.getElementById("num1").value = +finala
       
   });
   });
});

$(document).ready(function() {
   $("#multiply").click(function() {
       var num1 = $("#num1").val();
var num2 = $("#num2").val();
       var finalm = +num1 * +num2;
       
       document.getElementById("answer").innerHTML = "The Answer is: "
       + finalm + "<br><input type='button' name='set1' id='set1' value='Set as Number 1'>"
       $("#set1").click(function() {
       document.getElementById("num1").value = +finalm
       
   });
   });
});

$(document).ready(function() {
   $("#subtract").click(function() {
       var num1 = $("#num1").val();
var num2 = $("#num2").val();
       var finals = +num1 - +num2;
       
       document.getElementById("answer").innerHTML = "The Answer is: "
       + finals + "<br><input type='button' name='set1' id='set1' value='Set as Number 1'>"
      $("#set1").click(function() {
       document.getElementById("num1").value = +finals
       
   }); 
   });
});
$(document).ready(function() {
   $("#divide").click(function() {
       var num1 = $("#num1").val();
var num2 = $("#num2").val();
       var finald = num1 / num2;
       
       document.getElementById("answer").innerHTML = "The Answer is: "
       + finald + "<br><input type='button' name='set1' id='set1' value='Set as Number 1'>"
       $("#set1").click(function() {
       document.getElementById("num1").value = +finald
       
   });
   });
    
    
    
});

