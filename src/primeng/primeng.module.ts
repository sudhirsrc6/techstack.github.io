import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
  ],
  exports: [
    ButtonModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
  ],
  declarations: [],
})
export class PrimengModule {}
