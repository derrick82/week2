//$("#append-example").apend(content)
//                       prepend 
$(function() {
    $("ul").append("<li>item 2</li>");
});

//

$("remove").click(function(ev) {
      console.log(ev);
      $(ev.target).parent().remove();//or .fadeOut()
});

//
// makes it work on the lowest level first as opposed to above
$("ul").click(".remove",function(ev)) {
      console.log(ev);
      $(ev.target).parent().remove();//or .fadeOut()
});

//

$("name").blur(function(){
    //var name= $("#name").val();
    //var name= ev.target.value;
    var name = $(ev.target).val();
    alert("Hello, " + name);
}
)





