// ==UserScript==
// @name        FixedTopbar
// @namespace   http://stackexchange.com
// @description Fixes the topbar in place
// @match       http*://*.askubuntu.com/*
// @match       http*://*.mathoverflow.net/*
// @match       http*://*.serverfault.com/*
// @match       http*://*.stackapps.com/*
// @match       http*://*.stackexchange.com/*
// @match       http*://*.stackoverflow.com/*
// @match       http*://*.superuser.com/*
// @grant       none
// ==/UserScript==

$('.topbar').css('position', 'fixed');
$('.topbar').css('top', '0px');
$('.topbar').css('z-index', '100');

$('body > div.container').css('margin-top', '34px');

$(window).scroll(function(){
    if($(window).scrollTop() > 34){
        $('.topbar').css('opacity', '0.1');
        $('.topbar').css('position', 'fixed');
        $('body > div.container').css('margin-top', '34px');
        $('.topbar').hover(function(){
            $('.topbar').css('opacity', '1');
        }, function(){
            $('.topbar').css('opacity', '0.1');
        });
    }       
    else {
        $('.topbar').css('position', 'static');
        $('.topbar').css('opacity', '1');
        $('body > div.container').css('margin-top', '0px');
        $('.topbar').hover(function(){}, function(){$('.topbar').css('opacity', '1');});
    }
});
