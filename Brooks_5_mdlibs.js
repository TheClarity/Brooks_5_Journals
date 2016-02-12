var name = prompt("Please enter a name", "name");
var name2 = "asdasd";
var noun = prompt("Please enter a noun", "noun");
var verb = prompt("Please enter a verb (past tense)", "verb");
var verb2 = prompt("Please enter a verb", "verb");
var verb3 = prompt("Please enter a verb", "verb");
if (name == '' || name == 'name') {
 var name = "Swag.txt";   
}
if (verb == '' || verb == 'verb') {
 var verb = "flew";   
}
if (noun == '' || noun == 'noun') {
 var noun = "Toys R Us";   
}
document.write("One day " + name + " " + verb +" to " + noun + ". " + "While " + name + " was on the way to " + noun + " ");
