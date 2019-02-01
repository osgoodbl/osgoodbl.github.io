var apiKey = "668b2e3fc37a47de87d3b5e29defacd9";
var gamertag;
var membershipId;
var membershipType;
$(document).ready(function() {
  $("#profilebutton").click(function() {
      $.ajax({
        url: "https://www.bungie.net/platform/Destiny2/SearchDestinyPlayer/2/vicodin4000/",
        headers: {
          "X-API-Key": apiKey
        }
      }).done(function(player){
     console.log(player);
     gamertag = player.Response[0].displayName;
     membershipId = player.Response[0].membershipId;
     membershipType = player.Response[0].membershipType;
      });
  $("#activitybutton").click(function() {
      $.ajax({
        url: "https://www.bungie.net/platform/Destiny2/" + membershipType + "/Profile/" + gamertag + "/",
        headers: {
          "X-API-Key": apiKey
        }
      }).done(function(activity){
     console.log(activity);
      });
    });
  });
});
