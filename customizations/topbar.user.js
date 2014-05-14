// ==UserScript==
// @name        CustomSE
// @namespace   http://stackexchange.com
// @description A customization for Stack Exchange
// @match       /^https?:\/\/(meta.)?askubuntu\.com/
// @match       /^https?:\/\/(meta.)?mathoverflow\.net/
// @match       /^https?:\/\/(meta.)?serverfault\.com/
// @match       /^https?:\/\/stackapps\.com/
// @match       /^https?:\/\/(?!chat).*\.stackexchange\.com/
// @match       /^https?:\/\/(meta.)?stackoverflow\.com/
// @match       /^https?:\/\/(meta.)?superuser\.com/
// @grant       none
// ==/UserScript==

$('.topbar').css('background', '-moz-linear-gradient(300deg, red, orange, yellow, green, blue, indigo, violet)');
$('.topbar').css('background', '-webkit-gradient(linear, left center, right center, from(red), color-stop(14%, orange), color-stop(28%, yellow), color-stop(42%, green), color-stop(56%, blue), color-stop(70%, indigo), to(violet))');
$('.topbar').css('background', '-o-linear-gradient(left, red, orange, yellow, green, blue, indigo, violet)');
$('.topbar').css('background', '-ms-linear-gradient(left, red, orange, yellow, green, blue, indigo, violet)');
$('.topbar').css('position', 'fixed');
$('.topbar').css('top', '0px');
$('.topbar').css('z-index', '100');

$('body > div.container').css('margin-top', '34px');

$('.topbar').children().css('background-color', 'transparent');

$('.network-items').css('background-color', 'rgba(255, 255, 255, 0.25)');
$('.topbar-menu-links').css('background-color', 'rgba(255, 255, 255, 0.25)');
$('#search > input').css({
    'background-color': 'transparent',
    '-khtml-opacity': '.50',
    '-moz-opacity': '.50',
    '-ms-filter': '"alpha(opacity=50)"',
    'filter': 'alpha(opacity=50)',
    'filter': 'progid:DXImageTransform.Microsoft.Alpha(opacity=0.5)',
    'opacity': '.50',
});
