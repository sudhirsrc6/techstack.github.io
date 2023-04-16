import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementConfigComponent } from './element-config/element-config.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  imports: [CommonModule, FormsModule, BrowserAnimationsModule, PrimengModule],
  declarations: [ElementConfigComponent],
  exports: [ElementConfigComponent],
})
export class ElementConfigModule {}
