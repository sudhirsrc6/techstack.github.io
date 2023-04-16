import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementConfigComponent } from './element-config/element-config.component';

@NgModule({
  imports: [CommonModule, FormsModule, BrowserAnimationsModule],
  declarations: [ElementConfigComponent],
  exports: [ElementConfigComponent],
})
export class ElementConfigModule {}
