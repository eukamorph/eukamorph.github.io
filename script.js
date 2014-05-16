/*global $*/
$(document).ready(function () {
    "use strict";
    $("#asqd").click(function () {
        $(".envixc, .kayimboc, .zer0fuxc, .futuresensec, .quantum77zc, .sketchartistc, .remzic").hide();
        $(".asqdc").show();
    });
    $("#envix").click(function () {
        $(".asqdc, .kayimboc, .zer0fuxc, .futuresensec, .quantum77zc, .sketchartistc, .remzic").hide();
        $(".envixc").show();
    });
    $("#futuresense").click(function () {
        $(".asqdc, .kayimboc, .zer0fuxc, .envixc, .quantum77zc, .sketchartistc, .remzic").hide();
        $(".futuresensec").show();
    });
    $("#kayimbo").click(function () {
        $(".asqdc, .envixc, .zer0fuxc, .futuresensec, .quantum77zc, .sketchartistc, .remzic").hide();
        $(".kayimboc").show();
    });
    $("#quantum77z").click(function () {
        $(".asqdc, .kayimboc, .envixc, .zer0fuxc, .futuresensec, .sketchartistc, .remzic").hide();
        $(".quantum77zc").show();
    });
    $("#remzi").click(function () {
        $(".asqdc, .kayimboc, .envixc, .zer0fuxc, .futuresensec, .sketchartistc, .quantum77zc").hide();
        $(".remzic").show();
    });
    $("#sketchartist").click(function () {
        $(".asqdc, .kayimboc, .envixc, .zer0fuxc, .futuresensec, .quantum77zc, .remzic").hide();
        $(".sketchartistc").show();
    });
    $("#zer0fux").click(function () {
        $(".asqdc, .kayimboc, .envixc, .futuresensec, .quantum77zc, .sketchartistc, .remzic").hide();
        $(".zer0fuxc").show();
    });
    $("#all").click(function () {
        $(".asqdc, .envixc, .zer0fuxc, .kayimboc, .futuresensec, .quantum77zc, .sketchartistc, .zer0fuxc, .remzic").show();
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
