import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonComponentsModule } from 'app/common-components/common-components.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonComponentsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
