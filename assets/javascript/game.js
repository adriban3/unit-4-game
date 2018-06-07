$(document).ready(function() {

    var yourChar;
    var charArr = ["one", "two", "three", "four"];

    $(".tb").on("click", function() {

        yourChar = $(this).attr('id');

        $(".tb").each(function(){

            if(!(yourChar === $(this).attr("id"))) {

                enemyId = $(this).attr("id")

                $("#" + enemyId).removeClass("tb").addClass("tb2");
                $("#" + enemyId).detach().appendTo("#enemies");
                $("#" + enemyId).css("background-color", "red");
                $("#" + enemyId).css("border-color", "black");

            }
        })

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