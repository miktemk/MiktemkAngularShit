import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnobModule } from 'angular2-knob';

import { Angular2KnobTestComponent } from './angular2-knob-test.component';

@NgModule({
  imports: [
    CommonModule,
    KnobModule,
  ],
  exports: [
    Angular2KnobTestComponent
  ],
  declarations: [
    Angular2KnobTestComponent
  ]
})
export class Angular2KnobTestModule { }
