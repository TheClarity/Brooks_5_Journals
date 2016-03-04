
$(document).ready(function() {
    var lost = 0,
       won = 0,
       tied = 0;
        
   $("#rock").click(function() {
       var botguess;
       var bot = Math.floor((Math.random() * 3) + 1);
       if (bot == 1){
           botguess = "rock";
       }
           else if (bot == 2){
            botguess = "paper";   
           }
       else {
        botguess = "scissors";  
       }
       if (botguess === "rock"){
           document.getElementById("result").innerHTML ="The bot chose rock, You tied!"  
        $("#gameLog").append('<p>The bot chose rock, You tied!</p>');  
           tied += 1;
           $("#wlt").html('Won: ' + won + ' lost: ' + lost + ' tied:' + tied );  
       }
       if (botguess === "paper"){
           document.getElementById("result").innerHTML ="The bot chose paper, You lost!"  
        $("#gameLog").append('<p>The bot chose paper, You lost!</p>'); 
           lost += 1;
           $("#wlt").html('Won: ' + won + ' lost: ' + lost + ' tied:' + tied ); 
       }
       if (botguess === "scissors"){
           document.getElementById("result").innerHTML ="The bot chose scissors, You won!"  
        $("#gameLog").append('<p>The bot chose scissors, You won!</p>'); 
            won += 1;
           $("#wlt").html('Won: ' + won + ' lost: ' + lost + ' tied:' + tied ); 
       }
       
   });
    $("#paper").click(function() {
       var botguess;
       var bot = Math.floor((Math.random() * 3) + 1);
       if (bot == 1){
           botguess = "rock";
       }
           else if (bot == 2){
            botguess = "paper";   
           }
       else {
        botguess = "scissors";  
       }
       if (botguess === "scissors"){
        document.getElementById("result").innerHTML ="The bot chose scissors, You lost!"  
        $("#gameLog").append('<p>The bot chose scissors, You lost!</p>'); 
           lost += 1;
           $("#wlt").html('Won: ' + won + ' lost: ' + lost + ' tied:' + tied ); 
       }
       if (botguess === "paper"){
        document.getElementById("result").innerHTML ="The bot chose paper, You tied!"  
        $("#gameLog").append('<p>The bot chose paper, You tied!</p>'); 
           tied += 1;
           $("#wlt").html('Won: ' + won + ' lost: ' + lost + ' tied:' + tied ); 
       }
       if (botguess === "rock"){
        document.getElementById("result").innerHTML ="The bot chose rock, You won!"  
        $("#gameLog").append('<p>The bot chose rock, You won!</p>'); 
            won += 1;
           $("#wlt").html('Won: ' + won + ' lost: ' + lost + ' tied:' + tied ); 
       }
       
   });
    $("#scissors").click(function() {
       var botguess;
       var bot = Math.floor((Math.random() * 3) + 1);
       if (bot == 1){
           botguess = "rock";
       }
           else if (bot == 2){
            botguess = "paper";   
           }
       else {
        botguess = "scissors";  
       }
       if (botguess === "rock"){
        document.getElementById("result").innerHTML ="The bot chose rock, You lost!"  
        $("#gameLog").append('<p>The bot chose rock, You lost!</p>'); 
           lost += 1;
           $("#wlt").html('Won: ' + won + ' lost: ' + lost + ' tied:' + tied ); 
       }
       if (botguess === "paper"){
        document.getElementById("result").innerHTML ="The bot chose paper, You won!"  
        $("#gameLog").append('<p>The bot chose paper, You won!</p>'); 
           won += 1;
           $("#wlt").html('Won: ' + won + ' lost: ' + lost + ' tied:' + tied ); 
       }
       if (botguess === "scissors"){
        document.getElementById("result").innerHTML ="The bot chose scissors, You tied!"  
        $("#gameLog").append('<p>The bot chose scissors, You tied!</p>'); 
           tied += 1;
           $("#wlt").html('Won: ' + won + ' lost: ' + lost + ' tied:' + tied ); 
       }
       
   });
    var day = true;
   $("#switch").click(function() {
       current = document.getElementById("main").class;
       if(current == "off"){
          document.getElementById("main").class="on"; 
          var background = document.getElementById("game");
           background.style.backgroundColor = '#FFF';
           document.getElementById("toggle").style.backgroundColor = '#FFF';
           document.getElementById("html").style.backgroundColor = '#FFF';
           document.getElementById("navmenu").style.backgroundColor = '#FFF';
           document.getElementById("footer").style.backgroundColor = '#FFF';
           document.getElementById("main").style.backgroundColor = '#FFF';
           document.getElementById("body").style.backgroundColor = '#FF';
           
       }
       
        else {
            document.getElementById("main").class="off"; 
            var background = document.getElementById("game");
           background.style.backgroundColor = '#3B3B3B';
            document.getElementById("toggle").style.backgroundColor = '#3B3B3B';
            document.getElementById("body").style.backgroundColor = '#3B3B3B';
             document.getElementById("html").style.backgroundColor = '#3B3B3B';
            document.getElementById("navmenu").style.backgroundColor = '#3B3B3B';
            document.getElementById("footer").style.backgroundColor = '#3B3B3B';
            document.getElementById("main").style.backgroundColor = '#3B3B3B';
           
       }
       });
    var open = true;
    $('#log').click(function() {
       current = document.getElementById('log').class;
        if(current == "off") {
            document.getElementById('log').class="on";
            document.getElementById('log').value="Toggle Log (off)";
            gameLog.style.display = 'none';
            
        }
        else {
           document.getElementById("log").class="off";  
            document.getElementById('log').value="Toggle Log (on)";
             gameLog.style.display = 'block';
        }
    });
    var menOpen = true;
        $('#toggle').click(function() {
       current = document.getElementById('navmenu').class;
        if(current == "navmenu navmenu-default navmenu-fixed-left off") {
            document.getElementById('navmenu').class="navmenu navmenu-default navmenu-fixed-left on";
            navmenu.style.display = 'none';
            
        }
        else {
           document.getElementById("navmenu").class="navmenu navmenu-default navmenu-fixed-left off";  
             navmenu.style.display = 'block';
        }
             });
            $('#game').click(function() {
       current = document.getElementById('navmenu').class;
        if(current == "navmenu navmenu-default navmenu-fixed-left off") {
            document.getElementById('navmenu').class="navmenu navmenu-default navmenu-fixed-left on";
            navmenu.style.display = 'none';
            
        }
        
    });
});