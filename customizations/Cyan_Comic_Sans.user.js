// ==UserScript==
// @name        April Fool's 2014 Comment Style
// @namespace   http://stackexchange.com
// @description Changes all comments to cyan comic sans
// @match       http://*.askubuntu.com/*
// @match       http://*.mathoverflow.net/*
// @match       http://*.serverfault.com/*
// @match       http://*.stackapps.com/*
// @match       http://*.stackexchange.com/*
// @match       http://*.stackoverflow.com/*
// @match       http://*.superuser.com/*
// @grant       none
// ==/UserScript==

$('.comment-copy').css('font-family', 'Comic Sans MS');
$('.comment-copy').css('color', 'cyan');
