

$(document).ready(function() {
    $("#but1").click(function() {
    	var toAdd = $("input[name=message]").val();
        $(".list").append(toAdd+);
    });
});