import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { YesNoPipe } from './yes-no.pipe';
import { ValidationFirstErrorPipe } from "./validation-errors.pipe";
import { IterablePipe } from './iterable.pipe';

@NgModule({
  imports: [
  ],
  exports: [
    ValidationFirstErrorPipe,
    YesNoPipe,
    IterablePipe,
  ],
  declarations: [
    ValidationFirstErrorPipe,
    YesNoPipe,
    IterablePipe,
  ],
  // providers: [
  //   DatePipe,
  // ]
})
export class MyPipesModule { }
