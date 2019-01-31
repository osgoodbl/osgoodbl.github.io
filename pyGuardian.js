(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [{
            id: "gamertag",
            alias: "username",
            description:"Your platform username/gamertag",
            dataType: tableau.dataTypeEnum.string
        },{
            id:"membershipId",
            alias:"membershipid for other api calls",
            description:"used in other calls to the destiny 2 API",
            dataType: tableau.dataTypeEnum.string
        },{
          id:"membershipType",
          alias:"game system",
          description:"numeric representation of your gaming platform",
          dataType: tableau.dataTypeEnum.float
        }];

        var tableSchema = {
            id: "pyGuardian",
            alias: "Tales of your heroics",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

var apiKey = "668b2e3fc37a47de87d3b5e29defacd9";

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
      console.log(resp);
        var feat = resp,
            tableData = [];

                tableData.push({
                    "gamertag": feat.Response[0].displayName,
                    "membershipId":feat.Response[0].membershipId,
                    "membershipType":feat.Response[0].membershipType
            });
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
