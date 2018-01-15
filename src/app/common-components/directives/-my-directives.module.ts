import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UISrefStatus } from "@uirouter/angular";

import { UISrefRlaDirective } from './uisref-rla.directive';
import { SelectAllOnClickDirective } from './select-all-on-click.directive';
import { SelectAllOnFocusDirective } from './select-all-on-focus.directive';
import { FocusByFlagDirective } from './focus-by-flag.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UISrefRlaDirective,
    SelectAllOnClickDirective,
    SelectAllOnFocusDirective,
    FocusByFlagDirective,
  ],
  exports: [
    UISrefRlaDirective,
    SelectAllOnClickDirective,
    SelectAllOnFocusDirective,
    FocusByFlagDirective,
  ],
  providers: [UISrefStatus]
})
export class MyDirectivesModule { }
