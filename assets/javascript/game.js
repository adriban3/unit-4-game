$(document).ready(function() {

    var yourChar;
    var charArr = ["one", "two", "three", "four"];

    $(".tb").on("click", function() {

        yourChar = $(this).attr('id');

        $(".tb").each(function(){

            var enemyId = $(this).attr("id");

            if(!(yourChar === enemyId)) {

                var eId = "#" + enemyId;

                $(eId).removeClass("tb").addClass("tb2");
                $(eId).detach().appendTo("#enemies");
                $(eId).css("background-color", "red");
                $(eId).css("border-color", "black");

            }
        })

        $("#attack").css("top", "0px");

        var otherChar;

        $(".tb2").on("click", function() {

            otherChar = "#" + $(this).attr('id');

            $(otherChar).detach().appendTo("#defender");
            $(otherChar).css("background-color", "black");
            $(otherChar).css("border-color", "green");
            $(otherChar).css("color", "white");

        })
    });
});