import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnobModule } from 'angular2-knob'; //TODO: 817e6c2b: had to disable since upgrade to 6

import { Angular2KnobTestComponent } from './angular2-knob-test.component';

@NgModule({
  imports: [
    CommonModule,
    KnobModule, //TODO: 817e6c2b: had to disable since upgrade to 6
  ],
  exports: [
    Angular2KnobTestComponent
  ],
  declarations: [
    Angular2KnobTestComponent
  ]
})
export class Angular2KnobTestModule { }
