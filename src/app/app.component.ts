import { Component, OnInit } from '@angular/core';

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
      name: '1',
    },
    {
      name: '2',
    },
    {
      name: '3',
    },
    {
      name: '4',
    },
    {
      name: '6',
    },
  ];
  selectedNoOfColumns!: any;

  cols: number = 4;
  col: number = 0;

  constructor() {}

  ngOnInit() {
    this.col = 12 / this.cols;
  }

  createFormLayout() {
    this.layoutDialog = true;
  }

  layoutSubmit() {}
}
