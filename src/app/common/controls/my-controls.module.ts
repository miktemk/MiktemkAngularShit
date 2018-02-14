import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QueryBubbleControlComponent } from './query-bubble-control/query-bubble-control.component';
import { MyPipesModule } from '../pipes/-my-pipes.module';
import { MyDirectivesModule } from '../directives/-my-directives.module';
import { MyCommonMaterialModulesModule } from '../my-material-components.module';
import { TimelinePlayerControlsComponent } from 'app/common/controls/timeline-player-controls/timeline-player-controls.component';
import { CodeWithHighlightControlComponent } from 'app/common/controls/code-with-highlight-control/code-with-highlight-control.component';
import { DateTimePickerComponent } from 'app/common/controls/date-time-picker/date-time-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyPipesModule,
    MyDirectivesModule,
    MyCommonMaterialModulesModule,
  ],
  declarations: [
    QueryBubbleControlComponent,
    TimelinePlayerControlsComponent,
    CodeWithHighlightControlComponent,
    DateTimePickerComponent,
  ],
  exports: [
    QueryBubbleControlComponent,
    TimelinePlayerControlsComponent,
    CodeWithHighlightControlComponent,
    DateTimePickerComponent,
  ],
})
export class MyControlsModule { }
