/**
 * Created by antonhorl on 06.01.18.
 */


module.exports = {
    addTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {

        if (tableNumber === '1' && topValue === '550' && leftValue === '300' && width === '90') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "180",
                        "tables.$.leftValue": "170",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "2",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '1' && topValue === '550' && leftValue === '170' && width === '180') {
                db.oberjochTables.update(
                    {
                        department: departmentValue,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.width": "270",
                            "tables.$.leftValue": "25",
                        }
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("moveTable Update successful");
                    });
                db.oberjochTables.update(
                    {}, {
                        $pull: {
                            tables: {
                                "number": "3",
                            }
                        }
                    },
                    {
                        multi: true
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("removeTable Update successful");
                    });
        }  else if (tableNumber === '2' && topValue === '550' && leftValue === '165' && width === '95') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "190",
                        "tables.$.leftValue": "25",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "3",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '4' && topValue === '410' && leftValue === '25' && height === '50') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "100",
                        "tables.$.leftValue": "25",
                        "tables.$.topValue": "320",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "5",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '4' && topValue === '320' && leftValue === '25' && height === '100') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "50",
                        "tables.$.leftValue": "25",
                        "tables.$.topValue": "320",
                        "tables.$.width": "180",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "6",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '5' && topValue === '320' && leftValue === '25' && height === '50') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "50",
                        "tables.$.leftValue": "25",
                        "tables.$.topValue": "320",
                        "tables.$.width": "120",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "6",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '7' && topValue === '210' && leftValue === '25' && width === '60') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "120",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "7.1",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '7' && topValue === '210' && leftValue === '25' && width === '120') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "180",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "8",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '7.1' && topValue === '210' && leftValue === '110' && width === '60') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "120",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "8",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '9' && topValue === '110' && leftValue === '25' && width === '90') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "180",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "10",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '9' && topValue === '110' && leftValue === '25' && width === '180') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "270",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "11",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '9' && topValue === '110' && leftValue === '25' && width === '270') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "360",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "12",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '9' && topValue === '110' && leftValue === '25' && width === '360') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "450",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "13",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '10' && topValue === '110' && leftValue === '160' && width === '90') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "180",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "11",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '10' && topValue === '110' && leftValue === '160' && width === '180') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "270",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "12",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '10' && topValue === '110' && leftValue === '160' && width === '270') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "360",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "13",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '11' && topValue === '110' && leftValue === '280' && width === '90') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "180",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "12",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '11' && topValue === '110' && leftValue === '280' && width === '180') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "270",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "13",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '12' && topValue === '110' && leftValue === '410' && width === '90') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "180",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "13",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '14' && topValue === '210' && leftValue === '700' && height === '100') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "200",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "15",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '14' && topValue === '210' && leftValue === '700' && height === '200') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "300",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "16",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '14' && topValue === '210' && leftValue === '700' && height === '300') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "400",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "17",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '15' && topValue === '325' && leftValue === '700' && height === '100') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "200",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "16",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '15' && topValue === '325' && leftValue === '700' && height === '200') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "300",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "17",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }  else if (tableNumber === '16' && topValue === '430' && leftValue === '700' && height === '100') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "200",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "17",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                });
        }
    }
};