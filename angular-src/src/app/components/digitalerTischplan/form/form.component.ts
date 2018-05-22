import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TischplanService } from '../../../services/tischplan.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Table } from '../../../../../Table';

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class FormComponent implements OnInit {

  @Input('newInformationElements') newInformationElements: any[] = [];
  @Input('dateGenerated') dateGenerated: any;
  @Input('title') title: string;
  @Input('roomNumber') roomNumber: string;
  @Input('tableNumber') tableNumber: string;
  @Input('nameTraceInput') nameTraceInput: string;
  @Input('employee') employee: string;
  @Input('tablesFeuerstein') tablesFeuerstein: Table[];
  @Input('tablesPanoramaRestaurant1') tablesPanoramaRestaurant1: Table[];
  @Input('tablesPanoramaRestaurant2') tablesPanoramaRestaurant2: Table[];
  @Input('tablesPanoramaRestaurant3') tablesPanoramaRestaurant3: Table[];
  @Input('tablesTeestubeTeelounge') tablesTeestubeTeelounge: Table[];
  @Input('tablesIselerRestaurant') tablesIselerRestaurant: Table[];
  @Input('showInfoFormBool') showInfoFormBool: boolean;
  @Input('showNotizFormBool') showNotizFormBool: boolean;
  @Input('notizElements') notizElements: any;
  @Input('showTablesFeuerstein') showTablesFeuerstein: boolean;
  @Input('showTablesPanoramaRestaurant1') showTablesPanoramaRestaurant1: boolean;
  @Input('showTablesPanoramaRestaurant2') showTablesPanoramaRestaurant2: boolean;
  @Input('showTablesPanoramaRestaurant3') showTablesPanoramaRestaurant3: boolean;
  @Input('showTablesIselerRestaurant') showTablesIselerRestaurant: boolean;
  @Input('showTablesAlle') showTablesAlle: boolean;
  @Output()
  notizResponse:EventEmitter<any> = new EventEmitter();
  @Output()
  changeColorIfAnreiseExport:EventEmitter<any> = new EventEmitter();

  notizInput: string;
  departmentNotizInput: string;
  departments: any[] = [];
  notizDate: any;

  constructor(private tischplanService: TischplanService, private _flashMessagesService: FlashMessagesService) {
    this.departments = ["Feuerstein", "Panorama Restaurant 1", "Panorama Restaurant 2", "Panorama Restaurant 3", "Iseler Restaurant" ];
  }

  ngOnInit() {
  }
  sendInformation(event) {
    event.preventDefault();
    this.dateGenerated = new Date();
    let newInformation = {
      text: this.title,
      roomNumber: this.roomNumber,
      tableNumber: this.tableNumber,
      date: this.dateGenerated,
      name: this.nameTraceInput,
      employee: this.employee
    };
    if (newInformation.text === undefined) {
      this._flashMessagesService.show('Die Nachricht ist leer ... ',
        {cssClass: 'alert-danger', timeout: 20000});
      return;
    } else {
      this._flashMessagesService.show('Erfolgreich Information gespeichert ... ',
        {cssClass: 'alert-success', timeout: 20000});

      console.log(newInformation.tableNumber);

      if (newInformation.tableNumber) {
        this.tischplanService.sendInformation(newInformation)
          .subscribe(Information => {
            //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
            console.log('Information: ' + JSON.stringify(Information));
            console.log(Information.tables[0]);
            console.log("------");
            //console.log(Information[0].tables);
            if (Information === null) {
              return;
            } else {
              if (Information.tables[0].department === "feuerstein") {
                for (let i = 0; i < this.tablesFeuerstein.length; i++) {
                  if (this.tablesFeuerstein[i].number === Information.tables[0].number) {
                    this.tablesFeuerstein[i] = Information.tables[0];
                  }
                }
              } else if (Information.tables[0].department === "iselerRestaurant") {
                for (let i = 0; i < this.tablesIselerRestaurant.length; i++) {
                  if (this.tablesIselerRestaurant[i].number === Information.tables[0].number) {
                    this.tablesIselerRestaurant[i] = Information.tables[0];
                  }
                }
              } else if (Information.tables[0].department === "panoramaRestaurant1") {
                for (let i = 0; i < this.tablesPanoramaRestaurant1.length; i++) {
                  if (this.tablesPanoramaRestaurant1[i].number === Information.tables[0].number) {
                    this.tablesPanoramaRestaurant1[i] = Information.tables[0];
                  }
                }
              } else if (Information.tables[0].department === "panoramaRestaurant2") {
                for (let i = 0; i < this.tablesPanoramaRestaurant2.length; i++) {
                  if (this.tablesPanoramaRestaurant2[i].number === Information.tables[0].number) {
                    this.tablesPanoramaRestaurant2[i] = Information.tables[0];
                  }
                }
              } else if (Information.tables[0].department === "panoramaRestaurant3") {
                for (let i = 0; i < this.tablesPanoramaRestaurant3.length; i++) {
                  if (this.tablesPanoramaRestaurant3[i].number === Information.tables[0].number) {
                    this.tablesPanoramaRestaurant3[i] = Information.tables[0];
                  }
                }
              }            }
          });
        this.changeColorIfAnreiseExport.emit();
      }
      this.tischplanService.sendInformationToBox(newInformation)
        .subscribe(Information => {
          //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
          console.log('Information: ' + JSON.stringify(Information));
          //console.log(Information.tables[0]);
          //console.log("------");
          //console.log(Information[0].tables);
          this.newInformationElements.push(Information);
          console.log('this.newInformationElements' + this.newInformationElements);
        });
    }
  }
  sendNotiz(event) {
    event.preventDefault();

    this.notizDate = String(new Date()).substring(0, 15);

    let newNotiz = {
      notizInput: this.notizInput,
      departmentNotizInput: this.departmentNotizInput,
      date: this.notizDate
    };
    if (newNotiz.notizInput === undefined) {
      this._flashMessagesService.show('Die Nachricht ist leer ... ',
        {cssClass: 'alert-danger', timeout: 20000});
      return;
    } else {
      this._flashMessagesService.show('Erfolgreich Information gespeichert ... ',
        {cssClass: 'alert-success', timeout: 20000});
    }
    this.tischplanService.sendInformationToNotizBlock(newNotiz)
      .subscribe(Notiz => {
        //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
        console.log('Information: ' + JSON.stringify(Notiz));
        //console.log(Information.tables[0]);
        //console.log("------");
        //console.log(Information[0].tables);
        this.notizResponse.emit(Notiz);
        this.notizElements = Notiz;
        console.log('this.newInformationElements' + this.newInformationElements);
      });

  }
}
