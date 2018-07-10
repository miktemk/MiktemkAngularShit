import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { VisModule } from 'ngx-vis';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Angular2KnobTestModule } from 'app/test-angular2-knob/angular2-knob-test.module';
import { Ng2ChartsTestModule } from 'app/test-ng2-charts/test-ng2-charts.module';
import { MyCommonsModule } from 'app/common/my-commons.module';
import { TestMiscControlsPageComponent } from './test-misc-controls-page/test-misc-controls-page.component';
import { TestCssGoodiesPageComponent } from './test-css-goodies-page/test-css-goodies-page.component';
import { TestVisjsPageComponent } from './test-visjs-page/test-visjs-page.component';

@NgModule({
  imports: [
    BrowserModule,
    MyCommonsModule,
    AppRoutingModule,
    Angular2KnobTestModule,
    Ng2ChartsTestModule,
    VisModule,
  ],
  declarations: [
    AppComponent,
    TestMiscControlsPageComponent,
    TestCssGoodiesPageComponent,
    TestVisjsPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
