/*global $*/
$(document).ready(function () {
    "use strict";
    $("#asqd").click(function () {
        $(".envixc, .kayimboc, .zer0fuxc, .futuresensec").hide();
        $(".asqdc").show();
    });
    $("#envix").click(function () {
        $(".asqdc, .kayimboc, .zer0fuxc, .futuresensec").hide();
        $(".envixc").show();
    });
    $("#kayimbo").click(function () {
        $(".asqdc, .envixc, .zer0fuxc, .futuresensec").hide();
        $(".kayimboc").show();
    });
    $("#futuresense").click(function () {
        $(".asqdc, .kayimboc, .zer0fuxc, .envixc").hide();
        $(".futuresensec").show();
    });
    $("#zer0fux").click(function () {
        $(".asqdc, .kayimboc, .envixc, .futuresensec").hide();
        $(".zer0fuxc").show();
    });
    $("#all").click(function () {
        $(".asqdc, .envixc, .zer0fuxc, .kayimboc, .futuresensec").show();
    });
    
    $("#jellyfishart").click(function () {
        $(".envix, .envixbig, .jellybig").hide();
        $(".jelly").show();
    });
    $("#envixart").click(function () {
        $(".jelly, .jellybig, .envixbig").hide();
        $(".envix").show();
    });
    $("#allart").click(function () {
        $(".envix").show();
        $(".jelly").show();
    });
});
