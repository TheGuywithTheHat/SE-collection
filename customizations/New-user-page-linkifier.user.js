// ==UserScript==
// @name       New user page
// @namespace  http://stackexchange.com/users/*
// @version    1
// @description  Links to the new user page
// @match      http://stackoverflow.com/users/*
// @copyright  2014+, The Guy with The Hat
// ==/UserScript==

$(".gravatar > a[href*='http://stackoverflow.com/users/']").attr('href', $(".gravatar > a[href*='http://stackoverflow.com/users/']").attr('href').replace(new RegExp(/http:\/\/stackoverflow.com\/users\/(\d+).*/),'http://stackoverflow.com/users/reloaded/$1'))
