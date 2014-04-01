// ==UserScript==
// @name UnicoinHax
// @namespace http://stackexchange.com
// @description Constantly gives you Unicoins whenever you visit a Stack Exchange site
// @include          http://*.stackoverflow.com/*
// @include          https://*.stackoverflow.com/*
// @include          http://*.serverfault.com/*
// @include          https://*.serverfault.com/*
// @include          http://*.superuser.com/*
// @include          https://*.superuser.com/*
// @include          http://stackapps.com/*
// @include          https://stackapps.com/*
// @include          http://*.stackexchange.com/*
// @include          https://*.stackexchange.com/*
// @include          http://*.askubuntu.com/*
// @include          https://*.askubuntu.com/*
// @include          http://stackoverflow.com/*
// @include          https://stackoverflow.com/*
// @include          http://serverfault.com/*
// @include          https://serverfault.com/*
// @include          http://superuser.com/*
// @include          https://superuser.com/*
// @include          http://stackapps.com/*
// @include          https://stackapps.com/*
// @include          http://stackexchange.com/*
// @include          https://stackexchange.com/*
// @include          http://askubuntu.com/*
// @include          https://askubuntu.com/*
// @include          http://stackoverflow.com/
// @include          https://stackoverflow.com/
// @include          http://serverfault.com/
// @include          https://serverfault.com/
// @include          http://superuser.com/
// @include          https://superuser.com/
// @include          http://stackapps.com/
// @include          https://stackapps.com/
// @include          http://stackexchange.com/
// @include          https://stackexchange.com/
// @include          http://askubuntu.com/
// @include          https://askubuntu.com/
// @version 1
// @grant none
// ==/UserScript==

//You can also just copy this code and paste it into the console on any page where the domain is a Stack Exchange site:

var hackMeSomeUnicoins = function(myFkey) {
  console.log("Unicoin hacking begun!");
  window.setInterval(function() {
    $.get(window.location.protocol + "//" + window.location.host + "/unicoin/rock", function( data ) {
      var rockId = data.rock;
      $.post(window.location.protocol + "//" + window.location.host + "/unicoin/mine?rock=" + rockId, {fkey: myFkey})
      .done(function(data) {
        console.log(data);
      });
    });
  }, 11000);
};
hackMeSomeUnicoins(StackExchange.options.user.fkey);
