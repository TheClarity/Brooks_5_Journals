$(document).ready(function() {
   
$("#finish").click(function() {
var noun1 = $("#noun1").val();
var noun2 = $("#noun2").val();
var noun3 = $("#noun3").val();
var verb1 = $("#verb1").val();    
var verb2 = $("#verb2").val();
var verb3 = $("#verb3").val();
var adj1 = $("#adj1").val();
var adj2 = $("#adj2").val();
var adj3 = $("#adj3").val();
document.getElementById("madLib").innerHTML = verb1 + " aye lmao " + verb2 + " " + verb3 + " " + noun1 + " " + noun2 + " "
    + noun3 + " " + adj1 + " " + adj2 + " " + adj3 + " "
    + "<br> <br> <input type='button' name='refresh' id='refresh' value='Play Again'>";
     $("#refresh").click(function() {
        location.reload();
    });
});
});