// ==UserScript==
// @name        Trains
// @namespace   http://stackexchange.com
// @description Creates a button in chat that automatically duplicats the most recent message. Great for continuing trains.
// @match       *://chat.stackexchange.com/rooms/*
// @match       *://chat.meta.stackexchange.com/rooms/*
// @match       *://chat.stackoverflow.com/rooms/*
// @version     2
// @grant       none
// ==/UserScript==

$('#sayit-button').after('<button class="button" id="train-button" onclick="var text = $(\'.message > .content\').last().html();$(\'#input\').val(text);$(\'#sayit-button\').click();" style="margin-left: 4px;">train</button>');
