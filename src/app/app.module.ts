import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonComponentsModule } from 'app/common-components/common-components.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Angular2KnobTestModule } from 'app/test-angular2-knob/angular2-knob-test.module';
import { Ng2ChartsTestModule } from 'app/test-ng2-charts/test-ng2-charts.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonComponentsModule,
    AppRoutingModule,
    Angular2KnobTestModule,
    Ng2ChartsTestModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
