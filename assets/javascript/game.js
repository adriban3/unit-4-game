$(document).ready(function() {

    var yourChar;
    var counter = 0;

    $(".tb").on("click", function() {
        
        yourChar = $(this).attr("id");

        $(".tb").each(function() {

            var enemyId = $(this).attr("id");
            var eId = "#" + enemyId;

            if(!(yourChar === enemyId)) {

                $(eId).removeClass("tb").addClass("tb2");
                $(eId).detach().appendTo("#enemies");
                $(eId).css("background-color", "red");
                $(eId).css("border-color", "black");
                $(eId).off();

            }

            else if (yourChar === enemyId) {

                $(eId).removeClass("tb").addClass("tb1");
                $(eId).off();
            }
        });

    $("#attack").css("top", "0px");

    });

    var otherChar;

    $(document).on("click", ".tb2", function() {

        otherChar = "#" + $(this).attr("id");

        $(otherChar).removeClass("tb2").addClass("tb3");
        $(otherChar).detach().appendTo("#defender");
        $(otherChar).css("background-color", "black");
        $(otherChar).css("border-color", "green");
        $(otherChar).css("color", "white");

        $(".tb2").each(function(){

            $(".tb2").removeClass("tb2").addClass("tb4");
    
        });
    });

    var OHPBase = 0;
    var YAPBase = 0;
    var OHP = 0;
    var YAP = 0;
    var CAP = 0;
    var YHP = 0;

    $(document).on("click", "#attackButton", function() {

        if (counter < 1) {

            OHPBase = parseInt($(otherChar).attr("data-HP"));
            YAPBase = parseInt($("#" + yourChar).attr("data-AP"));
            CAP = parseInt($(otherChar).attr("data-CAP"));
            YHPBase = parseInt($("#" + yourChar).attr("data-HP"));

            OHP = OHPBase - YAPBase;
            YHP = YHPBase - CAP;

            $(otherChar).attr("data-HP", OHP);
            $("#" + yourChar).attr("data-HP", YHP);

            YAP = YAPBase + YAPBase;

            $("#" + yourChar).attr("data-ap", YAP);

            counter++;
        }

        else {

            OHP -= YAP;
            YHP -= CAP;

            $(otherChar).attr("data-HP", OHP);
            $("#" + yourChar).attr("data-HP", YHP);

            YAP += YAPBase;

            $("#" + yourChar).attr("data-ap", YAP);
        }

        if (OHP <= 0) {
            $(otherChar).remove();
            alert("Choose next enemy");

            $(document).on("click", ".tb4", function() {

                otherChar = "#" + $(this).attr("id");
        
                $(otherChar).removeClass("tb4").addClass("tb3");
                $(otherChar).detach().appendTo("#defender");
                $(otherChar).css("background-color", "black");
                $(otherChar).css("border-color", "green");
                $(otherChar).css("color", "white");

                counter = 0;
        
            });
        }

        if (YHP <= 0) {
            $("#" + yourchar).remove();
            alert("You lose nerd");
        }
    })
});