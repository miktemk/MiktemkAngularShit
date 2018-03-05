import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScaleoutLoaderComponent } from './scaleout-loader/scaleout-loader.component';
import { AtomOrbitalLoaderComponent } from './atom-orbital-loader/atom-orbital-loader.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ScaleoutLoaderComponent,
    AtomOrbitalLoaderComponent
  ],
  exports: [
    ScaleoutLoaderComponent,
    AtomOrbitalLoaderComponent
  ],
})
export class MyControlsDecorativeModule { }
