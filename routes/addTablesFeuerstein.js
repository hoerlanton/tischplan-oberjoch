/**
 * Created by antonhorl on 06.01.18.
 */


module.exports = {
    addTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {

        if (tableNumber === '12' && topValue === '220' && leftValue === '400' && height === '60') {
            db.oberjochTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "120",
                        "tables.$.topValue": "160",
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
                    console.log(tables);
                });
        }
    }
};