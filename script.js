/*global $*/
$(document).ready(function () {
    "use strict";
    $("#asqd").click(function () {
        $(".envixc, .kayimboc, .zer0fuxc, .futuresensec, .quantum77zc, .sketch-artistc").hide();
        $(".asqdc").show();
    });
    $("#envix").click(function () {
        $(".asqdc, .kayimboc, .zer0fuxc, .futuresensec, .quantum77zc, .sketch-artistc").hide();
        $(".envixc").show();
    });
    $("#futuresense").click(function () {
        $(".asqdc, .kayimboc, .zer0fuxc, .envixc, .quantum77zc, .sketch-artistc").hide();
        $(".futuresensec").show();
    });
    $("#kayimbo").click(function () {
        $(".asqdc, .envixc, .zer0fuxc, .futuresensec, .quantum77zc, .sketch-artistc").hide();
        $(".kayimboc").show();
    });
    $("#quantum77z").click(function () {
        $(".asqdc, .kayimboc, .envixc, .zer0fuxc, .futuresensec, .sketch-artistc").hide();
        $(".quantum77zc").show();
    });
    $("#sketch-artist").click(function () {
        $(".asqdc, .kayimboc, .envixc, .zer0fuxc, .futuresensec, .quantum77zc).hide();
        $(".sketch-artistc").show();
    });
    $("#zer0fux").click(function () {
        $(".asqdc, .kayimboc, .envixc, .futuresensec, .quantum77zc, .sketch-artistc").hide();
        $(".zer0fuxc").show();
    });
    $("#all").click(function () {
        $(".asqdc, .envixc, .zer0fuxc, .kayimboc, .futuresensec, .quantum77zc, .sketch-artistc, .zer0fuxc").show();
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
