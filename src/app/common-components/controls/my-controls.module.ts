import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QueryBubbleControlComponent } from './query-bubble-control/query-bubble-control.component';
import { MyPipesModule } from '../pipes/-my-pipes.module';
import { MyDirectivesModule } from '../directives/-my-directives.module';
import { MyCommonMaterialModulesModule } from '../my-material-components.module';
import { TimelinePlayerControlsComponent } from 'app/common-components/controls/timeline-player-controls/timeline-player-controls.component';
import { CodeWithHighlightControlComponent } from 'app/common-components/controls/code-with-highlight-control/code-with-highlight-control.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyPipesModule,
    MyDirectivesModule,
    MyCommonMaterialModulesModule,
  ],
  declarations: [
    QueryBubbleControlComponent,
    TimelinePlayerControlsComponent,
    CodeWithHighlightControlComponent,
  ],
  exports: [
    QueryBubbleControlComponent,
    TimelinePlayerControlsComponent,
    CodeWithHighlightControlComponent,
  ],
})
export class MyControlsModule { }
