import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-config',
  templateUrl: './element-config.component.html',
  styleUrls: ['./element-config.component.css'],
})
export class ElementConfigComponent implements OnInit {
  @Input()
  inputData: any;

  elementTypes: any[] = [
    {
      name: '-- Select --',
    },
    {
      name: 'Input',
    },
    {
      name: 'Textarea',
    },
    {
      name: 'Dropdown',
    },
    {
      name: 'Autocomplete',
    },
    {
      name: 'Checkbox',
    },
    {
      name: 'Radio',
    },
  ];

  dataTypes: any[] = [
    {
      name: '-- Select --',
    },
    {
      name: 'string',
    },
    {
      name: 'int',
    },
    {
      name: 'decimal',
    },
  ];

  labelPositions: any[] = [
    {
      name: '-- Select --',
    },
    {
      name: 'left',
    },
    {
      name: 'top',
    },
  ];

  showError: boolean = false;
  constructor() {}

  ngOnInit() {}

  submit() {
    if (
      !this.inputData.elementType ||
      this.inputData.elementType.name === '-- Select --'
    ) {
      this.showError = true;
      return;
    }
    if (
      !this.inputData.dataType ||
      this.inputData.dataType.name === '-- Select --'
    ) {
      this.showError = true;
      return;
    }
    if (
      !this.inputData.fieldName ||
      this.inputData.fieldName.trim().length === 0
    ) {
      this.showError = true;
      return;
    } else {
      this.inputData.fieldName = this.inputData.fieldName
        .trim()
        .replaceAll(' ', '');
    }
    if (
      !this.inputData.placeholder ||
      this.inputData.placeholder.trim().length === 0
    ) {
      this.showError = true;
      return;
    }
    if (!this.inputData.tooltip || this.inputData.tooltip.trim().length === 0) {
      this.showError = true;
      return;
    }
    this.inputData.showDialog = false;
    this.inputData.saved = true;
  }
}
