/**
 * Created by antonhorl on 06.01.18.
 */

module.exports = {
    removeTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
        if (tableNumber === '202' && topValue === '750' && leftValue === '365' && width === '140') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "70",
                        "tables.$.leftValue": "450",
                        "tables.$.topValue": "730",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [ {
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "203",
                                "topValue": "750",
                                "leftValue": "365",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "90",
                                "transformValue": "rotate(-10deg)"
                            },],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '201' && topValue === '730' && leftValue === '450' && width === '140')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "70",
                        "tables.$.leftValue": "540",
                        "tables.$.topValue": "710",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "202",
                                "topValue": "730",
                                "leftValue": "450",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "90",
                                "transformValue": "rotate(-10deg)"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '201' && topValue === '750' && leftValue === '365' && width === '210') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "140",
                        "tables.$.leftValue": "450",
                        "tables.$.topValue": "730",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "203",
                                "topValue": "750",
                                "leftValue": "365",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "90",
                                "transformValue": "rotate(-10deg)"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '210' && topValue === '590' && leftValue === '320' && width === '140') {
                db.oberjochTables.update(
                    {
                        department: departmentValue,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.width": "70",
                        }
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("moveTable Update successful");
                    });
                db.oberjochTables.update(
                    {
                        department: departmentValue,
                    }, {
                        $push: {
                            tables: {
                                $each: [{
                                    "arrayIndex": "13",
                                    "department": "panoramaRestaurant2",
                                    "number": "211",
                                    "topValue": "570",
                                    "leftValue": "417",
                                    "bgColor": "#ffffff",
                                    "isBesetzt": "false",
                                    "placeholder": "true",
                                    "border": "solid 3px #f3efe4",
                                    "width": "70",
                                    "height": "90",
                                    "transformValue": "rotate(-10deg)"
                                }],
                                $sort: {number: 1}
                            }
                        }
                    },
                    {multi: true},
                    function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("addTable Update successful");
                    });
            } else if (tableNumber === '210' && topValue === '590' && leftValue === '320' && width === '210')  {
                db.oberjochTables.update(
                    {
                        department: departmentValue,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.width": "140",
                        }
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("moveTable Update successful");
                    });
                db.oberjochTables.update(
                    {
                        department: departmentValue,
                    }, {
                        $push: {
                            tables: {
                                $each: [{
                                    "arrayIndex": "14",
                                    "department": "panoramaRestaurant2",
                                    "number": "212",
                                    "topValue": "550",
                                    "leftValue": "510",
                                    "bgColor": "#ffffff",
                                    "isBesetzt": "false",
                                    "placeholder": "true",
                                    "border": "solid 3px #f3efe4",
                                    "width": "70",
                                    "height": "90",
                                    "transformValue": "rotate(-10deg)"
                                }],
                                $sort: {number: 1}
                            }
                        }
                    },
                    {multi: true},
                    function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("addTable Update successful");
                    });
            } else if (tableNumber === '211' && topValue === '570' && leftValue === '417' && width === '140')  {
                db.oberjochTables.update(
                    {
                        department: departmentValue,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.width": "70",
                        }
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("moveTable Update successful");
                    });
                db.oberjochTables.update(
                    {
                        department: departmentValue,
                    }, {
                        $push: {
                            tables: {
                                $each: [{
                                    "arrayIndex": "14",
                                    "department": "panoramaRestaurant2",
                                    "number": "212",
                                    "topValue": "550",
                                    "leftValue": "510",
                                    "bgColor": "#ffffff",
                                    "isBesetzt": "false",
                                    "placeholder": "true",
                                    "border": "solid 3px #f3efe4",
                                    "width": "70",
                                    "height": "90",
                                    "transformValue": "rotate(-10deg)"
                                }],
                                $sort: {number: 1}
                            }
                        }
                    },
                    {multi: true},
                    function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("addTable Update successful");
                    });
        } else if (tableNumber === '204' && topValue === '800' && leftValue === '200' && width === '110')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "55",
                        "tables.$.leftValue": "260",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [ {
                                "arrayIndex": "10",
                                "department": "panoramaRestaurant2",
                                "number": "205",
                                "topValue": "800",
                                "leftValue": "200",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "55",
                                "height": "45"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '204' && topValue === '800' && leftValue === '140' && width === '175')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "110",
                        "tables.$.leftValue": "200",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "0",
                                "department": "panoramaRestaurant2",
                                "number": "206",
                                "topValue": "800",
                                "leftValue": "140",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "55",
                                "height": "45"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '204' && topValue === '800' && leftValue === '75' && width === '240')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "175",
                        "tables.$.leftValue": "140",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "0",
                                "department": "panoramaRestaurant2",
                                "number": "207",
                                "topValue": "800",
                                "leftValue": "75",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "55",
                                "height": "45"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '205' && topValue === '800' && leftValue === '140' && width === '110')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "55",
                        "tables.$.leftValue": "200",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "0",
                                "department": "panoramaRestaurant2",
                                "number": "206",
                                "topValue": "800",
                                "leftValue": "140",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "55",
                                "height": "45"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '205' && topValue === '800' && leftValue === '75' && width === '175')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "110",
                        "tables.$.leftValue": "140",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "0",
                                "department": "panoramaRestaurant2",
                                "number": "207",
                                "topValue": "800",
                                "leftValue": "75",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "55",
                                "height": "45"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '206' && topValue === '800' && leftValue === '75' && width === '110')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "55",
                        "tables.$.leftValue": "140",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "0",
                                "department": "panoramaRestaurant2",
                                "number": "207",
                                "topValue": "800",
                                "leftValue": "75",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "55",
                                "height": "45"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '208' && topValue === '610' && leftValue === '75' && width === '100')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "50",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "11",
                                "department": "panoramaRestaurant2",
                                "number": "208",
                                "topValue": "610",
                                "leftValue": "75",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "50",
                                "height": "60"
                            },],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '315' && topValue === '100' && leftValue === '550' && height === '250')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "205",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [   {
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "319",
                                "topValue": "400",
                                "leftValue": "550",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "45"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '315' && topValue === '100' && leftValue === '550' && height === '205')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "135",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [   {
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "318",
                                "topValue": "290",
                                "leftValue": "540",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "100"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '315' && topValue === '100' && leftValue === '550' && height === '135')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "90",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [   {
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "317",
                                "topValue": "220",
                                "leftValue": "525",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "45"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '315' && topValue === '100' && leftValue === '550' && height === '90')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "45",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "316",
                                "topValue": "160",
                                "leftValue": "540",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "45"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '315' && topValue === '100' && leftValue === '550' && height === '205')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "135",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [   {
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "318",
                                "topValue": "290",
                                "leftValue": "540",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "100"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '315' && topValue === '100' && leftValue === '550' && height === '135')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "90",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [   {
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "317",
                                "topValue": "220",
                                "leftValue": "525",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "45"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '315' && topValue === '100' && leftValue === '550' && height === '90')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "45",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "316",
                                "topValue": "160",
                                "leftValue": "540",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "45"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '316' && topValue === '160' && leftValue === '540' && height === '90')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "45",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [   {
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "317",
                                "topValue": "220",
                                "leftValue": "525",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "45"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '316' && topValue === '160' && leftValue === '540' && height === '150')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "90",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "318",
                                "topValue": "290",
                                "leftValue": "540",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "100"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '316' && topValue === '160' && leftValue === '540' && height === '195')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "150",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "319",
                                "topValue": "400",
                                "leftValue": "550",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "45"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '317' && topValue === '220' && leftValue === '525' && height === '105')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "45",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "318",
                                "topValue": "290",
                                "leftValue": "540",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "100"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '317' && topValue === '220' && leftValue === '525' && height === '160')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "105",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "319",
                                "topValue": "400",
                                "leftValue": "550",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "45"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '318' && topValue === '290' && leftValue === '540' && height === '115')  {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "100",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.oberjochTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "14",
                                "department": "panoramaRestaurant2",
                                "number": "319",
                                "topValue": "400",
                                "leftValue": "550",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "70",
                                "height": "45"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
         }
    }
};