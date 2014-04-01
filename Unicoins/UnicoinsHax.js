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
