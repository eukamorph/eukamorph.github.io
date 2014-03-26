$(document).ready(function () {
    $("#jellyfishart").click(function () {
        $("#envixarts").hide();
        $("#jellyfisharts").show();
    });
    $("#envixart").click(function () {
        $("#jellyfisharts").hide();
        $("#envixarts").show();
    });
    $("#allart").click(function () {
        $("#art").show();
    });
});
