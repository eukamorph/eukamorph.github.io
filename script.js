$(document).ready(function () {
    $("#envix").click(function () {
        $(".zer0fuxc .futuresensec .kayimboc").hide();
        $(".envixc").show();
    });
    $("#kayimbo").click(function () {
        $(".envixc .futuresensec .zer0fuxc").hide();
        $(".kayimboc").show();
    });
    $("#futuresense").click(function () {
        $(".zer0fuxc .envixc .kayimboc").hide();
        $(".futuresensec").show();
    });
    $("#all").click(function () {
        $(".zer0fuxc .futuresensec .kayimboc .envixc").show();
    });
    
    $("#jellyfishart").click(function () {
        $("#envixarts").hide();
        $("#jellyfisharts").show();
    });
    $("#envixart").click(function () {
        $("#jellyfisharts").hide();
        $("#envixarts").show();
    });
    $("#allart").click(function () {
        $("#envixarts #jellyfisharts").show();
    });
});
