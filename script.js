$(document).ready(function () {
    $("#envixarts").click(function () {
        $("#envixarts").hide();
        $("#jellyfisharts").show();
    });
    $("#jellyfisharts").click(function () {
        $("#jellyfisharts").hide();
        $("#envixarts").show();
    });
    $("#allart").click(function () {
        $("#art").show();
    });
});
