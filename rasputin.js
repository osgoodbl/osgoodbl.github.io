var apiKey = "9a8e500b4d154f899dfea96fc3c4889d";

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
