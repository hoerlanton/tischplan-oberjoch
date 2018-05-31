'use strict';

const   bodyParser = require('body-parser'),
    express = require('express'),
    app = express(),
    multer = require('multer'),
    routes = require('./routes/index'),
    path = require('path'),
    request = require('request'),
    http = require('http'),
    fs = require("fs"),
    config = require('config'),
    cors = require('cors'),
    csv = require('csvtojson'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    configDatabase = require('./config/database'),
    users = require('./routes/users'),
    excel2Json = require('node-excel-to-json'),
    node_xj = require("xls-to-json"),
    parseRTF = require('rtf-parser');
let XLSX = require('xlsx');

var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//Setting port
app.set('port', process.env.PORT || 8000);

// CORS Middleware
app.use(cors());


//Set Public folder as static folder
app.use(express.static(path.join(__dirname, 'public')));

// le dice a express que el directorio 'uploads', es estatico.
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

//Use ./routes/index.js as routes root /
app.use('/', routes);

// HOST_URL used for DB calls - SERVER_URL without https or https://
const HOST_URL = config.get('hostURL');

//Store uploaded files - destination set / name of file set
let storage = multer.diskStorage({
    // Destination of upload
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    // Rename of file
    filename: function (req, file, cb) {
        cb(null, Math.random() + "*" + file.originalname.replace(/ /g, ""));
    }
});

let upload = multer({ storage: storage });
let liste = "";
let imHausListe = [];

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


// Connect To Database
mongoose.connect(configDatabase.database, { useMongoClient: true });

// On Connection
mongoose.connection.once('open', () => {
    console.log('Connected to database '+configDatabase.database);
});

// On Error
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//app.use('/users', users);


//source: https://gist.github.com/aitoribanez/8b2d38601f6916139f5754aae5bcc15f
//New file got attached to message
app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
    var exceltojson;
    console.log("console log in app.post upload", 'files', req.files);
    //res.send(req.files);
    console.log("req.files:");
    console.log(req.files);

    let uploadedFileName = req.files[0].filename.replace(/ /g, "");

    let data = '';
    let csvRow = '';
    let json = [];
    let doc = {};

    //let workbook2 = XLSX.utils.sheet_to_json(String("./uploads/" + uploadedFileName));

        parseRTF.string('{\\rtf1\\ansi\\b hi there\\b0}', (err, doc) => {
            //console.log(JSON.stringify(doc));
        });
        parseRTF.stream(fs.createReadStream(String("./uploads/" + uploadedFileName)), (err, doc) => {
            if (uploadedFileName.indexOf("rtf") !== -1) {
                res.send(req.files);
        } else {
        res.send(JSON.stringify("Error, falscher Datentyp"));
        }
            console.log(JSON.stringify(doc));

            let name = [];
            let zimmerNummer = [];
            let kat = [];
            let anreise = [];
            let abreise = [];
            let erwKi = [];
            let bemerkung = [];
            let preis = [];
            let anrede = [];
            let k = 0;
            let i = 0;
            imHausListe = [];
            //let spliced = false;

            //Add Ö Ä Ü / ö ä ü to other words
            let PTest = function () {
                return new Promise(function (resolve, reject) {
                    for (let i = 8; i < doc.content.length; i++) {
                        for (let k = 0; k < doc.content[i].content.length; k++) {
                            if (doc.content[i].content[k] && doc.content[i].content[k + 1]) {
                                //console.log(k);
                                if ((doc.content[i].content[k].value === "Ä") || (doc.content[i].content[k].value === "Ü") || (doc.content[i].content[k].value === "Ö")) {
                                    doc.content[i].content[k].value += doc.content[i].content[k + 1].value;
                                    doc.content[i].content.splice(k + 1, 1);
                                    k--;
                                    //console.log(doc.content[i].content[k].value);
                                }
                                if (doc.content[i].content[k] && doc.content[i].content[k + 1] && doc.content[i].content[k - 1]) {
                                    if ((doc.content[i].content[k].value === "ä" && doc.content[i].content[k + 1]) || (doc.content[i].content[k].value === "ü" && doc.content[i].content[k + 1]) || (doc.content[i].content[k].value === "ö" && doc.content[i].content[k + 1]) || (doc.content[i].content[k].value === "ß" && doc.content[i].content[k + 1])) {
                                        //if (spliced) {
                                        doc.content[i].content[k - 1].value += doc.content[i].content[k].value + doc.content[i].content[k + 1].value;
                                        //} else {
                                        // doc.content[i].content[k - 1].value += doc.content[i].content[k].value + doc.content[i].content[k+1].value;
                                        //}
                                        //console.log(doc.content[i].content[k].length);
                                        //console.log(doc.content[i].content[k].value);
                                        //console.log(doc.content[i].content[k+1].value);
                                        doc.content[i].content.splice(k, 2);
                                        k -= 2;
                                        //spliced = true;
                                        //console.log("k-1");
                                        //console.log("k");
                                        //if (doc.content[i].content[k]) {
                                        //    console.log(doc.content[i].content[k].value);
                                    }
                                }
                                //spliced = false;
                                //}
                                if (doc.content[i].content[k] && doc.content[i].content[k + 1] && doc.content[i].content[k - 1]) {
                                    if ((doc.content[i].content[k].value === "ä" && !doc.content[i].content[k + 1]) || (doc.content[i].content[k].value === "ü" && !doc.content[i].content[k + 1]) || (doc.content[i].content[k].value === "ö" && !doc.content[i].content[k + 1]) || (doc.content[i].content[k].value === "ß" && !doc.content[i].content[k + 1])) {
                                        doc.content[i].content[k - 1].value += doc.content[i].content[k].value;
                                    }
                                }
                                //if (doc.content[i].content[k]) {
                                //    console.log(doc.content[i].content[k].value);
                                //}
                            }
                            if (doc.content[i].content[k] && doc.content[i].content[k - 1]) {
                                if (doc.content[i].content[k].value === "18") {
                                    doc.content[i].content[k - 1].value += doc.content[i].content[k].value;
                                    doc.content[i].content.splice(k, 1);
                                }
                            }
                        }
                    }
                    resolve();
                }).then(function () { // (**)
                    // console.log(JSON.stringify(doc.content));
                    // Push all information into Arrays except
                    for (let i = 8; i < doc.content.length; i++) {
                        for (let j = 0; j < doc.content[i].content.length; j++) {
                            if (doc.content[i].content[j]) {
                                if (doc.content[i].content[j].value == "Kurtaxe"
                                    || doc.content[i].content[j].value == "rtaxe"
                                    || doc.content[i].content[j].value == "Ku"
                                    || doc.content[i].content[j].value == "Statistik"
                                    || doc.content[i].content[j].value == "Anreisen (Zimmer)"
                                    || doc.content[i].content[j].value == "Anreisen (Personen)"
                                    || doc.content[i].content[j].value == "Gäste im Haus (Zimmer)"
                                    || doc.content[i].content[j].value == "Gäste im Haus (Personen)"
                                    || doc.content[i].content[j].value == "Abreisen (Zimmer)"
                                    || doc.content[i].content[j].value == "Abreisen (Personen)"
                                ) {
                                    continue;
                                }
                                if (doc.content[i - 1].content[j]) {
                                    if ((doc.content[i - 1].content[j].value == "Kurtaxe"
                                        || doc.content[i - 1].content[j].value == "rtaxe"
                                        || doc.content[i - 1].content[j].value == "Ku")
                                        && doc.content[i].content[j].value.charAt(doc.content[i].content[j].value.length - 1) === "]") {
                                        continue;
                                    }
                                }
                                if (doc.content[i - 1].content[j] && doc.content[i].content[j+1]) {
                                    if ((doc.content[i - 1].content[j].value == "Kurtaxe"
                                        || doc.content[i - 1].content[j].value == "rtaxe"
                                        || doc.content[i - 1].content[j].value == "Ku")
                                        && (doc.content[i].content[j].value.charAt(doc.content[i].content[j].value.length - 1) === "]" || doc.content[i].content[j+1].value.charAt(doc.content[i].content[j+1].value.length - 1) === "]")) {
                                        j++;
                                        continue;
                                    }
                                }
                            }
                            if (doc.content[i].content[j - 1]) {
                                if (
                                    doc.content[i].content[j - 1].value == "Anreisen (Zimmer)"
                                    || doc.content[i].content[j - 1].value == "Anreisen (Personen)"
                                    || doc.content[i].content[j - 1].value == "Gäste im Haus (Personen)"
                                    || doc.content[i].content[j - 1].value == "Abreisen (Zimmer)"
                                    || doc.content[i].content[j - 1].value == "Abreisen (Personen)"
                                    || doc.content[i].content[j - 1].value == "Gäste im Haus (Zimmer)"
                                ) {
                                    continue;
                                }
                            }
                            if (doc.content[i].content.length >= 8 && doc.content[i].content[1].value.length === 3 && '0123456789'.indexOf(doc.content[i].content[1].value.charAt(0)) !== -1) {
                                if (j === 0) {
                                    kat.push(doc.content[i].content[j].value);
                                }
                                if (j === 1) {
                                    zimmerNummer.push(doc.content[i].content[j].value);
                                    bemerkung.push("-");
                                }
                                if (j === 2) {
                                    erwKi.push(doc.content[i].content[j].value);
                                }
                                if (doc.content[i].content[6].value.indexOf("2018") != -1) {
                                    if (j === 3 && doc.content[i].content[j + 1]) {
                                        name.push(doc.content[i].content[j].value + ", " + doc.content[i].content[j + 1].value);
                                    }
                                    if (j === 5) {
                                        anrede.push(doc.content[i].content[j].value);
                                    }
                                    if (j === 6) {
                                        anreise.push(doc.content[i].content[j].value);
                                    }
                                    if (j === 7) {
                                        abreise.push(doc.content[i].content[j].value);
                                    }
                                    if (j === 7 && doc.content[i].content.length < 9) {
                                        console.log("doc.content[i].content.length < 9");
                                        console.log(doc.content[i].content);
                                        console.log(doc.content[i].content.length);
                                        console.log("-");
                                        preis.push("-");
                                    }
                                    if (j === 8) {
                                        preis.push(doc.content[i].content[j].value);
                                    }
                                } else {
                                    if (j === 3 && doc.content[i].content[j + 2] && doc.content[i].content[j + 1]) {
                                        name.push(doc.content[i].content[j].value + ", " + doc.content[i].content[j + 1].value + ", " + doc.content[i].content[j + 2].value);
                                    }
                                    if (j === 6) {
                                        anrede.push(doc.content[i].content[j].value);
                                    }
                                    if (j === 7) {
                                        anreise.push(doc.content[i].content[j].value);
                                    }
                                    if (j === 8) {
                                        abreise.push(doc.content[i].content[j].value);
                                    }
                                    if (doc.content[i].content.length < 10) {
                                        console.log("doc.content[i].content.length < 10");
                                        console.log(doc.content[i].content.length);
                                        console.log("-");
                                        preis.push("-");
                                    }
                                    if (j === 9) {
                                        preis.push(doc.content[i].content[j].value);
                                    }
                                }
                            } else if (doc.content[i].content.length > 8 && doc.content[i].content[1].value.length === 1 && '0123456789'.indexOf(doc.content[i].content[1].value.charAt(0)) !== -1) {
                                if (j === 0) {
                                    kat.push(doc.content[i].content[j].value);
                                }
                                if (j === 1) {
                                    erwKi.push(doc.content[i].content[j].value);
                                    bemerkung.push("-");
                                    zimmerNummer.push("-");
                                }
                                if (j === 2 && doc.content[i].content[j + 2]) {
                                    name.push(doc.content[i].content[j].value + ", " + doc.content[i].content[j + 2].value);
                                }
                                if (j === 5) {
                                    anrede.push(doc.content[i].content[j].value);
                                }
                                if (j === 6) {
                                    anreise.push(doc.content[i].content[j].value);
                                }
                                if (j === 7) {
                                    abreise.push(doc.content[i].content[j].value);
                                }
                                if (doc.content[i].content.length < 9) {
                                    //console.log("doc.content[i].content.length < 9");
                                    //console.log(doc.content[i].content.length);
                                    preis.push("-");
                                    //console.log("-");
                                }
                                if (j === 8) {
                                    preis.push(doc.content[i].content[j].value);
                                }
                            } else if (doc.content[i].content.length < 8 && doc.content[i].content.length > 6 && doc.content[i].content[0].value.length === 1 && '0123456789'.indexOf(doc.content[i].content[0].value.charAt(0)) !== -1) {
                                if (j === 0) {
                                    erwKi.push(doc.content[i].content[j].value);
                                    bemerkung.push("-");
                                    zimmerNummer.push("-");
                                    kat.push("-");
                                }
                                if (doc.content[i].content[4].value.indexOf("2018") != -1) {
                                    if (j === 1 && doc.content[i].content[j + 1]) {
                                        name.push(doc.content[i].content[j].value + ", " + doc.content[i].content[j + 1].value);
                                    }
                                    if (j === 3) {
                                        anrede.push(doc.content[i].content[j].value);
                                    }
                                    if (j === 4) {
                                        anreise.push(doc.content[i].content[j].value);
                                    }
                                    if (j === 5) {
                                        abreise.push(doc.content[i].content[j].value);
                                    }
                                    if (j === 5 && doc.content[i].content.length < 7) {
                                        console.log("doc.content[i].content.length < 7");
                                        console.log(doc.content[i].content);
                                        console.log(doc.content[i].content.length);
                                        console.log("-");
                                        preis.push("-");
                                    }
                                    if (j === 6) {
                                        preis.push(doc.content[i].content[j].value);
                                    }
                                } else {
                                    if (j === 1 && doc.content[i].content[j + 2] && doc.content[i].content[j + 1]) {
                                        name.push(doc.content[i].content[j].value + ", " + doc.content[i].content[j + 1].value + ", " + doc.content[i].content[j + 2].value);
                                    }
                                    if (j === 4) {
                                        anrede.push(doc.content[i].content[j].value);
                                    }
                                    if (j === 5) {
                                        anreise.push(doc.content[i].content[j].value);
                                    }
                                    if (j === 6) {
                                        abreise.push(doc.content[i].content[j].value);
                                    }
                                    if (doc.content[i].content.length < 8) {
                                        console.log("doc.content[i].content.length < 10");
                                        console.log(doc.content[i].content.length);
                                        console.log("-");
                                        preis.push("-");
                                    }
                                    if (j === 7) {
                                        preis.push(doc.content[i].content[j].value);
                                    }
                                }
                            } else if (doc.content[i].content.length === 8) {
                                if (doc.content[i].content[1]) {
                                    if (doc.content[i].content[1].value.length === 1 && '0123456789'.indexOf(doc.content[i].content[1].value.charAt(0)) !== -1) {
                                        if (j === 0) {
                                            kat.push(doc.content[i].content[j].value);
                                            zimmerNummer.push("-");
                                        }
                                        if (j === 1) {
                                            erwKi.push(doc.content[i].content[j].value);
                                        }
                                        if (doc.content[i].content[5].value.indexOf("2018") != -1) {
                                            if (j === 2 && doc.content[i].content[j + 1]) {
                                                name.push(doc.content[i].content[j].value + ", " + doc.content[i].content[j + 1].value);
                                            }
                                            if (j === 4) {
                                                anrede.push(doc.content[i].content[j].value);
                                            }
                                            if (j === 5) {
                                                anreise.push(doc.content[i].content[j].value);
                                            }
                                            if (j === 6) {
                                                abreise.push(doc.content[i].content[j].value);
                                            }
                                            if (j === 6 && doc.content[i].content.length < 8) {
                                                console.log("doc.content[i].content.length < 7");
                                                console.log(doc.content[i].content);
                                                console.log(doc.content[i].content.length);
                                                console.log("-");
                                                preis.push("-");
                                            }
                                            if (j === 7) {
                                                preis.push(doc.content[i].content[j].value);
                                            }
                                        } else {
                                            if (j === 2 && doc.content[i].content[j + 2] && doc.content[i].content[j + 1]) {
                                                name.push(doc.content[i].content[j].value + ", " + doc.content[i].content[j + 1].value + ", " + doc.content[i].content[j + 2].value);
                                            }
                                            if (j === 5) {
                                                anrede.push(doc.content[i].content[j].value);
                                            }
                                            if (j === 6) {
                                                anreise.push(doc.content[i].content[j].value);
                                            }
                                            if (j === 7) {
                                                abreise.push(doc.content[i].content[j].value);
                                            }
                                            if (doc.content[i].content.length < 9) {
                                                console.log("doc.content[i].content.length < 10");
                                                console.log(doc.content[i].content.length);
                                                console.log("-");
                                                preis.push("-");
                                            }
                                            if (j === 8) {
                                                preis.push(doc.content[i].content[j].value);
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (doc.content[i + 1].content[j] && doc.content[i].content[j]) {
                                    if (doc.content[i + 1].content[j].value.charAt(doc.content[i + 1].content[j].value.length - 1) === "]") {
                                        //console.log(doc.content[i].content[j].value + doc.content[i+1].content[j].value);
                                        preis[preis.length - 1] += ", " + doc.content[i].content[j].value;
                                        //doc.content.splice(i + 1, 1);
                                    }
                                }
                                if (doc.content[i + 1].content[j] && doc.content[i].content[j] && doc.content[i + 1].content[j + 1]) {
                                    if (doc.content[i + 1].content[j].value.charAt(doc.content[i + 1].content[j].value.length - 1) === "]" || doc.content[i + 1].content[j + 1].value.charAt(doc.content[i + 1].content[j + 1].value.length - 1) === "]") {
                                        //console.log(doc.content[i].content[j].value + doc.content[i+1].content[j].value);
                                        preis[preis.length - 1] += ", " + doc.content[i].content[j].value;
                                        //doc.content.splice(i + 1, 1);
                                    }
                                }
                                if (doc.content[i].content[j] && !doc.content[i].content[j + 1]) {
                                    if (doc.content[i].content[j].value.charAt(doc.content[i].content[j].value.length - 1) === "]") {
                                        preis[preis.length - 1] += ", " + doc.content[i].content[j].value;
                                    }
                                }
                                if (doc.content[i].content[j + 1] && doc.content[i].content[j]) {
                                    if (doc.content[i].content[j + 1].value.charAt(doc.content[i].content[j + 1].value.length - 1) === "]") {
                                        preis[preis.length - 1] += ", " + doc.content[i].content[j].value + doc.content[i].content[j + 1].value;
                                        doc.content[i].content.splice(j + 1, 1);
                                        //j--;
                                    }
                                }
                                if (doc.content[i].content[j]) {
                                    if ('0123456789'.indexOf(doc.content[i].content[j].value.charAt(1)) !== -1 && doc.content[i].content[j].value.charAt(0) === "(") {
                                        continue;
                                    }
                                }

                                // if (doc.content[i+1].content[1]) {
                                //     if (doc.content[i +1].content[1].value.charAt(doc.content[i + 1].content[1].value.length - 1) === "]"){
                                //         continue;
                                //     }
                                // }
                                //console.log(doc.content[i].content[j]);

                                if (doc.content[i].content[j] && doc.content[i + 1].content[j] && doc.content[i].content.length < 8) {
                                    if (doc.content[i].content[j].value.charAt(doc.content[i].content[j].value.length - 1) !== "]"                          //If last letter is not "]"
                                        && doc.content[i + 1].content[0].value.charAt(doc.content[i + 1].content[0].value.length - 1) !== "]"
                                        && !doc.content[i + 1].content[1]                                                                                   //If last letter of next array value is not "]"
                                        && doc.content[i].content[j].value.indexOf("2018") === -1                                                           //If String does not contain "2018"
                                        && doc.content[i].content[j].value.indexOf("rtaxe") === -1) {                                                       //If second letter is not "0123456789"
                                        //Run this code
                                        //(Kein sofa im spa-bereich, sondern zwei Liegestühle)
                                        if (bemerkung[bemerkung.length - 1] === "-") {
                                            bemerkung[bemerkung.length - 1] = doc.content[i].content[j].value;
                                        } else {
                                            bemerkung[bemerkung.length - 1] += doc.content[i].content[j].value;
                                        }
                                    }
                                }

                                if (doc.content[i].content[j] && doc.content[i + 1].content[1] && doc.content[i].content.length < 8) {
                                    if (doc.content[i].content[j].value.charAt(doc.content[i].content[j].value.length - 1) !== "]"                          //If last letter is not "]"
                                        && doc.content[i + 1].content[0].value.charAt(doc.content[i + 1].content[0].value.length - 1) !== "]"
                                        && doc.content[i + 1].content[1].value.charAt(doc.content[i + 1].content[1].value.length - 1) !== "]"                                                                            //If last letter of next array value is not "]"
                                        && doc.content[i].content[j].value.indexOf("2018") === -1                                                           //If String does not contain "2018"
                                        && doc.content[i].content[j].value.indexOf("rtaxe") === -1) {                                                       //If second letter is not "0123456789"
                                        //Run this code
                                        //(Kein sofa im spa-bereich, sondern zwei Liegestühle)
                                        if (bemerkung[bemerkung.length - 1] === "-") {
                                            bemerkung[bemerkung.length - 1] = doc.content[i].content[j].value;
                                        } else {
                                            bemerkung[bemerkung.length - 1] += doc.content[i].content[j].value;
                                        }
                                    }
                                }

                                if (doc.content[i].content[j] && !doc.content[i + 1].content[j] && doc.content[i].content.length < 8) {
                                    if (doc.content[i].content[j].value.charAt(doc.content[i].content[j].value.length - 1) !== "]"
                                        && !doc.content[i + 1].content[j]
                                        && doc.content[i].content[j].value.indexOf("2018") === -1
                                        && doc.content[i].content[j].value.indexOf("rtaxe") === -1) {
                                        if (bemerkung[bemerkung.length - 1] === "-") {
                                            bemerkung[bemerkung.length - 1] = doc.content[i].content[j].value;
                                        } else {
                                            bemerkung[bemerkung.length - 1] += doc.content[i].content[j].value;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }).then(function () { // (**)
                    for (let i = 0; i < kat.length; i++) {
                        //console.log(i);
                        imHausListe.push({
                            "name": name[i].substring(0, name[i].length-1),
                            "zimmernummer": zimmerNummer[i],
                            "kat": kat[i],
                            "anrede": anrede[i],
                            "anreise": anreise[i],
                            "abreise": abreise[i],
                            "erwKi": erwKi[i],
                            "preis": preis[i],
                            "bemerkung": bemerkung[i],
                            "bgColor": 'ffffff'
                        });
                    }
                    //console.log(imHausListe);
                });
            };

            let myfunc = PTest();
            myfunc.then(function () {
                console.log("Promise Resolved");
                postImHausListeToDB(imHausListe);
            });
            // See the Difference here
            myfunc.catch(function (err) {
                console.log(err);
                console.log("Promise Rejected");
            });
        });

        const parser = parseRTF((err, doc) => {
        });

});
//data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {header:1});
//console.log(data);

/*
 if(req.files[0].filename.indexOf('xlsx') != -1 ){
 exceltojson = xlsxtojson;
 } else {
 exceltojson = xlstojson;
 }
 */
/*
 excel2Json("./uploads/" + uploadedFileName, function(err, output) {
 if (err) {
 console.log(err)
 } else {
 console.log('output');
 console.log(output);
 }
 });

 excel2Json("./uploads/" + uploadedFileName, {
 'convert_all_sheet': false,
 'return_type': 'Object',
 'sheetName': 'survey'
 }, function(err, output) {
 if (err) {
 console.log(err)
 } else {
 console.log('output');
 console.log(output);
 }
 });


 node_xj({
 input: String("./uploads/" + uploadedFileName),  // input xls
 output: "output.json", // output json
 sheet: "sheetname"  // specific sheetname
 }, function(err, result) {
 if(err) {
 console.error(err);
 } else {
 console.log(result);
 console.log();
 }
 });
 */



/*
 try {
 exceltojson({
 input: String("./uploads/" + uploadedFileName), //the same path where we uploaded our file
 output: null, //since we don't need output.json
 lowerCaseHeaders:true
 }, function(err,result){
 if(err) {
 return res.json({error_code:1,err_desc:err, data: null});
 }
 res.json({error_code:0,err_desc:null, data: result});
 imHausListe = JSON.stringify(result);
 console.log(result);

 postImHausListeToDB();
 //New User is saved in DB, function called in receivedAuthentication - send to index.js /guests REST-FUL API

 });
 } catch (e){
 res.json({error_code:1,err_desc:"Corupted excel file"});
 }
 */



function postAnreiseListeToDB() {
    // An object of options to indicate where to post to
    let post_options = {
        //Change URL to hotelmessengertagbag.herokuapp.com if deploying
        host: HOST_URL,
        port: '80',
        path: '/anreiseListe',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Set up the request
    let post_req = http.request(post_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + "chunk as string");
        });
    });

    // post the data
    post_req.write(liste);
    post_req.end();
}


function postImHausListeToDB() {
    // An object of options to indicate where to post to
    let post_options = {
        //Change URL to hotelmessengertagbag.herokuapp.com if deploying
        host: HOST_URL,
        port: '80',
        path: '/imHausListe',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Set up the request
    let post_req = http.request(post_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + "chunk as string");
        });
    });

    // post the data
    post_req.write(JSON.stringify(imHausListe));
    post_req.end();
}

/*
 var readStream = fs.createReadStream(String("./uploads/" + uploadedFileName), 'binary');

 readStream.on('data', function(chunk) {
 String(data += chunk);

 }).on('end', function() {
 console.log(typeof data);
 csv({noheader:true})
 .fromString(data)
 .on('csv',(csvRow)=>{ // this func will be called 3 times
 //console.log(csvRow);// => [1,2,3] , [4,5,6]  , [7,8,9]
 //json.push(csvRow);
 })
 .on('done', (error)=>{

 //csvDatei = JSON.stringify(json);
 //console.log('csvDatei: ');
 //console.log(csvDatei);
 if (csvDatei.indexOf("Im Haus") !== -1) {
 postImHausListeToDB();
 } else if (csvDatei.indexOf("Anreisen") !== -1) {
 postAnreiseListeToDB();
 } else if (csvDatei.indexOf("Trace Report") !== -1){
 postTracesListeToDB();
 }
 console.log('end')
 });


 //New User is saved in DB, function called in receivedAuthentication - send to index.js /guests REST-FUL API
 function postImHausListeToDB() {
 // An object of options to indicate where to post to
 let post_options = {
 //Change URL to hotelmessengertagbag.herokuapp.com if deploying
 host: HOST_URL,
 port: '80',
 path: '/imHausListe',
 method: 'POST',
 headers: {
 'Content-Type': 'application/json'
 }
 };

 // Set up the request
 let post_req = http.request(post_options, function (res) {
 res.setEncoding('utf8');
 res.on('data', function (chunk) {
 console.log('Response: ' + "chunk as string");
 });
 });

 // post the data
 post_req.write(csvDatei);
 post_req.end();
 }
 function postAnreiseListeToDB() {
 // An object of options to indicate where to post to
 let post_options = {
 //Change URL to hotelmessengertagbag.herokuapp.com if deploying
 host: HOST_URL,
 port: '80',
 path: '/anreiseListe',
 method: 'POST',
 headers: {
 'Content-Type': 'application/json'
 }
 };
 // Set up the request
 let post_req = http.request(post_options, function (res) {
 res.setEncoding('utf8');
 res.on('data', function (chunk) {
 console.log('Response: ' + "chunk as string");
 });
 });
 // post the data
 post_req.write(csvDatei);
 post_req.end();
 }
 function postTracesListeToDB () {
 // An object of options to indicate where to post to
 let post_options = {
 //Change URL to hotelmessengertagbag.herokuapp.com if deploying
 host: HOST_URL,
 port: '80',
 path: '/tracesListe',
 method: 'POST',
 headers: {
 'Content-Type': 'application/json'
 }
 };
 // Set up the request
 let post_req = http.request(post_options, function (res) {
 res.setEncoding('utf8');
 res.on('data', function (chunk) {
 console.log('Response: ' + "chunk as string");
 });
 });
 // post the data
 post_req.write(csvDatei);
 post_req.end();
 }
 });
 */



/*
 * Start server
 * Webhooks must be available via SSL with a certificate signed by a valid
 * certificate authority.
 */

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

module.exports = app;