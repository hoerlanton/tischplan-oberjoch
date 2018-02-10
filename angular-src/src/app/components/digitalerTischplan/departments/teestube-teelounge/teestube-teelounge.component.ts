import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Table } from '../../../../../../Table';

@Component({
  selector: 'app-teestube-teelounge',
  templateUrl: 'teestube-teelounge.component.html',
  styleUrls: ['../../tischplan.component.css']
})
export class TeestubeTeeloungeComponent implements OnInit {

  @Input('tablesTeestubeTeelounge') tablesTeestubeTeelounge: Table[];
  @Input('showTeeStubeBool') showTeeStubeBool: boolean;
  @Input('term') term: string;
  @Output()
  occupied:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  occupy(table, j) {
    this.occupied.emit({table, j});
  }

  getStyle(j) {
    if (j != "Empty") {
      return "solid 3px red";
    } else {
      return "";
    }
  }

}
