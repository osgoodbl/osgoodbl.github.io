var apiKey = "668b2e3fc37a47de87d3b5e29defacd9";

$(document).ready(function() {
  $("#profilebutton").click(function() {
      $.ajax({
        url: "https://www.bungie.net/platform/Destiny2/SearchDestinyPlayer/2/vicodin4000/",
        headers: {
          "X-API-Key": apiKey
        }
      }).done(function(player){
        var membershipId = player.Response[0].membershipId.val();
        var membershipType = player.Response[0].membershipType.val();
     console.log(player,membershipId, membershipType);
     tableData = [];

         tableData.push({
             "gamertag": feat.Response[0].displayName,
             "membershipId":feat.Response[0].membershipId,
             "membershipType":feat.Response[0].membershipType

        });
      });
  $("#activitybutton").click(function() {
      $.ajax({
        url: "https://www.bungie.net/platform/Destiny2/" + membershipType + "/Profile/" + destinyMembershipId + "/",
        headers: {
          "X-API-Key": apiKey
        }
      }).done(function(activity){
     console.log(activity);
      });
    });
  });
});
