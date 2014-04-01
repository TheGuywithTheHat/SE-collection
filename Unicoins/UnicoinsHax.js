// ==UserScript==
// @name UnicoinHax
// @namespace http://stackexchange.com
// @description Constantly gives you Unicoins whenever you visit the main page for a Stack Exchange site
// @include http://*.stackexchange.com/
// @include http://stackoverflow.com/
// @include http://*.stackoverflow.com/
// @include http://mathoverflow.com/
// @include http://serverfault.com/
// @include http://superuser.com/
// @include http://stackapps.com/
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
