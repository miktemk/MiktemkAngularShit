import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScaleoutLoaderComponent } from './scaleout-loader/scaleout-loader.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ScaleoutLoaderComponent
  ],
  exports: [
    ScaleoutLoaderComponent
  ],
})
export class MyControlsDecorativeModule { }
