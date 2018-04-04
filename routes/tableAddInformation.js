/**
 * Created by antonhorl on 08.02.18.
 */


module.exports = {
    addInformationToTable: function (req, res, db) {
        console.log("addInformationToTable request made to /addInformationToTable");
        console.log(JSON.stringify(req.body));

        let data = JSON.stringify(req.body),
            splitted = data.split("\\"),
            informationElements2 = [],
            departmentValueDB = "",
            nameValue = [],
            zimmernummerValue = [],
            anreiseValue = [],
            abreiseValue = [],
            personenAnzahlValue = [],
            kategorieValue = [],
            wiederkehrerValue = [],
            departmentValue = "",
            tableValue = "",
            tableValueArray = [],
            bemerkungValue = [],
            newTraceText = [],
            newTraceRoomNumber = [],
            newTraceName = [],
            newTraceEmployee = [],
            newTraceDate = [],
            newTraceTableNumber = [],
            teeString = "Tee",
            bemerkungValueTemp = "",
            restaurant = 0;

        for (let s = 0; s < splitted.length; s++) {
            informationElements2.push(splitted[s].split(/:(.+)/)[1]);
            if (informationElements2[s] === undefined) {
                informationElements2[s] = splitted[s]
            }
        }

        console.log('informationElements2 length: -> ' + informationElements2.length);
        console.log(informationElements2);

        if (informationElements2.length > 5) {
            console.log("Liste dropped");

            nameValue.push(informationElements2[0].substring(1, informationElements2[0].length));
            personenAnzahlValue.push(informationElements2[1].substring(1, informationElements2[1].length));
            //kategorieValue.push(informationElements2[1].substring(1, informationElements2[1].length));
            zimmernummerValue.push(informationElements2[2].substring(1, informationElements2[2].length));
            //preisTypValue.push(informationElements2[3].substring(1, informationElements2[3].length));
            anreiseValue.push(informationElements2[3].substring(1, informationElements2[3].length));
            abreiseValue.push(informationElements2[4].substring(1, informationElements2[4].length));
            kategorieValue.push(informationElements2[5].substring(1, informationElements2[5].length));
            wiederkehrerValue.push(informationElements2[6].substring(1, informationElements2[6].length));
            for (let z = 7; z < informationElements2.length - 1; z++) {
                bemerkungValueTemp += informationElements2[z].substring(1, informationElements2[z].length);
            }
            bemerkungValue.push(bemerkungValueTemp);

            //preisValue.push(informationElements2[11].substring(1, informationElements2[11].length));
            //vipValue.push(informationElements2[informationElements2.length - 3].substring(1, informationElements2[informationElements2.length - 3].length));
            //resStatusValue.push(informationElements2[informationElements2.length - 2].substring(1, informationElements2[informationElements2.length - 2].length));
            departmentValue = informationElements2[informationElements2.length - 1].substring(1, informationElements2[informationElements2.length - 1].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2.length - 1].toString().match(/\d+/g);

            console.log(tableValueArray);

           if (tableValueArray.length > 1) {
               tableValue = tableValueArray.join(".");
           } else {
               tableValue = tableValueArray[0];
           }

           if (tableValue.length > 3) {
               restaurant = tableValue.charAt(0);
               tableValue = tableValue.slice(1, tableValue.length);
           }

            console.log(tableValueArray);
            console.log(tableValue);

            console.log(nameValue[0]);
            console.log(tableValue + " " + departmentValue);


            if (departmentValue === "SteakRestaurant") {
                departmentValueDB = "steakRestaurant";
            }
            else if (departmentValue === "PanoramaRestaurant") {
                departmentValueDB = "panoramaRestaurant" + restaurant;
            }
            else if (departmentValue === "PanoramaRestaurant") {
                departmentValueDB = "panoramaRestaurant" + restaurant;
            }
            else if (departmentValue === "Feuerstein") {
                departmentValueDB = "feuerstein";
            }
            setTimeout(function () {
                db.oberjochTables.update(
                    {
                        department: departmentValueDB,
                        "tables.number": tableValue
                    },
                    {
                        $push: {
                            "tables.$.groups": {
                                "nameValue": nameValue[0],
                                "zimmernummerValue": zimmernummerValue[0],
                                "anreiseValue": anreiseValue[0],
                                "abreiseValue": abreiseValue[0],
                                "personenAnzahlValue": personenAnzahlValue[0],
                                "wiederkehrerValue": wiederkehrerValue[0],
                                "kategorieValue": kategorieValue[0],
                                "bemerkungValue": bemerkungValue[0],
                            }
                        }
                    }, function (err, tables) {
                        if (err) {
                            console.log(err);
                        }
                        console.log("addInformationToTable updated successfully");
                    });
            }, 200);
        } else {
            console.log("umsetzen addInformationToTable");
            let umsetzen = JSON.parse(data);
            console.log("umsetzen");
            console.log(umsetzen);

            for (let i = 0; i < umsetzen[0].groups.length; i++) {
                zimmernummerValue.push(umsetzen[0].groups[i].zimmernummerValue);
                nameValue.push(umsetzen[0].groups[i].nameValue);
                personenAnzahlValue.push(umsetzen[0].groups[i].personenAnzahlValue);
                anreiseValue.push(umsetzen[0].groups[i].anreiseValue);
                abreiseValue.push(umsetzen[0].groups[i].abreiseValue);
                kategorieValue.push(umsetzen[0].groups[i].kategorieValue);
                wiederkehrerValue.push(umsetzen[0].groups[i].wiederkehrerValue);
                bemerkungValue.push(umsetzen[0].groups[i].bemerkungValue);
                //vipValue.push(umsetzen[0].groups[i].vipValue);
                //resStatusValue.push(umsetzen[0].groups[i].resStatusValue);
                //preisValue.push(umsetzen[0].groups[i].preisValue);
                newTraceText.push(umsetzen[0].groups[i].newTraceName);
                newTraceRoomNumber.push(umsetzen[0].groups[i].newTraceRoomNumber);
                newTraceName.push(umsetzen[0].groups[i].newTraceName);
                newTraceEmployee.push(umsetzen[0].groups[i].newTraceEmployee);
                newTraceDate.push(umsetzen[0].groups[i].newTraceDate);
                newTraceTableNumber.push(umsetzen[0].groups[i].newTraceTableNumber);
                departmentValueDB = umsetzen[1].targetDepartment;
                tableValue = umsetzen[1].targetTable;
                umsetzen[0].department = umsetzen[1].targetDepartment;
            }

            //console.log(" nameValue " + nameValue + " zimmernummerValue " + zimmernummerValue + " anreiseValue " + anreiseValue + " abreiseValue " + abreiseValue + " personenAnzahlValue " + personenAnzahlValue + " notiz1Value " + notiz1Value + " notiz2Value " + notiz2Value + " bemerkungValue " + bemerkungValue + "tableValue" + tableValue + "departmentvalue" + departmentValue);


            setTimeout(function () {
                db.oberjochTables.findOne(
                    {
                        department: departmentValueDB,
                        "tables.number": tableValue
                    },
                    {
                        "tables.$": 1,
                    },
                    function (err, tablesfirst) {
                        if (err) {
                            res.send(err);
                        }
                        if (tablesfirst === null) {
                            console.log("tablesfirst is null");
                            console.log(tablesfirst);
                            return;
                        }
                        console.log("Länge tables firstplace" + JSON.stringify(tablesfirst.tables[0]).length);
                        for (let i = 0; i < umsetzen[0].groups.length; i++) {
                            if (nameValue[i]) {
                                db.oberjochTables.update(
                                    {
                                        department: departmentValueDB,
                                        "tables.number": tableValue
                                    },
                                    {
                                        $push: {
                                            "tables.$.groups": {
                                                "nameValue": nameValue[i],
                                                "zimmernummerValue": zimmernummerValue[i],
                                                "anreiseValue": anreiseValue[i],
                                                "abreiseValue": abreiseValue[i],
                                                "personenAnzahlValue": personenAnzahlValue[i],
                                                "wiederkehrerValue": wiederkehrerValue[i],
                                                "kategorieValue": kategorieValue[i],
                                                "bemerkungValue": bemerkungValue[i],
                                            }
                                        }
                                    }, function (err, tables) {
                                        if (err) {
                                            console.log("Error");
                                        }
                                        console.log("addInformationToTable updated successfully");
                                    });
                            } else {
                                db.oberjochTables.update(
                                    {
                                        department: departmentValueDB,
                                        "tables.number": tableValue
                                    },
                                    {
                                        $push: {
                                            "tables.$.groups": {
                                                "newTraceText" : newTraceText[i],
                                                "newTraceRoomNumber": newTraceRoomNumber[i],
                                                "newTraceName": newTraceName[i],
                                                "newTraceEmployee": newTraceEmployee[i],
                                                "newTraceDate": newTraceDate[i],
                                                "newTraceTableNumber": newTraceTableNumber[i]
                                            }
                                        }
                                    }, function (err, tables) {
                                        if (err) {
                                            console.log("Error");
                                        }
                                        console.log("addInformationToTable updated successfully");
                                    });
                            }

                        }
                    });
            }, 200);
        }
        setTimeout(function () {
            db.oberjochTables.find(
                {
                    department: departmentValueDB,
                    "tables.number": tableValue
                }, function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log("Add information to table response");
                    console.log(JSON.stringify(tables));
                });
        }, 1000);
    }
};