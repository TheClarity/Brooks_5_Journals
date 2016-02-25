$(document).ready(function() {
    var day = true;
   $("#switch").click(function() {
       current = document.getElementById("main").class;
       if(current == "off"){
          document.getElementById("main").class="on"; 
          var background = document.getElementById("main");
           background.style.backgroundColor = '#FFF';
           background.style.color = '#000';
           document.getElementById("title").innerHTML = "day";
       }
       
        else {
            document.getElementById("main").class="off"; 
            var background = document.getElementById("main");
           background.style.backgroundColor = '#000';
            background.style.color = '#FFF';
            document.getElementById("title").innerHTML = "night";
       }
       });
    $("#hover").mouseover(function() {
        document.getElementById("hover").style.backgroundColor = "#FFFF00";
    });
    $("#hover").mouseout(function() {
        document.getElementById("hover").style.backgroundColor = "#FF4500";
    });
   });
