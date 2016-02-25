$(document).ready(function() {
    var wrong = 1;
   $("#submit").click(function() {
       
       wrong = 1;
       var q1 = $("#Q1").val(),
           q2 = $("#Q2").val(),
           q3 = $("#Q3").val(),
           q4 = $("#Q4").val(),
           q5 = $("#Q5").val(),
           q6 = $("#Q6").val(),
           q7 = $("#Q7").val(),
           q8 = $("#Q8").val(),
           q9 = $("#Q9").val(),
           q10 = $("#Q10").val();
       if (q1 === '' || q2 === '' || q3 === '' || q4 === '' || q5 === '' || q6 === '' || q7 === '' || q8 === '' || q9 === '' || q10 === '') {
           var answeredAll = false;
           document.getElementById("error").innerHTML = "Please answer all the questions!"
       }
       else {
           document.getElementById("error").innerHTML = ""
           answeredAll = true;
           
       }
       if (answeredAll === true) {
        if (q1 === '42') {
                
            }
                else {
                    wrong += 1;
                }
            if (q2 === '104') {
                
            }
                else {
                    wrong += 1;
                }
           if (q3 === '6') {
                
            }
                else {
                    wrong += 1;
                }
           if (q4 === '84') {
                
            }
                else {
                    wrong += 1;
                }
           if (q5 === '90') {
                
            }
                else {
                    wrong += 1;
                }
           if (q6 === '20') {
                
            }
                else {
                    wrong += 1;
                }
           if (q7 === '72') {
                
            }
                else {
                    wrong += 1;
                }
           if (q8 === '183') {
                
            }
                else {
                    wrong += 1;
                }
           if (q9 === '21') {
                
            }
                else {
                    wrong += 1;
                }
           if (q10 === '32') {
                
            }
                else {
                    wrong += 1;
                }   
           
       correct = 11 - wrong;
       document.getElementById("correct").innerHTML = "You got " + "<span id='numcorrect'>" + correct + "</span>" + " out of 10 correct"
           document.getElementById("numcorrect").style.margin = "0px";
           if (correct >= 8) {
               document.getElementById("numcorrect").style.color = "green";
           }
           else if (correct <= 5) {
                document.getElementById("numcorrect").style.color = "red";
           }
           else {
             document.getElementById("numcorrect").style.color = "orange";   
           }

       }
       
       
   });
});