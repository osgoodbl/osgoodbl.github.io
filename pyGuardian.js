(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [{
            id: "gamertag",
            dataType: tableau.dataTypeEnum.string
        },{
            id:"message",
            dataType: tableau.dataTypeEnum.string
        }];

        var tableSchema = {
            id: "pyGuardian",
            alias: "one with the light",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

var apiKey = "9a8e500b4d154f899dfea96fc3c4889d";

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        $.ajax({
            type:'GET',
            url: "https://www.bungie.net/platform/Destiny2/SearchDestinyPlayer/2/vicodin4000/",
            headers: {
              "X-API-Key": apiKey
            },
            dataType: 'json',
    }).done(function(resp){
        var feat = resp,
            tableData = [];

            for (var i = 0, len=feat.length; i<len; i++){

                tableData.push({
                    "gamertag": feat[i].Response,
                    "message":feat[i].Message
            });
        }
        table.appendRows(tableData);
        doneCallback();
    });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "Guardian Stats"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
