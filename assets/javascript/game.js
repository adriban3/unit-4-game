$(document).ready(function() {

    var yourChar;
    var charArr = ["one", "two", "three", "four"];

    $(".tb").on("click", function() {

        yourChar = $(this).attr('id');

        $("#" + yourChar).css("background-color", "red");

        for (i=0; i<charArr.length; i++) {

            if (!(yourChar === charArr[i])) {

                $("#" + charArr[i]).detach().appendTo("#enemies");

            }
        }

        $("#attack").css("top", "0px");
    });
});