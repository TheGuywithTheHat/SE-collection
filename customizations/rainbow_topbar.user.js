// ==UserScript==
// @name        CustomSE
// @namespace   http://stackexchange.com
// @description A customization for Stack Exchange
// @match       http://*.askubuntu.com/*
// @match       http://*.mathoverflow.net/*
// @match       http://*.serverfault.com/*
// @match       http://*.stackapps.com/*
// @match       http://*.stackexchange.com/*
// @match       http://*.stackoverflow.com/*
// @match       http://*.superuser.com/*
// @version     1
// @grant       none
// ==/UserScript==

$('.topbar').css('background', '-moz-linear-gradient(left, red, orange, yellow, green, blue, indigo, violet)');
$('.topbar').css('background', '-webkit-gradient(linear, left center, right center, from(red), color-stop(14%, orange), color-stop(28%, yellow), color-stop(42%, green), color-stop(56%, blue), color-stop(70%, indigo), to(violet))');
$('.topbar').css('background', '-o-linear-gradient(left, red, orange, yellow, green, blue, indigo, violet)');
$('.topbar').css('background', '-ms-linear-gradient(left, red, orange, yellow, green, blue, indigo, violet)');

$('.topbar').children().css('background-color', 'transparent');
