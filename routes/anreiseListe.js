/**
 * Created by antonhorl on 09.01.18.
 */

module.exports = {
    saveAnreiseListe: function (req, res, db) {
    //JSON string is parsed to a JSON object

            console.log("JSON.stringify(req.body)");
            console.log(JSON.stringify(req.body));

            let anreiseListeData = {
                data: "",
            };

            let anreiseListe = [];

            anreiseListeData.data = req.body;


            //  "zimmernummer": anreiseListeData.data[i][1],
            //  "kat": anreiseListeData.data[i][2],
            //  "name": anreiseListeData.data[i][6],
            //  "personenAnzahl": anreiseListeData.data[i][11],
            //  "anreise": anreiseListeData.data[i][12],
            //  "abreise": abreiseListeData.data[i][13],
            //  "wiederkehrer": anreiseListeData.data[i][16],
            //  "bemerkung": anreiseListeData.data[i][55],

            let name = [];
            let zimmerNummer = [];
            let kat = [];
            let anreise = [];
            let abreise  = [];
            let personenAnzahl = [];
            let bemerkung = [];
            let wiederkehrer = [];
            let counter = 0;
            //console.log(anreiseListeData.data.length);
            //console.log(anreiseListeData.data);
            let row = 4;
            for (row; row < 10000; row++) {
                let accessorNameB = "B" + row;
                let accessorNameC = "C" + row;
                let accessorNameD = "D" + row;
                let accessorNameH = "H" + row;
                let accessorNameK = "K" + row;
                let accessorNameM = "M" + row;
                let accessorNameN = "N" + row;
                let accessorNameP = "P" + row;
                let accessorNameBC = "BC" + row;

                //console.log(accessorNameA);
                //console.log(accessorNameC);

                if (anreiseListeData.data[accessorNameB] == null && anreiseListeData.data[accessorNameC] == null && anreiseListeData.data[accessorNameH] == null && anreiseListeData.data[accessorNameK] == null) {
                    console.log("BREAK!!");
                    console.log(accessorNameB);
                    console.log(accessorNameC);
                    console.log(accessorNameH);
                    console.log(accessorNameK);
                    console.log(anreiseListeData.data[accessorNameB]);
                    console.log(anreiseListeData.data[accessorNameC]);
                    console.log(anreiseListeData.data[accessorNameK]);
                    break;
                }
                if (anreiseListeData.data[accessorNameD].w == "Warteliste") {continue;}
                if (anreiseListeData.data[accessorNameB]) {
                    zimmerNummer.push(anreiseListeData.data[accessorNameB].w);
                } else {
                    zimmerNummer.push("-");
                }
                if (anreiseListeData.data[accessorNameC]) {
                    kat.push(anreiseListeData.data[accessorNameC].w);
                } else {
                    kat.push("-");
                }
                if (anreiseListeData.data[accessorNameH]) {
                    name.push(anreiseListeData.data[accessorNameH].w);
                } else {
                    name.push("-");
                }
                if (anreiseListeData.data[accessorNameK]) {
                    personenAnzahl.push(anreiseListeData.data[accessorNameK].w);
                } else {
                    personenAnzahl.push("-");
                }
                if (anreiseListeData.data[accessorNameM]) {
                    anreise.push(anreiseListeData.data[accessorNameM].w);
                } else {
                    anreise.push("-");
                }
                if (anreiseListeData.data[accessorNameN]) {
                    abreise.push(anreiseListeData.data[accessorNameN].w);
                } else {
                    abreise.push("-");
                }
                if (anreiseListeData.data[accessorNameP]) {
                    wiederkehrer.push(anreiseListeData.data[accessorNameP].w);
                } else {
                    wiederkehrer.push("-");
                }
                if (anreiseListeData.data[accessorNameBC]) {
                    bemerkung.push(anreiseListeData.data[accessorNameBC].w);
                } else {
                    bemerkung.push("-");
                }
                counter++;
            }

            //console.log("trace");
            //console.log(JSON.stringify(name));
            //console.log(JSON.stringify(trace));
            //console.log(nation);

            for (let i = 0; i < counter; i++) {
                //console.log(i);
                //console.log(anreiseListeData.data[i]);

                anreiseListe.push({
                  "zimmernummer": zimmerNummer[i],
                  "kat": kat[i],
                  "name": name[i],
                  "personenAnzahl": personenAnzahl[i],
                  "anreise": anreise[i],
                  "abreise": abreise[i],
                  "wiederkehrer": wiederkehrer[i],
                  "bemerkung": bemerkung[i],
                });
            };

            /*
                anreiseListe.push({
                    "name": anreiseListeData.data[i][6],
                    "zimmernummer": anreiseListeData.data[i][1],
                    "abreise": anreiseListeData.data[i][13],
                    "personenAnzahl": anreiseListeData.data[i][11],
                    "bemerkung": anreiseListeData.data[i][55],
                    "wiederkehrer": anreiseListeData.data[i][16],
                    "kat": anreiseListeData.data[i][2],
                });
            };
            */

            //console.log(JSON.stringify(imHausListe));

            //+3 ist nächste Zeile
            //Wenn A+3 === Traces: && H+3 != „null“ dann Trace gehört zu A-3
            /*
             console.log("Post request made to /imHausListe");
             let anreiseListeData = {
             data: "",
             };
             anreiseListeData.data = req.body;
             //console.log(anreiseListeData.data);
             //console.log(imHausListe[0].name);
             //console.log(imHausListe[1]);
             console.log(imHausListe);
             //console.log('req.body' + req.body);
             //console.log('imHausListe' +  imHausListe);
             //imHausListe.data = req.body;
             */
            db.oberjochAnreiseListe.remove({});
            setTimeout(function () {
                db.oberjochAnreiseListe.save(anreiseListe, function (err, anreiseListe) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(anreiseListe);
                    console.log("anreiseListe save called");
                });
            }, 500);

        },

    updateAnreiseListe: function (req, res, db) {

        console.log("Post request made to /updateAnreiseListeElement");

        let informationElements = req.body;


        let nameValue = informationElements[0].substring(1, informationElements[0].length);
        let zimmernummerValue = informationElements[1].substring(1, informationElements[1].length);

        console.log(nameValue);
        console.log(zimmernummerValue);


        db.oberjochAnreiseListe.update(
            {name: nameValue,
                "zimmernummer": zimmernummerValue},
            {$set: {
                "bgColor": "0a7a74",
            }}, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("occupyTable Update successful");
            });


        setTimeout(function() {
            db.oberjochAnreiseListe.findOne(
                {name: nameValue,
                    "zimmernummer": zimmernummerValue},
                function (err, oberjochAnreiseListe) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(oberjochAnreiseListe);
                    console.log('oberjochAnreiseListe');
                    console.log(JSON.stringify(oberjochAnreiseListe));
                });
        }, 700);
    },
    getAnreiseListe: function (req, res, db) {

        console.log("anreiseListe get called");
//Get guests from Mongo DB
        db.oberjochAnreiseListe.find(function (err, anreiseListe) {
            if (err) {
                res.send(err);
            }
            res.json(anreiseListe);
        });
    }
};
