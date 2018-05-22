import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { Table } from '../../../../../Table';
import { TischplanService } from '../../../services/tischplan.service';

@Component({
  selector: 'app-tableplan',
  templateUrl: 'tableplan.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class TableplanComponent implements AfterViewChecked {

  @Input('tables') tables: Table[];
  @Input('dateGeneratedListe') dateGeneratedListe: string;
  @Input('tablesFeuerstein') tablesFeuerstein: Table[];
  @Input('showTablesFeuerstein') showTablesFeuerstein: boolean;
  @Input('tablesPanoramaRestaurant1') tablesPanoramaRestaurant1: Table[];
  @Input('showTablesPanoramaRestaurant1') showTablesPanoramaRestaurant1: boolean;
  @Input('tablesPanoramaRestaurant2') tablesPanoramaRestaurant2: Table[];
  @Input('showTablesPanoramaRestaurant2') showTablesPanoramaRestaurant2: boolean;
  @Input('tablesPanoramaRestaurant3') tablesPanoramaRestaurant3: Table[];
  @Input('showTablesPanoramaRestaurant3') showTablesPanoramaRestaurant3: boolean;
  @Input('tablesIselerRestaurant') tablesIselerRestaurant: Table[];
  @Input('showTablesIselerRestaurant') showTablesIselerRestaurant: boolean;
  @Input('showTablesAlle') showTablesAlle: boolean;
  @Input('showTablePlanBool') showTablePlanBool: boolean;
  @Output()
  movedPanoramaRestaurant2:EventEmitter<any> = new EventEmitter();
  @Output()
  movedPanoramaRestaurant3:EventEmitter<any> = new EventEmitter();
  @Output()
  movedFeuerstein:EventEmitter<any> = new EventEmitter();
  @Output()
  movedIselerRestaurant:EventEmitter<any> = new EventEmitter();
  @Output()
  movedPanoramaRestaurant1:EventEmitter<any> = new EventEmitter();
  @Output()
  changeBgColorIfAnreise:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKiIselerRestaurant:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwIselerRestaurant:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKiPanoramaRestaurant2:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwPanoramaRestaurant2:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKiPanoramaRestaurant3:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwPanoramaRestaurant3:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKiPanoramaRestaurant1:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwPanoramaRestaurant1:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKiFeuerstein:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwFeuerstein:EventEmitter<any> = new EventEmitter();

  buttonMoveTable: string;
  buttonInfo: string;
  buttonHinzufuegen: string;
  buttonEntfernen: string;
  bemerkung: boolean;
  erwFeuerstein: any[] = [];
  kiFeuerstein: any[] = [];
  erwPanoramaRestaurant1: any[] = [];
  kiPanoramaRestaurant1: any[] = [];
  erwIselerRestaurant: any[] = [];
  kiIselerRestaurant: any[] = [];
  erwPanoramaRestaurant2: any[] = [];
  kiPanoramaRestaurant2: any[] = [];
  erwPanoramaRestaurant3: any[] = [];
  kiPanoramaRestaurant3: any[] = [];

  constructor(private tischplanService: TischplanService) {
    this.buttonMoveTable = "ff0000";
    this.buttonInfo = "ffffff";
    this.buttonHinzufuegen = "ffffff";
    this.buttonEntfernen = "ffffff";
    this.bemerkung = false;
  }

  ngAfterViewChecked() {
  }

  addTable(table, j) {

    console.log("moveTable clicked");
    console.log('table : ' + table.number + ' j ' + j);
    this.tischplanService.addTable(table).subscribe(response => {
      console.log('Response:' + JSON.stringify(response));
      //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
      //console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
      //console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));

      if (response[0].department === "panoramaRestaurant2") {
        this.movedPanoramaRestaurant2.emit(response[0].tables);
      } else if (response[0].department === "feuerstein") {
        this.movedFeuerstein.emit(response[0].tables);
      } else if (response[0].department === "iselerRestaurant") {
        this.movedIselerRestaurant.emit(response[0].tables);
      } else if (response[0].department === "panoramaRestaurant1") {
        this.movedPanoramaRestaurant1.emit(response[0].tables);
      } else if (response[0].department === "panoramaRestaurant3") {
        this.movedPanoramaRestaurant3.emit(response[0].tables);
      }      this.changeBgColorIfAnreise.emit();
    });
  }
    removeTable(table, j) {

      console.log("moveTable clicked");
      console.log('table :' + table.number + 'j' + j);
      this.tischplanService.removeTable(table).subscribe(response => {
        console.log('Response:' + JSON.stringify(response));
        //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
        console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
        console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
        if (response[0].department === "panoramaRestaurant2") {
          this.movedPanoramaRestaurant2.emit(response[0].tables);
        } else if (response[0].department === "feuerstein") {
          this.movedFeuerstein.emit(response[0].tables);
        } else if (response[0].department === "iselerRestaurant") {
          this.movedIselerRestaurant.emit(response[0].tables);
        } else if (response[0].department === "panoramaRestaurant1") {
          this.movedPanoramaRestaurant1.emit(response[0].tables);
        } else if (response[0].department === "panoramaRestaurant3") {
          this.movedPanoramaRestaurant3.emit(response[0].tables);
        }
        this.changeBgColorIfAnreise.emit();
      });
    }

  getStyle(a) {
    //console.log("a");
    //console.log(a);
    if (typeof a == null || typeof a === "undefined") {
      return "solid 3px rgb(243, 239, 228)";
    } else {
      for (let b = 0; b < a.length; b++) {
        //console.log("LOOOOOOOOOOOOOOP");
        //console.log(a[b].traceValue);
        if (typeof a[b] != null) {
          if (a[b].bemerkungValue != "-") {
            this.bemerkung = true;
          }
        }
      }
      if (this.bemerkung) {
        this.bemerkung = false;
        return "solid 3px red";
      } else {
        return "solid 3px rgb(243, 239, 228)";
      }
    }
  }

  none(event) {
    event.stopPropagation();
  }

  mouseEnterMoveTableButton() {
    console.log("mouse enter : ");
    if (this.buttonMoveTable === "ff0000") {
      console.log('mouse enter1 :');
      this.buttonMoveTable = "bc0000";
    }
  }

  mouseLeaveMoveTableButton() {
    if (this.buttonMoveTable === "bc0000") {
      console.log('mouse leave1 :');
      this.buttonMoveTable = "ff0000";
    }
  }

  mouseEnterInfoButton() {
    console.log("mouse enter : ");
    if (this.buttonInfo === "ffffff") {
      console.log('mouse enter1 :');
      this.buttonInfo = "cfcfcf";
    }
  }

  mouseLeaveInfoButton() {
    if (this.buttonInfo === "cfcfcf") {
      console.log('mouse leave1 :');
      this.buttonInfo = "ffffff";
    }
  }

  mouseEnterHinzufuegenButton() {
    console.log("mouse enter : ");
    if (this.buttonHinzufuegen === "ffffff") {
      console.log('mouse enter1 :');
      this.buttonHinzufuegen = "cfcfcf";
    }
  }

  mouseLeaveHinzufuegenButton() {
    if (this.buttonHinzufuegen === "cfcfcf") {
      console.log('mouse leave1 :');
      this.buttonHinzufuegen = "ffffff";
    }
  }

  mouseEnterEntfernenButton() {
    console.log("mouse enter : ");
    if (this.buttonEntfernen === "ffffff") {
      console.log('mouse enter1 :');
      this.buttonEntfernen = "cfcfcf";
    }
  }

  mouseLeaveEntfernenButton() {
    if (this.buttonEntfernen === "cfcfcf") {
      console.log('mouse leave1 :');
      this.buttonEntfernen = "ffffff";
    }
  }

  getStyleTrace(j) {
    if (j != "-") {
      return "solid 3px red";
    } else {
      return "";
    }
  }

  sumUpPersonenAnzahl(){
    console.log("sumUpPersonenAnzahl called");
    if (this.tablesPanoramaRestaurant1) {
      for (let p = 0; p < this.tablesPanoramaRestaurant1.length; p++) {
        this.erwPanoramaRestaurant1[p] = 0;
        this.kiPanoramaRestaurant1[p] = 0;
        if (this.tablesPanoramaRestaurant1[p].groups) {
          for (let g = 0; g < this.tablesPanoramaRestaurant1[p].groups.length; g++) {
            if (this.tablesPanoramaRestaurant1[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesPanoramaRestaurant1[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwPanoramaRestaurant1[p] = this.erwPanoramaRestaurant1[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiPanoramaRestaurant1[p] = this.kiPanoramaRestaurant1[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesFeuerstein) {
      for (let p = 0; p < this.tablesFeuerstein.length; p++) {
        this.erwFeuerstein[p] = 0;
        this.kiFeuerstein[p] = 0;
        if (this.tablesFeuerstein[p].groups) {
          for (let g = 0; g < this.tablesFeuerstein[p].groups.length; g++) {
            if (this.tablesFeuerstein[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesFeuerstein[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwFeuerstein[p] = this.erwFeuerstein[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiFeuerstein[p] = this.kiFeuerstein[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesPanoramaRestaurant2) {
      for (let p = 0; p < this.tablesPanoramaRestaurant2.length; p++) {
        this.erwPanoramaRestaurant2[p] = 0;
        this.kiPanoramaRestaurant2[p] = 0;
        if (this.tablesPanoramaRestaurant2[p].groups) {
          for (let g = 0; g < this.tablesPanoramaRestaurant2[p].groups.length; g++) {
            if (this.tablesPanoramaRestaurant2[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesPanoramaRestaurant2[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwPanoramaRestaurant2[p] = this.erwPanoramaRestaurant2[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiPanoramaRestaurant2[p] = this.kiPanoramaRestaurant2[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesPanoramaRestaurant3) {
      for (let p = 0; p < this.tablesPanoramaRestaurant3.length; p++) {
        this.erwPanoramaRestaurant3[p] = 0;
        this.kiPanoramaRestaurant3[p] = 0;
        if (this.tablesPanoramaRestaurant3[p].groups) {
          for (let g = 0; g < this.tablesPanoramaRestaurant3[p].groups.length; g++) {
            if (this.tablesPanoramaRestaurant3[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesPanoramaRestaurant3[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwPanoramaRestaurant3[p] = this.erwPanoramaRestaurant3[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiPanoramaRestaurant3[p] = this.kiPanoramaRestaurant3[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesIselerRestaurant) {
      for (let p = 0; p < this.tablesIselerRestaurant.length; p++) {
        this.erwIselerRestaurant[p] = 0;
        this.kiIselerRestaurant[p] = 0;
        if (this.tablesIselerRestaurant[p].groups) {
          for (let g = 0; g < this.tablesIselerRestaurant[p].groups.length; g++) {
            if (this.tablesIselerRestaurant[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesIselerRestaurant[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwIselerRestaurant[p] = this.erwIselerRestaurant[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiIselerRestaurant[p] = this.kiIselerRestaurant[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    this.exportKiIselerRestaurant.emit(this.kiIselerRestaurant);
    this.exportErwIselerRestaurant.emit(this.erwIselerRestaurant);
    this.exportKiPanoramaRestaurant2.emit(this.kiPanoramaRestaurant2);
    this.exportErwPanoramaRestaurant2.emit(this.erwPanoramaRestaurant2);
    this.exportKiPanoramaRestaurant3.emit(this.kiPanoramaRestaurant3);
    this.exportErwPanoramaRestaurant3.emit(this.erwPanoramaRestaurant3);
    this.exportKiPanoramaRestaurant1.emit(this.kiPanoramaRestaurant1);
    this.exportErwPanoramaRestaurant1.emit(this.erwPanoramaRestaurant1);
    this.exportKiFeuerstein.emit(this.kiFeuerstein);
    this.exportErwFeuerstein.emit(this.erwFeuerstein);
  }
}
