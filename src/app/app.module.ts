import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    PrimengModule,
    ButtonModule,
  ],
  declarations: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
