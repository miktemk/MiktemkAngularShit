import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MyCommonMaterialModulesModule } from './my-material-components.module';
import { MyDirectivesModule } from './directives/-my-directives.module';
import { MyPipesModule } from './pipes/-my-pipes.module';
import { MyControlsModule } from './controls/my-controls.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MyPipesModule,
    MyDirectivesModule,
    MyCommonMaterialModulesModule,
    MyControlsModule,
  ],
  exports: [
    MyPipesModule,
    MyDirectivesModule,
    MyCommonMaterialModulesModule,
    MyControlsModule,
  ],
  declarations: [
  ],
})
export class MyCommonsModule { }
