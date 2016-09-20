$(document).ready(function(){
   $("button#add").click(function(ev){
       var newCar= $("#newCar").val();

       if(newCar == "") return;

       $("#list").append(("<li>" + newCar + "<button class="remove">(x)</button>"+"</li>");
       $("newCar").val("");


   });
});
$("#list").click("button.remove", function(ev){
    $(ev.target).parent()
    console.log(ev.target);
});