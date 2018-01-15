import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryBubbleControlComponent } from './query-bubble-control/query-bubble-control.component';
import { MyPipesModule } from '../pipes/-my-pipes.module';
import { MyDirectivesModule } from '../directives/-my-directives.module';
import { MyCommonMaterialModulesModule } from '../my-material-components.module';

@NgModule({
  imports: [
    CommonModule,
    MyPipesModule,
    MyDirectivesModule,
    MyCommonMaterialModulesModule,
  ],
  declarations: [
    QueryBubbleControlComponent
  ],
  exports: [
    QueryBubbleControlComponent
  ],
})
export class MyControlsModule { }
