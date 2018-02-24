import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MyDirectivesModule } from './directives/-my-directives.module';
import { MyPipesModule } from './pipes/-my-pipes.module';
import { MyControlsModule } from './controls/my-controls.module';
import { MyCommonMaterialModulesModule } from './3rd-party-modules/my-material-components.module';
import { MyControlsDecorativeModule } from './controls-decorative/my-controls-decorative.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MyPipesModule,
    MyDirectivesModule,
    MyCommonMaterialModulesModule,
    MyControlsModule,
    MyControlsDecorativeModule,
  ],
  exports: [
    MyPipesModule,
    MyDirectivesModule,
    MyCommonMaterialModulesModule,
    MyControlsModule,
    MyControlsDecorativeModule,
  ],
})
export class MyCommonsModule { }
