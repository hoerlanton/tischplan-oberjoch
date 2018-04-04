import { Component, Directive, Input, ElementRef, ViewChild, Renderer } from '@angular/core';
import { TischplanService } from '../../services/tischplan.service';
import { DragulaService } from "ng2-dragula";
import { Http } from '@angular/http';
import { OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ImHausListe } from '../../../../ImHausListe';
import { Table } from '../../../../Table';
import { LeftValue } from '../../../../LeftValue';
import {Pipe, PipeTransform} from '@angular/core';
import { PrintComponent }  from './print/print.component';
import { DepartmentmenuComponent }  from './departmentmenu/departmentmenu.component';
import { FormComponent }  from './form/form.component';
import { ImHausListeComponent } from './im-haus-liste/im-haus-liste.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableplanComponent } from './tableplan/tableplan.component';
import { DepartmentsComponent } from './departments/departments.component';

@Component({
  selector: 'tischplan',
  templateUrl: 'tischplan.component.html',
  styleUrls: ['tischplan.component.css'],
})

export class TischplanComponent {

  @ViewChild(PrintComponent)
  private printComponent: PrintComponent;
  @ViewChild(DepartmentmenuComponent)
  private departmentmenuComponent: DepartmentmenuComponent;
  @ViewChild(FormComponent)
  private formComponent: FormComponent;
  @ViewChild(DepartmentsComponent)
  private departmentsComponent: DepartmentsComponent;
  @ViewChild(ImHausListeComponent)
  private imHausListeComponent: ImHausListeComponent;
  @ViewChild(NavigationComponent)
  private navigationComponent: NavigationComponent;
  @ViewChild(TableplanComponent)
  private tableplanComponent: TableplanComponent;

  buttonBgColor1: string;
  buttonBgColor2: string;
  buttonBgColor3: string;
  buttonBgColor4: string;
  buttonBgColor5: string;
  fontColor1: string;
  fontColor2: string;
  fontColor3: string;
  fontColor4: string;
  fontColor5: string;
  leftValues: LeftValue[];
  topValues: any[] = [];
  dateGenerated: any;
  dateGeneratedListe: any;
  newInformationElements: any[] = [];
  imHausListeElemente: ImHausListe[];
  tables: any[] = [];
  uniqueTables: any[] = [];
  tableNumbers: any[] = [];
  tablesOccupied: number;
  tablesTemp: any[] = [];
  tempTablesArray: any[] = [];
  tempTablesArray2: any[] = [];
  tempTablesArray1: any[] = [];
  tempTablesArray3: any[] = [];
  tablesSteakRestaurant: Table[] = [];
  tablesFeuerstein: Table[] = [];
  tablesPanoramaRestaurant1: Table[] = [];
  tablesPanoramaRestaurant2: Table[] = [];
  title: string;
  filesToUpload: Array<File> = [];
  isDropped: any[] = [];
  showTablesSteakRestaurant: boolean;
  showTablesFeuerstein: boolean;
  showTablesPanoramaRestaurant1: boolean;
  showTablesPanoramaRestaurant2: boolean;
  showTablesAlle: boolean;
  roomNumber: string;
  tableNumber: string;
  employee: string;
  nameTraceInput: string;
  backgroundColor: string;
  buttonBgColorInfoForm: string;
  buttonBgColorNotizForm: string;
  fontColorInfoForm: string;
  fontColorNotizForm: string;
  showInfoshowNotizFormBoolFormBool: boolean;
  showNotizFormBool: boolean;
  notizElements: any[] = [];
  term: string;
  dateTodayGenerated: any;
  date: any[] = [];
  parts: any[] = [];
  parsedDate: any[] = [];
  quellTisch: any;
  zielTisch: any;
  tableInformation: any[] = [];
  tablesTempAbreise: any[] = [];
  abreiseTablePlusIndex: any;
  umsetzenInfoVar: any;
  showTablePlanBool: boolean;
  buttonBgColorShowTablePlan: string;
  fontColorShowTablePlan: string;
  erwFeuerstein: any[] = [];
  kiFeuerstein: any[] = [];
  erwPanoramaRestaurant2: any[] = [];
  kiPanoramaRestaurant2: any[] = [];
  erwSteakRestaurant: any[] = [];
  kiSteakRestaurant: any[] = [];
  erwPanoramaRestaurant1: any[] = [];
  kiPanoramaRestaurant1: any[] = [];


