import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TischplanService } from '../../../services/tischplan.service';
import { Http } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit {
  filesToUpload: Array<File> = [];
  @Input('tablesTempAbreise') tablesTempAbreise: any[] = [];
  @Input('newInformationElements') newInformationElements: any[] = [];
  @Input('tablesOccupied') tablesOccupied: number;
  @Output()
  umsetzenExport:EventEmitter<any> = new EventEmitter();
  @Output()
  abreisenExportExport:EventEmitter<any> = new EventEmitter();
  term: string;
  @Output()
  termExport:EventEmitter<any> = new EventEmitter();
  dateTodayGenerated: any;
  date: any[] = [];
  parts: any[] = [];
  parsedDate: any[] = [];
  quellTisch: any;
  zielTisch: any;
  tableInformation: any[] = [];
  @Output()
  reloadLists:EventEmitter<any> = new EventEmitter();
  @Output()
  transformExport: EventEmitter<any> = new EventEmitter();
  printToCart1Button: string;
  printToCart2Button: string;
  printToCart3Button: string;
  abreiseAbbrechenButton: string;
  abreiseAusfuehrenButton: string;
  abreiseAusfuehrenMorgenButton: string;

  constructor(private tischplanService: TischplanService, private http: Http, private _flashMessagesService: FlashMessagesService, public authService: AuthService, private router: Router) {

    this.printToCart1Button = "ffffff";
    this.printToCart2Button = "ffffff";
    this.printToCart3Button = "ffffff";
    this.abreiseAbbrechenButton = "ffffff";
    this.abreiseAusfuehrenButton = "ff0000";
    this.abreiseAusfuehrenMorgenButton = "ff0000";
  }

  ngOnInit() {
  }

  delete(informationElement, j, event) {
    console.log(informationElement);
    console.log(j);
    event.stopPropagation();
    this.tischplanService.deleteInformationElement(informationElement)
      .subscribe(informationElement => {
        this.newInformationElements.splice(j, 1);
      });
  }

  none(event) {
    event.stopPropagation();
  }

  printToCart1(printSectionId1: string) {
    let popupWinindow;
    let innerContents = document.getElementById(printSectionId1).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n' +
      '<script src="node_modules/core-js/client/shim.min.js"></script>\n' +
      '<script src="<your-libs-directory>/object-assign.min.js"></script></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }

  printToCart2(printSectionId2: string){
    let popupWinindow;
    let innerContents = document.getElementById(printSectionId2).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><style>  .row .t7 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t8 { width: 100px; height: 90px; border: solid 1px #0a7a74; position: absolute; } .row .t9 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t10 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t11 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t12 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t13 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t14 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t15 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t16 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t17 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t18 { position: absolute; } .row .t19 { position: absolute; }.row .t20 { position: absolute; } .row .t21 { position: absolute; }  .row .t22 { position: absolute; } .row .t23 { position: absolute; } .row .t24 { position: absolute; } .row .t40 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t41 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t42 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t43 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t44 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t45 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t46 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t47 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t48 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t49 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t50 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t51 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t52 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t53 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t54 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t55 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t56 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t57 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t58 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t59 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t60 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t61 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t62 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t63 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t64 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t65 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t66 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t67 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t68 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t69 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t70 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t71 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t72 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t73 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t74 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t75 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t76 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t77 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t78 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t79 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t80 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t81 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t82 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t83 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t84 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t85 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t86 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t87 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t88 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t89 { position: absolute;  }  .row .t501 { position: absolute;  }  .row .t502 { position: absolute;  }  .row .t503 { position: absolute;  }  .row .t504 { position: absolute;  }  .row .t505 { position: absolute;  }  .row .t506 { position: absolute;  } .row .t507 { position: absolute;  } .row .t508 { position: absolute;  }   .row .t524 { position: absolute;  } .row .t525 { position: absolute;  } .row .t25 { position: absolute; } .row .t26 { position: absolute; } .row .t30 { position: absolute; } .row  [class~="t30.1"] { position: absolute; } [class~="t30.2"] { position: absolute; } .row  [class~="t30.3"]{ position: absolute; } .row  [class~="t30.4"] { position: absolute; }.t31 { position: absolute; } .t32 { position: absolute; } .t33 { position: absolute; } .t34 { position: absolute; } .t35 { position: absolute; } .t36 { position: absolute; } .t37 { position: absolute; } .t38 { position: absolute; }  .t90 { position: absolute; } .t91 { position: absolute; } .t92 { position: absolute; } .t93 { position: absolute; } .t94 { position: absolute; } .t95 { position: absolute; } .t96 { position: absolute; } .t97 { position: absolute; } .t98 { position: absolute; } .t99 { position: absolute; } .t1 { position: absolute; } .t2 { position: absolute; } .t3 { position: absolute; } .t4 { position: absolute; } .t5 { position: absolute; } .t6 { position: absolute; } .t7 { position: absolute; } [class~="t7.1"] { position: absolute; } [class~="t13.1"]  { position: absolute; transform: rotate(40deg);} .t701 { position: absolute; } .t702 { position: absolute; } .t703 { position: absolute; } .t704 { position: absolute; } .t705 { position: absolute; } .t706 { position: absolute; } .t707 { position: absolute; } .t708 { position: absolute; } .t709 { position: absolute; } .t710 { position: absolute; } .t711 { position: absolute; } .t712 { position: absolute; } .t713 { position: absolute; } .t714 { position: absolute; } .t201 { position: absolute;  transform: rotate(-10deg);} .t202 { position: absolute;  transform: rotate(-10deg);} .t203 { position: absolute;  transform: rotate(-10deg);} .t204 { position: absolute; } .t205 { position: absolute; } .t206 { position: absolute; } .t207 { position: absolute; } .t208 { position: absolute; } .t209 { position: absolute; } .t210 { position: absolute;  transform: rotate(-10deg);} .t211 { position: absolute; transform: rotate(-10deg); } .t212 { position: absolute;  transform: rotate(-10deg);} .t300 { position: absolute;  transform: rotate(-10deg);} .t301 { position: absolute; } .t302 { position: absolute; } .t303 { position: absolute; } .t304 { position: absolute; } .t305 { position: absolute; } .t306 { position: absolute; } .t307 { position: absolute; } .t308 { position: absolute; } .t309 { position: absolute; } .t310 { position: absolute; } .t311 { position: absolute; } .t312 { position: absolute; } .t313 { position: absolute; } .t314 { position: absolute; } .t315 { position: absolute; } .t316 { position: absolute; } .t317 { position: absolute; } .t318 { position: absolute; } .t319 { position: absolute; } .t101 { position: absolute; } .t102 { position: absolute; } [class~="t102.1"]  { position: absolute; } .t103 { position: absolute; } .t410 { position: absolute; }  .t104 { position: absolute; } .t401 { position: absolute; } .t402 { position: absolute; } .t403 { position: absolute; } .t404 { position: absolute; } .t405 { position: absolute; } .t406 { position: absolute; } .t407 { position: absolute; } .t408 { position: absolute; } .t409 { position: absolute; } .t715 { position: absolute; } [class~="t410.1"]  { position: absolute; } [class~="t403.1"]  { position: absolute; }  [class~="t406.1"]  { position: absolute; } [class~="t506.1"]  { position: absolute; } [class~="t503.1"]  { position: absolute; } </style></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }

  printToCart3(printSectionId3: string){
    let popupWinindow;
    let innerContents = document.getElementById(printSectionId3).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><style></style></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }

  neuLaden() {
    window.location.reload()
  }

  umsetzen() {
      event.preventDefault();
      console.log("UMSETZTEN CALLED");
      let quellTisch = this.quellTisch.charAt(0).toUpperCase() + this.quellTisch.slice(1);
      let zielTisch = this.zielTisch.charAt(0).toUpperCase() + this.zielTisch.slice(1);
      this.tableInformation = [];
      //this.umsetzenExport.emit({quellTisch, zielTisch});

    // let targetTable = this.quellTisch.zielTisch;
    // let quellTischNumber = this.quellTisch.quellTisch;
    // let targetTableNumber = Number(this.quellTisch.zielTisch);
    // let quellTischNumberNumber = Number(this.quellTisch.quellTisch);
    console.log('targetTable' + zielTisch);
    console.log('quellTischNumber' + quellTisch);
    let tableToMove = {department: "Empty", number: "0", targetTable: "0", targetDepartment: "Empty"};
    let indexZiel = 0;
    let indexQuell = 0;

    if (Number(quellTisch) >= 201 && Number(quellTisch) <= 319) {
      tableToMove.department = "panoramaRestaurant2";
      indexQuell = 1;
    } else if (Number(quellTisch) >= 1 && Number(quellTisch) <= 21) {
      tableToMove.department = "feuerstein";
      indexQuell = 2;
    } else if ((Number(quellTisch) >= 101 && Number(quellTisch) <= 104) || (Number(quellTisch) >= 401 && Number(quellTisch) <= 508)) {
      tableToMove.department = "panoramaRestaurant1";
      indexQuell = 3;
    } else if (Number(quellTisch) >= 701 && Number(quellTisch) <= 715) {
      tableToMove.department = "steakRestaurant";
      indexQuell = 4;
    }

    if (Number(zielTisch) >= 201 && Number(zielTisch) <= 319) {
      tableToMove.targetDepartment = "panoramaRestaurant2";
      indexZiel = 1;
    } else if (Number(zielTisch) >= 1 && Number(zielTisch) <= 21) {
      tableToMove.targetDepartment = "feuerstein";
      indexZiel = 2;
    } else if ((Number(zielTisch) >= 101 && Number(zielTisch) <= 104) || (Number(zielTisch) >= 401 && Number(zielTisch) <= 508)) {
      tableToMove.targetDepartment = "panoramaRestaurant1";
      indexZiel = 3;
    } else if (Number(zielTisch) >= 701 && Number(zielTisch) <= 715) {
      tableToMove.targetDepartment = "steakRestaurant";
      indexZiel = 4;
    }


    tableToMove.number = quellTisch;
    tableToMove.targetTable = zielTisch;
    console.log(tableToMove);
    this.tischplanService.getTables()
      .subscribe(tables => {

        for (let a = 0; a < tables.length; a++) {
          for (let b = 0; b < tables[a].tables.length; b++) {
            if (tables[a].department === tableToMove.department) {
              console.log("YEEEES BEFORE");
              if (tables[a].tables[b].number === tableToMove.number) {
                console.log("YEEEEEEEESSSSS AFFFTEEEER!!!");
                console.log(tables[a].tables[b]);
                this.tableInformation.push(tables[a].tables[b]);
                console.log(this.tableInformation);
                this.tableInformation.push(tableToMove);
                console.log(this.tableInformation);
              }
            }
          }
        }

        console.log("this.tableInformation IIIIIIIII");
        let tableInformationExport = this.tableInformation;
        this.umsetzenExport.emit({tableToMove, indexZiel, indexQuell, tableInformationExport});
      });
  };

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      //alert('you just clicked enter');
      this.termExport.emit(this.term);
    }
  }

  brandClick() {
    window.location.reload()
  }


  onKey(event: any) { // without type in
    this.term = event.target.value;
    console.log(this.term);
    this.termExport.emit(this.term);
    this.transformExport.emit(this.term);
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append('uploads[]', files[0], files[0]['name']);

    this.http.post('/upload', formData)
      .map(files => files.json()).map(res => {
      // 1st parameter is a flash message text
      // 2nd parameter is optional. You can pass object with options.
      if (res[0].originalname) {
        this._flashMessagesService.show('Erfolgreich ' + JSON.stringify(res[0].originalname) + " hochgeladen", {
          cssClass: 'alert-success',
          timeout: 10000
        })} else {
        this._flashMessagesService.show(JSON.stringify(res), {
          cssClass: 'alert-danger',
          timeout: 10000
        })
      }})
      .subscribe(files => console.log("files", files));
    setTimeout(() => {
      this.reloadLists.emit();
    }, 3000);
  }

  dispenseIfAbreiseHeute() {
      this.dateTodayGenerated = new Date(); //Today
      this.dispenseIfAbreise();
    }

  dispenseIfAbreiseMorgen() {
    console.log("dispenseIfAbreiseMorgen");
    this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); //Tomorrow
    this.dispenseIfAbreise();
    console.log(this.dateTodayGenerated);
  }

    dispenseIfAbreise() {
    let tables = this.tablesTempAbreise;
    let abreisenExport = [];
    let a = 0;
    console.log('=================================================dispenseIfAbreise');
    for (let a = 0; a < tables.length; a++) {
      for (let b = 0; b < tables[a].tables.length; b++) {
        if (tables[a].tables[b].groups) {
          let abreisenExportObject = {
            table: tables[a].tables[b],
            group: [],
            date: String(this.dateTodayGenerated).substring(0, 15)
          };
          for (let c = 0; c < tables[a].tables[b].groups.length; c++) {
            if (tables[a].tables[b].groups[c].abreiseValue) {
              this.parts[0] = tables[a].tables[b].groups[c].abreiseValue.match(/(\d+)/g);
            } else {
              this.parts[0] = "undefined";
            }
            if (this.parts[0]) {
              this.date[0] = new Date(2018, this.parts[0][1] - 1, this.parts[0][0]);
              this.parsedDate[0] = String(this.date[0]).substring(0, 15);
            }
            let dateToday = String(this.dateTodayGenerated).substring(0, 15);
            if (dateToday.indexOf(this.parsedDate[0]) !== -1 || tables[a].tables[b].groups[c].newTraceText) {
              abreisenExportObject.group.push(c);
            }
            if(c === (tables[a].tables[b].groups.length -1) && (typeof abreisenExportObject.group !== 'undefined' && abreisenExportObject.group.length > 0)) {
              console.log("abreisenExport.push(abreisenExportObject)");
              abreisenExport.push(abreisenExportObject);
            }
          }
        }
      }
    }
    console.log(abreisenExport);
    setTimeout(() => {
      this.abreisenExportExport.emit({abreisenExport, a});
    }, 100);
  }

  onLogoutClick() {
    this.authService.logout();
    //this._flashMessagesService.show('You are logged out', {
    //  cssClass: 'alert-success',
    //  timeout: 3000
    //});
    this.router.navigate(['/login']);
    return false;
  }

  mouseEnterprintToCart1Button() {
    //console.log("mouse enter : ");
    if (this.printToCart1Button === "ffffff") {
      //console.log('mouse enter1 :');
      this.printToCart1Button = "cfcfcf";
    }
  }

  mouseLeaveprintToCart1Button() {
    if (this.printToCart1Button === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.printToCart1Button = "ffffff";
    }
  }

  mouseEnterprintToCart2Button() {
    //console.log("mouse enter : ");
    if (this.printToCart2Button === "ffffff") {
      //console.log('mouse enter1 :');
      this.printToCart2Button = "cfcfcf";
    }
  }

  mouseLeaveprintToCart2Button() {
    if (this.printToCart2Button === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.printToCart2Button = "ffffff";
    }
  }

  mouseEnterprintToCart3Button() {
    //console.log("mouse enter : ");
    if (this.printToCart3Button === "ffffff") {
      //console.log('mouse enter1 :');
      this.printToCart3Button = "cfcfcf";
    }
  }

  mouseLeaveprintToCart3Button() {
    if (this.printToCart3Button === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.printToCart3Button = "ffffff";
    }
  }

  mouseEnterAbreiseAusfuehrenButton() {
    //console.log("mouse enter : ");
    if (this.abreiseAusfuehrenButton === "ff0000") {
      //console.log('mouse enter1 :');
      this.abreiseAusfuehrenButton = "a00000";
    }
  }

  mouseLeaveAbreiseAusfuehrenButton() {
    if (this.abreiseAusfuehrenButton === "a00000") {
      //console.log('mouse leave1 :');
      this.abreiseAusfuehrenButton = "ff0000";
    }
  }

  mouseEnterAbreiseMorgenAusfuehrenButton() {
    //console.log("mouse enter : ");
    if (this.abreiseAusfuehrenMorgenButton === "ff0000") {
      //console.log('mouse enter1 :');
      this.abreiseAusfuehrenMorgenButton = "a00000";
    }
  }

  mouseLeaveAbreiseMorgenAusfuehrenButton() {
    if (this.abreiseAusfuehrenMorgenButton === "a00000") {
      //console.log('mouse leave1 :');
      this.abreiseAusfuehrenMorgenButton = "ff0000";
    }
  }

  mouseEnterAbreiseAbbrechenButton() {
    //console.log("mouse enter : ");
    if (this.abreiseAbbrechenButton === "ffffff") {
      //console.log('mouse enter1 :');
      this.abreiseAbbrechenButton = "cfcfcf";
    }
  }

  mouseLeaveAbreiseAbbrechenButton() {
    if (this.abreiseAbbrechenButton === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.abreiseAbbrechenButton = "ffffff";
    }
  }
}
