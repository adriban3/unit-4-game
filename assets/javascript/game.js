$(document).ready(function() {

    var yourChar;

    $(".tb").on("click", function() {

        yourChar = $(this).attr("id");

        $(".tb").each(function(){

            var enemyId = $(this).attr("id");
            var eId = "#" + enemyId;

            if(!(yourChar === enemyId)) {

                $(eId).removeClass("tb").addClass("tb2");
                $(eId).detach().appendTo("#enemies");
                $(eId).css("background-color", "red");
                $(eId).css("border-color", "black");

            }

            else if (yourChar === enemyId) {

                $(eId).removeClass("tb").addClass("tb1");
            }
        });

    $("#attack").css("top", "0px");

    });

    var otherChar;

    $(document).on("click", ".tb2", function() {

        otherChar = "#" + $(this).attr("id");
        console.log(otherChar);

        $(otherChar).removeClass("tb2").addClass("tb3");
        $(otherChar).detach().appendTo("#defender");
        $(otherChar).css("background-color", "black");
        $(otherChar).css("border-color", "green");
        $(otherChar).css("color", "white");

        $(".tb2").each(function(){

            $(".tb2").removeClass("tb2").addClass("tb4");
    
        });
    });
});