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
  @Input('tablesSteakRestaurant') tablesSteakRestaurant: Table[];
  @Input('showTablesSteakRestaurant') showTablesSteakRestaurant: boolean;
  @Input('showTablesAlle') showTablesAlle: boolean;
  @Input('showTablePlanBool') showTablePlanBool: boolean;
  @Output()
  movedPanoramaRestaurant2:EventEmitter<any> = new EventEmitter();
  @Output()
  movedFeuerstein:EventEmitter<any> = new EventEmitter();
  @Output()
  movedSteakRestaurant:EventEmitter<any> = new EventEmitter();
  @Output()
  movedPanoramaRestaurant1:EventEmitter<any> = new EventEmitter();
  @Output()
  changeBgColorIfAnreise:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKiSteakRestaurant:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwSteakRestaurant:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKiPanoramaRestaurant2:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwPanoramaRestaurant2:EventEmitter<any> = new EventEmitter();
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
  trace: boolean;
  erwFeuerstein: any[] = [];
  kiFeuerstein: any[] = [];
  erwPanoramaRestaurant1: any[] = [];
  kiPanoramaRestaurant1: any[] = [];
  erwSteakRestaurant: any[] = [];
  kiSteakRestaurant: any[] = [];
  erwPanoramaRestaurant2: any[] = [];
  kiPanoramaRestaurant2: any[] = [];

  constructor(private tischplanService: TischplanService) {
    this.buttonMoveTable = "ff0000";
    this.buttonInfo = "ffffff";
    this.buttonHinzufuegen = "ffffff";
    this.buttonEntfernen = "ffffff";
    this.trace = false;
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
      } else if (response[0].department === "steakRestaurant") {
        this.movedSteakRestaurant.emit(response[0].tables);
      } else if (response[0].department === "panoramaRestaurant1") {
        this.movedPanoramaRestaurant1.emit(response[0].tables);
      }
      this.changeBgColorIfAnreise.emit();
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
        } else if (response[0].department === "steakRestaurant") {
          this.movedSteakRestaurant.emit(response[0].tables);
        } else if (response[0].department === "panoramaRestaurant1") {
          this.movedPanoramaRestaurant1.emit(response[0].tables);
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
          if (a[b].traceValue != "-" || a[b].newTraceText) {
            this.trace = true;
          }
        }
      }
      if (this.trace) {
        this.trace = false;
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
    if (this.tablesSteakRestaurant) {
      for (let p = 0; p < this.tablesSteakRestaurant.length; p++) {
        this.erwSteakRestaurant[p] = 0;
        this.kiSteakRestaurant[p] = 0;
        if (this.tablesSteakRestaurant[p].groups) {
          for (let g = 0; g < this.tablesSteakRestaurant[p].groups.length; g++) {
            if (this.tablesSteakRestaurant[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesSteakRestaurant[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwSteakRestaurant[p] = this.erwSteakRestaurant[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiSteakRestaurant[p] = this.kiSteakRestaurant[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    this.exportKiSteakRestaurant.emit(this.kiSteakRestaurant);
    this.exportErwSteakRestaurant.emit(this.erwSteakRestaurant);
    this.exportKiPanoramaRestaurant2.emit(this.kiPanoramaRestaurant2);
    this.exportErwPanoramaRestaurant2.emit(this.erwPanoramaRestaurant2);
    this.exportKiPanoramaRestaurant1.emit(this.kiPanoramaRestaurant1);
    this.exportErwPanoramaRestaurant1.emit(this.erwPanoramaRestaurant1);
    this.exportKiFeuerstein.emit(this.kiFeuerstein);
    this.exportErwFeuerstein.emit(this.erwFeuerstein);
  }
}
