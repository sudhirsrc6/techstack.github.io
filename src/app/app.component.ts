import { Component, OnInit } from '@angular/core';
import { ElementConfig } from '../element-config/element-config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  layoutDialog: boolean = false;
  elementTypes: any[] = [
    {
      name: '-- Select --',
    },
    {
      name: 'HTML Default Form Elements',
    },
    {
      name: 'Primeng Elements',
    },
    {
      name: 'Angular Material Elements',
    },
  ];
  selectedFormElement!: any;

  colums: any[] = [
    {
      cols: 1,
    },
    {
      cols: 2,
    },
    {
      cols: 3,
    },
    {
      cols: 4,
    },
    {
      cols: 6,
    },
  ];
  selectedNoOfColumns!: any;

  cols: number = 4;
  col: number = 0;

  showAdd: boolean = false;
  rows: any[] = [];

  showError: boolean = false;
  constructor() {}

  ngOnInit() {
    this.col = 12 / this.cols;
    for (let i = 0; i <= 25; i++) {
      let rowData = {
        cols: [],
      };
      this.rows.push(rowData);
      for (let j = 0; j < this.cols; j++) {
        rowData.cols.push(new ElementConfig());
      }
    }
  }

  createFormLayout() {
    if (this.showAdd == true) {
      return;
    }
    this.layoutDialog = true;
  }

  layoutSubmit() {
    this.showError = false;
    if (
      !this.selectedFormElement ||
      this.selectedFormElement.name === '-- Select --'
    ) {
      this.showError = true;
      return;
    }
    if (
      !this.selectedNoOfColumns ||
      this.selectedNoOfColumns.cols === '-- Select --'
    ) {
      this.showError = true;
      return;
    }
    this.cols = this.selectedNoOfColumns.cols;
    this.col = 12 / this.cols;
    this.layoutDialog = false;
    this.showAdd = true;
    this.rows = [];
    for (let i = 0; i <= 25; i++) {
      let rowData = {
        cols: [],
      };
      this.rows.push(rowData);
      for (let j = 0; j < this.cols; j++) {
        rowData.cols.push(new ElementConfig());
      }
    }
  }

  openElementConfig(colData: any) {
    colData.showDialog = true;
  }
}
