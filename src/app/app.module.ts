import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Angular2KnobTestModule } from 'app/test-angular2-knob/angular2-knob-test.module';
import { Ng2ChartsTestModule } from 'app/test-ng2-charts/test-ng2-charts.module';
import { MyCommonsModule } from 'app/common/my-commons.module';
import { TestMiscControlsPageComponent } from './test-misc-controls-page/test-misc-controls-page.component';

@NgModule({
  imports: [
    BrowserModule,
    MyCommonsModule,
    AppRoutingModule,
    Angular2KnobTestModule,
    Ng2ChartsTestModule,
  ],
  declarations: [
    AppComponent,
    TestMiscControlsPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
