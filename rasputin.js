var apiKey = "668b2e3fc37a47de87d3b5e29defacd9";

$(document).ready(function() {
    $.ajax({
        url: "https://www.bungie.net/platform/Destiny2/SearchDestinyPlayer/2/vicodin4000/",
        headers: {
          "X-API-Key": apiKey
        },
        dataType: "jsonp",
    }).done(function(json){
     console.log(json); //Gjallarhorn
    });
});
