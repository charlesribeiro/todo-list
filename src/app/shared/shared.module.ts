import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomInputComponent } from './custom-input/custom-input.component';
import { ReminderCardComponent } from './reminder-card/reminder-card.component';

@NgModule({
  declarations: [
    CustomInputComponent,
    ReminderCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    CustomInputComponent,
  ]
})
export class SharedModule { }
