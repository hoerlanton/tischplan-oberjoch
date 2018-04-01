import { Component, OnInit, Input, ViewChild, Output, EventEmitter, Injectable, AfterViewChecked } from '@angular/core';
import { Table } from '../../../../../Table';
import { TischplanService } from '../../../services/tischplan.service';
import {PanoramaRestaurant1Component} from "./panoramaRestaurant1/panoramaRestaurant1.component";
import {PanoramaRestaurant2Component} from "./panoramaRestaurant2/panoramaRestaurant2.component";
import {SteakRestaurantComponent} from "./steakRestaurant/steakRestaurant.component";
import {FeuersteinComponent} from "./feuerstein/feuerstein.component";
import {AlleComponent} from "./alle/alle.component";

@Component({
  selector: 'app-departments',
  templateUrl: 'departments.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class DepartmentsComponent  {
  @Input('tablesFeuerstein') tablesFeuerstein: Table[];
  @Input('showTablesFeuerstein') showTablesFeuerstein: boolean;
  @Input('tablesPanoramaRestaurant2') tablesPanoramaRestaurant2: Table[];
  @Input('showTablesPanoramaRestaurant2') showTablesPanoramaRestaurant2: boolean;
  @Input('tablesSteakRestaurant') tablesSteakRestaurant: Table[];
  @Input('showTablesSteakRestaurant') showTablesSteakRestaurant: boolean;
  @Input('tablesPanoramaRestaurant1') tablesPanoramaRestaurant1: Table[];
  @Input('showTablesPanoramaRestaurant1') showTablesPanoramaRestaurant1: boolean;
  @Input('tables') tables: any;
  @Input('term') term: string;
  @Input('showTablesAlle') showTablesAlle: boolean;
  @Input('tablesTempAbreise') tablesTempAbreise: any;
  @Output()
  dispensedFeuerstein:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedSteakRestaurant:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedPanoramaRestaurant2:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedPanoramaRestaurant1:EventEmitter<any> = new EventEmitter();
  @Output()
  updateAzList:EventEmitter<any> = new EventEmitter();
  @Output()
  updateImHausListeElement:EventEmitter<any> = new EventEmitter();

  dateTodayGenerated: any;
  parts: any[] = [];
  date: any[] = [];
  parsedDate: any[] = [];
  tablesChangeBgColorIfAnreise: any;


  @ViewChild(AlleComponent)
  private alleComponent: AlleComponent;

  @ViewChild(PanoramaRestaurant1Component)
  private panoramaRestaurant1Component: PanoramaRestaurant1Component;

  @ViewChild(PanoramaRestaurant2Component)
  private panoramaRestaurant2Component: PanoramaRestaurant2Component;

  @ViewChild(SteakRestaurantComponent)
  private steakRestaurantComponent: SteakRestaurantComponent;

  @ViewChild(FeuersteinComponent)
  private feuersteinComponent: FeuersteinComponent;

  constructor(private tischplanService: TischplanService) {
  }

  ngOnInit() {
  }

  occupied(table){
    //console.log("table.j");
    //console.log(table.j);
    //console.log("table.table");
    //console.log(table.table);
    this.occupy(table.table, table.t);
  }

  occupy(table, j) {
    console.log("occupy called");
    console.log(table);
    this.tischplanService.dispenseTable(table).subscribe(response => {
      console.log(JSON.stringify(response));
      console.log(j);
      //console.log(j);
      //console.log("bgColor:" + JSON.stringify(response));
      //console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
      //console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));

      if (typeof response == null || typeof response[j] == null) {
        return;
      } else {
        if (response[j].department === "steakRestaurant") {
          this.dispensedSteakRestaurant.emit(response[j].tables);
        }
        else if (response[j].department === "feuerstein") {
          this.dispensedFeuerstein.emit(response[j].tables);
        }
        else if (response[j].department === "panoramaRestaurant1") {
          this.dispensedPanoramaRestaurant1.emit(response[j].tables);
        }
        else if (response[j].department === "panoramaRestaurant2") {
          this.dispensedPanoramaRestaurant2.emit(response[j].tables);
        }

      }
    },
      error => console.log("Error: ", error),
      () => {
      console.log(table);
        this.updateAzList.emit();
        if (table.length > 1) {
          for (let i = 0; i < table.length; i++) {
            this.updateImHausListeElement.emit(table[i].table);
          }
        } else {
          this.updateImHausListeElement.emit(table);

        }
      });

    this.tischplanService.addPlaceholder(table).subscribe(response => {
      console.log("Add placeholder!");
      //console.log("Add placeholder! table ... " + JSON.stringify(table));
      //console.log("placeholder:" + JSON.stringify(response));
      /*
      if (typeof response == null) {
        return;
      } else {
        if (response[j].department === "panoramaRestaurant1") {
          this.dispensedSteakRestaurant.emit(response[j].tables);
        }
        else if (response[j].department === "Feuerstein") {
          this.dispensedFeuerstein.emit(response[j].tables);
        }
        else if (response[j].department === "PanoramaRestaurant1") {
          this.dispensedPanoramaRestaurant1.emit(response[j].tables);
        }
        else if (response[j].department === "panoramaRestaurant2") {
          this.dispensedPanoramaRestaurant2.emit(response[j].tables);
        }
        else if (response[j].department === "teestubeTeelounge") {
          this.dispensedTeestubeTeelounge.emit(response[j].tables);
        }
      }
      */
    });
  }

  addInformationToTable(dataString, arrayIndex) {
    //console.log("dataString");
    //console.log(dataString);
    this.tischplanService.addInformationToTable(dataString)
      .subscribe(response => {
        // let arrayIndex = response[1];
        //console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
        if (response === null) {
          return;
        } else {
          if (response[0].department === "panoramaRestaurant1") {
            this.dispensedPanoramaRestaurant1.emit(response[0].tables);
          }
          else if (response[0].department === "feuerstein") {
            this.dispensedFeuerstein.emit(response[0].tables);
          }
          else if (response[0].department === "steakRestaurant") {
            this.dispensedSteakRestaurant.emit(response[0].tables);
          }
          else if (response[0].department === "panoramaRestaurant2") {
            this.dispensedPanoramaRestaurant2.emit(response[0].tables);
          }
        }
        // //console.log(this.tablesSteakRestaurant[arrayIndex]);
      });
    this.updateAzList.emit();
  }


  occupyTableOnDrop(dataString, arrayIndex) {
    //console.log("Occupy Table!");
    this.tischplanService.occupyTable(dataString)
      .subscribe(response => {
        //let arrayIndex = response[1];
        //console.log("arrayIndex:" + arrayIndex);
        //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
        //console.log("Response occupyTable:" + JSON.stringify(response));
        if (response === null) {
          return;
        } else {
          if (response[0].department === "panoramaRestaurant1") {
            this.dispensedPanoramaRestaurant1.emit(response[0].tables);
          }
          else if (response[0].department === "feuerstein") {
            this.dispensedFeuerstein.emit(response[0].tables);
          }
          else if (response[0].department === "steakRestaurant") {
            this.dispensedSteakRestaurant.emit(response[0].tables);
          }
          else if (response[0].department === "panoramaRestaurant2") {
            this.dispensedPanoramaRestaurant2.emit(response[0].tables);
          }
        }

        //console.log("bgColor:" + JSON.stringify(this.tablesSteakRestaurant[arrayIndex]));
      });
    //console.log("placeholder:" + JSON.stringify(this.tablesSteakRestaurant[arrayIndex]));
  }

  changeBgColorIfAnreise() {
    setTimeout(() => {
      this.tablesChangeBgColorIfAnreise = this.tablesTempAbreise;
      //console.log('=================================================changeBgColorIfAnreise');
      //console.log(this.tablesChangeBgColorIfAnreise);
      this.dateTodayGenerated = new Date();
      this.parts = [];
      this.parsedDate = [];
      this.date = [];


      for (let a = 0; a < this.tablesChangeBgColorIfAnreise.length; a++) {
        for (let b = 0; b < this.tablesChangeBgColorIfAnreise[a].tables.length; b++) {
          if (this.tablesChangeBgColorIfAnreise[a].tables[b].groups) {
            for (let c = 0; c < this.tablesChangeBgColorIfAnreise[a].tables[b].groups.length; c++) {
              if (this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c]) {
                if (this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue) {
                  //console.log('tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue: ' + c + " " + this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue);
                  this.parts[0] = this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue.match(/(\d+)/g);
                } else {
                  this.parts[0] = "undefined";
                }
                if (this.parts[0]) {
                  this.date[0] = new Date(2018, this.parts[0][1] - 1, this.parts[0][0]);
                  this.parsedDate[0] = String(this.date[0]).substring(0, 15);
                }
                // note parts[1]-1
                // console.log('parts[2]' + parts[2] + 'parts[1]' + (parts[1] - 1) + 'parts[0]' + parts[0]);
                // Mon May 31 2010 00:00:00
                // this.tablesRestaurant[j].anreiseValue
                let dateToday = String(this.dateTodayGenerated).substring(0, 15);
                //console.log('Parsed Date --->: ' + this.parsedDate[0]);
                //console.log('this.dateGenerated --->: ' + dateToday);
                if (dateToday.indexOf(this.parsedDate[0]) !== -1) {
                  if (this.tablesChangeBgColorIfAnreise[a].department === "steakRestaurant") {
                    if (this.tablesSteakRestaurant[b]) {
                      this.tablesSteakRestaurant[b].bgColor = "#0a7a74";
                    }
                  }
                  else if (this.tablesChangeBgColorIfAnreise[a].department === "feuerstein") {
                    if (this.tablesFeuerstein[b]) {
                      this.tablesFeuerstein[b].bgColor = "#0a7a74";
                    }
                  }
                  else if (this.tablesChangeBgColorIfAnreise[a].department === "panoramaRestaurant1") {
                    if (this.tablesPanoramaRestaurant1[b]) {
                      this.tablesPanoramaRestaurant1[b].bgColor = "#0a7a74";
                    }
                  }
                  else if (this.tablesChangeBgColorIfAnreise[a].department === "panoramaRestaurant2") {
                    if (this.tablesPanoramaRestaurant2[b]) {
                      this.tablesPanoramaRestaurant2[b].bgColor = "#0a7a74";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }, 1000);
  }

  transform(term) {
    if (this.showTablesAlle) {
      this.alleComponent.transform(this.tables, term);
    } else if (this.showTablesFeuerstein) {
      this.feuersteinComponent.transform(this.tablesFeuerstein, term);
    } else if (this.showTablesPanoramaRestaurant1) {
      this.panoramaRestaurant1Component.transform(this.tablesPanoramaRestaurant1, term);
    } else if (this.showTablesPanoramaRestaurant2) {
      this.panoramaRestaurant2Component.transform(this.tablesPanoramaRestaurant2, term);
    } else if (this.showTablesSteakRestaurant) {
      this.steakRestaurantComponent.transform(this.tablesSteakRestaurant, term);

    }
  }
}
