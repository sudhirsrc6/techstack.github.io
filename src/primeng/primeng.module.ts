import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [CommonModule, ButtonModule, DialogModule, DropdownModule],
  exports: [ButtonModule, DialogModule, DropdownModule],
  declarations: [],
})
export class PrimengModule {}
