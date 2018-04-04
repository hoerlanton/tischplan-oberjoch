/**
 * Created by antonhorl on 09.01.18.
 */

module.exports = {
    removePlaceholder: function (req, res, db) {
        //JSON string is parsed to a JSON object
        //console.log("removePlaceholder request made to /removePlaceholder");
        //console.log(JSON.stringify(req.body));
        let data = JSON.stringify(req.body);
        let splitted = data.split("\\");
        let departmentValue = "";
        let tableValue = "";
        let departmentValueDB = "";
        let tableValueArray = [];
        let value = "nAnreise";
        //console.log(splitted);
        let informationElements2 = [];
        let infoElementString = "";
        for (let s = 0; s < splitted.length; s++){
            informationElements2.push(splitted[s].split(":"));
        }
        console.log('removePlaceholder: array: ');
        console.log(informationElements2);
        infoElementString = JSON.stringify(informationElements2);

        if(infoElementString.indexOf(value) != -1 && infoElementString.indexOf('nKAT') != -1) {
            console.log("Im-Haus-Liste");
            departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
            tableValue = tableValueArray[0];
        } else if (infoElementString.indexOf('nTrace') != -1) {
            console.log("Trace");
            departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
            tableValue = tableValueArray[0];
        } else {
            console.log("Anreise");
            departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
            tableValue = tableValueArray[0];
        }

        if (departmentValue === "SteakRestaurant") {
            departmentValueDB = "steakRestaurant";
        }
        else if (departmentValue === "PanoramaRestaurant1") {
            departmentValueDB = "panoramaRestaurant1";
        }
        else if (departmentValue === "PanoramaRestaurant2") {
            departmentValueDB = "panoramaRestaurant2";
        }
        else if (departmentValue === "Feuerstein") {
            departmentValueDB = "feuerstein";
        }

        console.log('removePlaceholder:' + departmentValue);
        console.log('removePlaceholder:' + tableValue);

        db.oberjochTables.update(
            {
                department: departmentValueDB,
                "tables.number": tableValue
            },
            {$set: {
                "tables.$.placeholder": "false",
            }}, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("Updated successfully removePlaceholder");
            });

        setTimeout(function() {
            db.oberjochTables.findOne(
                {
                    department: departmentValueDB,
                    "tables.number": tableValue
                },{
                    "tables.$": 1,
                }, function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log("removePlaceholder response: " + JSON.stringify(tables));
                });
        }, 100);
    },

    addPlaceholder: function (req, res, db) {
        //JSON string is parsed to a JSON object
        console.log("addPlaceholder request made to /addPlaceholder");
        let addPlaceholder = req.body;
        //console.log(addPlaceholder);
        if (addPlaceholder.length === 2) {
            let department = addPlaceholder[0];
            let tableNumber = addPlaceholder[1];
            console.log("department: " + department + ' ' + tableNumber);
            setTimeout(function () {
                db.oberjochTables.update(
                    {
                        department: department,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.placeholder": "true",
                        }
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("No Error");
                    });
            }, 100);
            setTimeout(function () {
                db.oberjochTables.find(
                    {
                    }, function (err, tables) {
                        if (err) {
                            res.send(err);
                        }
                        res.json(tables);
                        //console.log('Response tables addPlaceholder' + JSON.stringify(tables));
                    });
            }, 200);
        } else {
            db.oberjochTables.update(
                {
                    department: addPlaceholder.department,
                    "tables.number": addPlaceholder.number
                },
                {
                    $set: {
                        "tables.$.placeholder": "true",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("No Error");
                });
            setTimeout(function () {
                db.oberjochTables.find(
                    {
                    }, function (err, tables) {
                        if (err) {
                            res.send(err);
                        }
                        res.json(tables);
                        //console.log(JSON.stringify(tables));
                    });
            }, 100);
        }
    }
}