import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PrimengModule } from '../primeng/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementConfigModule } from '../element-config/element-config.module';

@NgModule({
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    PrimengModule,
    ElementConfigModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
