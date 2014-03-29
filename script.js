/*global $*/
$(document).ready(function () {
    "use strict";
    $("#asqd").click(function () {
        $(".envixc, .kayimboc, .zer0fuxc, .futuresensec, .quantum77zc").hide();
        $(".asqdc").show();
    });
    $("#envix").click(function () {
        $(".asqdc, .kayimboc, .zer0fuxc, .futuresensec, .quantum77zc").hide();
        $(".envixc").show();
    });
    $("#futuresense").click(function () {
        $(".asqdc, .kayimboc, .zer0fuxc, .envixc, .quantum77zc").hide();
        $(".futuresensec").show();
    });
    $("#kayimbo").click(function () {
        $(".asqdc, .envixc, .zer0fuxc, .futuresensec, .quantum77zc").hide();
        $(".kayimboc").show();
    });
    $("#quantum77z").click(function () {
        $(".asqdc, .kayimboc, .envixc, .zer0fuxc, .futuresensec").hide();
        $(".quantum77zc").show();
    });
    $("#zer0fux").click(function () {
        $(".asqdc, .kayimboc, .envixc, .futuresensec, .quantum77zc").hide();
        $(".zer0fuxc").show();
    });
    $("#all").click(function () {
        $(".asqdc, .envixc, .zer0fuxc, .kayimboc, .futuresensec, .quantum77zc").show();
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
