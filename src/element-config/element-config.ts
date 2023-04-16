export class ElementConfig {
  fieldName!: string;
  tooltip!: string;
  placeholder!: string;
  elementType!: string;
  dataType!: string;

  appendTextLabel!: string;
  appendTextLabelPosition!: string;

  appendIcon!: boolean;
  icon!: string;
  appendIconPosition!: string;

  editable: boolean = true;

  dropDownData!: any[];
  rules!: any[];
}
