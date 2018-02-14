import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { YesNoPipe } from './yes-no.pipe';
import { ValidationFirstErrorPipe } from "./validation-errors.pipe";
import { IterablePipe } from './iterable.pipe';
import { MomentjsDurationFormatPipe } from './momentjs-duration-format.pipe';
import { MomentjsMsFormatPipe } from './momentjs-ms-format.pipe';

@NgModule({
  imports: [
  ],
  exports: [
    ValidationFirstErrorPipe,
    YesNoPipe,
    IterablePipe,
    MomentjsMsFormatPipe,
    MomentjsDurationFormatPipe,
  ],
  declarations: [
    ValidationFirstErrorPipe,
    YesNoPipe,
    IterablePipe,
    MomentjsMsFormatPipe,
    MomentjsDurationFormatPipe,
  ],
  // providers: [
  //   DatePipe,
  // ]
})
export class MyPipesModule { }