  constructor(private tischplanService: TischplanService, private http: Http, private _flashMessagesService: FlashMessagesService, private dragulaService: DragulaService) {

    this.buttonBgColorInfoForm = "0a7a74";
    this.buttonBgColorNotizForm = "0a7a74";
    this.fontColorInfoForm = "f3efe4";
    this.fontColorNotizForm = "f3efe4";
    this.buttonBgColorShowTablePlan = "0a7a74";
    this.fontColorShowTablePlan = "f3efe4";
    this.dateGeneratedListe = new Date();
    this.buttonBgColor1 = "0a7a74";
    this.buttonBgColor2 = "0a7a74";
    this.buttonBgColor3 = "0a7a74";
    this.buttonBgColor4 = "0a7a74";
    this.buttonBgColor5 = "0a7a74";
    this.fontColor1 = "f3efe4";
    this.fontColor2 = "f3efe4";
    this.fontColor3 = "f3efe4";
    this.fontColor4 = "f3efe4";
    this.fontColor5 = "f3efe4";
    this.tablesOccupied = 0;
    this.backgroundColor = "ffffff";
    this.showTablesPanoramaRestaurant1 = false;
    this.showTablesPanoramaRestaurant2 = false;
    this.showTablesSteakRestaurant = false;
    this.showTablesFeuerstein = false;
    this.showTablesAlle = false;
    this.term = "";

    this.tischplanService.getNotizElements()
      .subscribe(informationElemente => {
        if (informationElemente === null) {
          return;
        } else {
          this.notizElements = informationElemente;
          console.log(this.notizElements);
        }
      });

    this.getTables();
    this.reloadLists();

    this.tischplanService.getInformationElements()
      .subscribe(informationElemente => {
        if (informationElemente === null) {
          return;
        } else {
          this.newInformationElements = informationElemente;
          //console.log(this.newInformationElements);
        }
      });

    dragulaService.drag.subscribe((value) => {
      console.log(`drag: ${value[0]}`);
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      console.log(`over: ${value[0]}`);
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      console.log(`out: ${value[0]}`);
      this.onOut(value.slice(1));
    });
  }

  private onDrag(args) {
    let [e, el] = args;
  }

  private onDrop(args) {
    let [e, el] = args;

    console.log("Args = " + JSON.stringify(args));
    console.log("Args1 = " + JSON.stringify(args[1]));
    console.log("Args2 = " + JSON.stringify(args[2]));
    console.log("Args3 = " + JSON.stringify(args[3]));
    console.log("Args4 = " + JSON.stringify(args[4]));
    console.log("e = " + JSON.stringify(e));
    console.log("el = " + JSON.stringify(el));

    let information = args[0].innerText;
    //console.log("information: " + information);
    let informationElements = information.split(/\n/);
    //console.log(informationElements);
    let informationElements2 = [];
    for (let s = 0; s < informationElements.length; s++) {
      informationElements2.push(informationElements[s].split(/:(.+)/)[1]);
      if (informationElements2[s] === undefined) {
        informationElements2[s] = informationElements[s]
      }
    }
    //console.log(informationElements2);
    let department = JSON.stringify(args[1].id);
    //console.log("departement" + department);
    let departementSubstring = department.substring(1, department.length - 1);
    //console.log("departementSubstring: " + departementSubstring);
    let innerText = args[1].innerText;
    console.log(innerText);
    //console.log("tableNumber: " + tableNumber);
    let tableNumberSubstring = innerText.toString().match(/\d+/);
    //console.log('tableNumberSubstring');
    //console.log(tableNumberSubstring);
    let numbers = innerText.match(/\d+/g);
    let arrayIndex = [];
    //console.log(innerText.substring(33, 34));
    if (innerText.substring(33, 34) === "." || innerText.substring(32, 33) === ".") {
      arrayIndex = numbers[2];
      tableNumberSubstring = numbers[0] + "." + numbers[1];
    } else {
      arrayIndex = numbers[1];
    }

    //console.log("numbers: " + numbers);
    //console.log("arrayIndex: " + arrayIndex);
    //console.log("tableNumberSubstring: " + tableNumberSubstring);
    let dataString = [];
    dataString.push(information + departementSubstring + tableNumberSubstring);
    let jBefore = innerText.toString().match(/\d+/g);
    console.log(jBefore);
    let j = jBefore[1];
    //let j = jArray[1];
    let addPlaceholderDataString = [];

    addPlaceholderDataString.push(departementSubstring);
    addPlaceholderDataString.push(tableNumberSubstring);
    console.log('j ===================>>>>>>>>>>>' + addPlaceholderDataString + 'END');
    //console.log(departementSubstring);
    //console.log(tableNumberSubstring);
    this.departmentsComponent.addInformationToTable(dataString, arrayIndex);
    this.departmentsComponent.occupyTableOnDrop(dataString, arrayIndex);
    this.tableplanComponent.sumUpPersonenAnzahl();
    this.updateImHausListeElement(informationElements2);
  }

  private onOver(args) {
    let [e, el, container] = args;
    // do something
  }

  private onOut(args) {
    let [e, el, container] = args;
    // do something
  }

  ngOnInit() {
    // this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
  }

