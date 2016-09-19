function myButton_Click(){
    alert("Clicked!");
}

$(function(){
//wire kup the click event handlers.
$("#myButton").on("click",myButton_Click);

$("li:contains('mad')").on("click",function(){
    $(this).hide();
});
});