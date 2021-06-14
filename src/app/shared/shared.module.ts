import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  declarations: [
    CustomInputComponent,
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