  showFeuerstein() {
    this.departmentmenuComponent.showFeuersteinFunction();
  }

  showSteakRestaurant() {
    this.departmentmenuComponent.showSteakRestaurantFunction();
  }

  showPanoramaRestaurant1() {
    this.departmentmenuComponent.showPanoramaRestaurant1Function();
  }

  showPanoramaRestaurant2() {
    this.departmentmenuComponent.showPanoramaRestaurant2Function();
  }

  updateImHausListeElement(x) {
    this.imHausListeComponent.updateImHausListeElement(x);
  }

  /*
  moveTable(table, j) {
    this.tableplanComponent.moveTable(table, j);
  }
  */

  sendInformation(event) {
    this.formComponent.sendInformation(event);
  }

  delete(informationElement, j, event) {
    this.navigationComponent.delete(informationElement, j, event);
  }

  changeBgColorIfAnreise() {
    this.departmentsComponent.changeBgColorIfAnreise();
  }

  abreisenRemoval() {
    this.departmentsComponent.occupy(this.abreiseTablePlusIndex.abreisenExport, this.abreiseTablePlusIndex.a);
  }

  umsetzen() {
    this.departmentsComponent.addInformationToTable(this.umsetzenInfoVar.tableInformationExport, this.umsetzenInfoVar.indexZiel);
    this.departmentsComponent.occupyTableOnDrop(this.umsetzenInfoVar.tableToMove, this.umsetzenInfoVar.indexZiel);
    setTimeout(() => {
      this.departmentsComponent.occupy(this.umsetzenInfoVar.tableToMove, this.umsetzenInfoVar.indexQuell);
    }, 2000);
  }
  transform(term){
    this.departmentsComponent.transform(term);
  }

  reloadLists(){
    this.tischplanService.getAnreiseListe()
      .subscribe(imHausListeElemente => {
        //console.log('IM-HAUS-LISTE before:');
        //console.log(imHausListeElemente);

        imHausListeElemente.sort(function (a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        this.imHausListeElemente = imHausListeElemente;
        //console.log('IM-HAUS-LISTE:');
        //console.log(this.imHausListeElemente);
        setTimeout(() => {
          this.imHausListeComponent.sortList();
        }, 3000);
      });
  }
  updateAzList(){
    setTimeout(() => {
      console.log("gettables in updateAzList");
      this.getTables();
      setTimeout(() => {
        this.tables = this.tablesFeuerstein.concat(this.tablesPanoramaRestaurant1).concat(this.tablesPanoramaRestaurant2).concat(this.tablesSteakRestaurant);
        //console.log('this.tables: in updateAzList');
        //console.log(this.tables);
        this.printComponent.formatAzListe(this.tables);
      }, 3000);
    }, 1000);
  }

  getTables(){
    this.tischplanService.getTables()
      .subscribe(tables => {
        console.log("TABLES LENGTH: " + tables.length);
        if (typeof tables == null) {
          return;
        } else {

          for (let x = 0; x < tables.length; x++){
            //console.log("tables[x].department");
            //console.log(tables[x].department);
              tables[x].tables.sort(function (a, b) {
                //console.log(a.number);
                //console.log(b.number);
                if (Number(a.number) < Number(b.number))
                  return -1;
                if (Number(a.number) > Number(b.number))
                  return 1;
                return 0;
              });
          }

          for (let a = 0; a < tables.length; a++) {
            if (tables[a].department === "feuerstein") {
              this.tablesFeuerstein = tables[a].tables;
            }
            else if (tables[a].department === "panoramaRestaurant1") {
              this.tablesPanoramaRestaurant1 = tables[a].tables;
              //console.log('Test' + JSON.stringify(this.tablesPanoramaRestaurant2KaminStube));
            }
            else if (tables[a].department === "panoramaRestaurant2") {
              this.tablesPanoramaRestaurant2 = tables[a].tables;
            }
            else if (tables[a].department === "steakRestaurant") {
              this.tablesSteakRestaurant = tables[a].tables;
            }
          }
        }

        console.log(JSON.stringify(tables));
        console.log(this.tablesFeuerstein);
        console.log(this.tablesPanoramaRestaurant1);
        console.log(this.tablesPanoramaRestaurant2);
        console.log(this.tablesSteakRestaurant);
        this.tablesTempAbreise = tables;

        this.tables = this.tablesFeuerstein.concat(this.tablesPanoramaRestaurant1).concat(this.tablesPanoramaRestaurant2).concat(this.tablesSteakRestaurant);
        //console.log(this.tables);
        this.changeBgColorIfAnreise();
        this.printComponent.formatAzListe(this.tables);
        //this.dispenseIfAbreise(tables);
        setTimeout(() => {
          this.tableplanComponent.sumUpPersonenAnzahl();
        }, 1000);

      });
  }
}






