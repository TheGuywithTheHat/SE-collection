// ==UserScript==
// @name        Chat Resizifizer
// @namespace   http://stackexchange.com
// @description Various customizations for Stack Exchange chat
// @match       http://chat.stackexchange.com/rooms/*
// @match       http://chat.stackoverflow.com/rooms/*
// @match       http://chat.meta.stackexchange.com/rooms/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @require     http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js
// @resource    customCSS http://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css
// @grant       GM_addStyle
// @grant       GM_getResourceText
// ==/UserScript==

var newCSS = GM_getResourceText("customCSS");
GM_addStyle(newCSS);

$('#input-area').resizable({
    handles: 'n',
    alsoResize: '#input, #bubble',
    stop: function(event, ui) {
        $('#chat').css('padding-bottom', ui.size.height + 40 + 'px');
    }
});

$('#bubble').resizable({
    handles: 'e',
    alsoResize: '#input'
});

test
