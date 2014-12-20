// ==UserScript==
// @name        Trains
// @namespace   http://stackexchange.com
// @description Creates a button in chat that automatically duplicats the most recent message. Great for continuing trains.
// @match       *://*.askubuntu.com/*
// @match       *://*.mathoverflow.net/*
// @match       *://*.onstartups.com/*
// @match       *://*.serverfault.com/*
// @match       *://*.stackapps.com/*
// @match       *://*.stackexchange.com/*
// @match       *://*.stackoverflow.com/*
// @match       *://*.superuser.com/*
// @version     1
// @grant       none
// ==/UserScript==

$('#sayit-button').after('<button class="button" id="train-button" onclick="var text = $(\'.message > .content\').last().html();$(\'#input\').val(text);$(\'#sayit-button\').click();" style="margin-left: 4px;">train</button>');
