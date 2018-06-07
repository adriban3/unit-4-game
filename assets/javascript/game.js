$(document).ready(function() {

    var yourChar;

    $(".tb").on("click", function() {

        yourChar = $(this).attr('id');
        console.log(yourChar);

        $("#" + yourChar).css("background-color", "red");
    });
});