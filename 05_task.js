//$(document).ready(function() {
$(function() {
    $("#para").click(function(ev) {
    //$("#para").fadeOut('slow','linear');    
    //$(this).fadeOut('slow', 'linear');
    //ev.target==this
    $(ev.target).fadeOut('slow','linear');
});
//$(") -> { css : function() {}}
// var j = $("")
//j == $(").css("","")
$("h3").css("text-decoration","underline")
       .css("font-style","italic");
//$("ul li:first-child")
$("ul").find("li:first-child")
    .css("color","red");
});

//coding standards
//#1 do not use spaces for files
//#2 assume everything is case-sensitive
