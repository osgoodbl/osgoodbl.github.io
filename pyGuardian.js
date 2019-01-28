(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [{
            id: "gamertag",
            dataType: tableau.dataTypeEnum.string
        }];

        var tableSchema = {
            id: "pyGuardian",
            alias: "one with the light",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

var apiKey = "668b2e3fc37a47de87d3b5e29defacd9";

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        $.ajax({
         url: "https://www.bungie.net/platform/Destiny2/SearchDestinyPlayer/2/vicodin4000/",
             headers: {
              "X-API-Key": apiKey
             }
    }).done(function(resp){
        var feat = resp,
            tableData = [];
            tableData.push({
                "gamertag": feat.Response
            });

        table.appendRows(tableData);
        doneCallback();
    });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "Your Light grows Stronger"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();



// $.ajax({
//             url: "https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/2/vicodin4000/",
//             type: 'GET',
//             dataType: 'json',
//             headers: {
//                 'X-API-key': '668b2e3fc37a47de87d3b5e29defacd9',
//             },
//             contentType: 'application/json; charset=utf-8',
//             success: function (result) {
//                // CallBack(result);
//             },
//             error: function (error) {
//
//             }
//         });
