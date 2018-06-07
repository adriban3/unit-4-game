$(document).ready(function() {

    var yourChar;
    var charArr = ["one", "two", "three", "four"];

    $(".tb").on("click", function() {

        yourChar = $(this).attr('id');

        for (i=0; i<charArr.length; i++) {

            if (!(yourChar === charArr[i])) {

                $("#" + charArr[i]).detach().appendTo("#enemies");
                $("#" + charArr[i]).css("background-color", "red");
                $("#" + charArr[i]).css("border-color", "black");
                $("#" + charArr[i]).removeClass("tb").addClass("tb2");

            }
        }

        $("#attack").css("top", "0px");

        var otherChar;

        $(".tb2").on("click", function() {

            otherChar = $(this).attr('id');
            $("#" + otherChar).detach().appendTo("#defender");
            $("#" + otherChar).css("background-color", "black");
            $("#" + otherChar).css("border-color", "green");
            $("#" + otherChar).css("color", "white");

        })
    });
});