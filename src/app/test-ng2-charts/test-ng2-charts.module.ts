import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { TestNg2ChartsDonutComponent } from './test-ng2-charts-donut/test-ng2-charts-donut.component';
import { TestNg2ChartsBarComponent } from './test-ng2-charts-bar/test-ng2-charts-bar.component';
import { TestNg2ChartsComponent } from './test-ng2-charts.component';
import { MyCommonMaterialModulesModule } from 'app/common/my-material-components.module';

@NgModule({
  imports: [
    CommonModule,
    MyCommonMaterialModulesModule,
    ChartsModule,
  ],
  exports: [
    TestNg2ChartsDonutComponent,
    TestNg2ChartsBarComponent
  ],
  declarations: [
    TestNg2ChartsDonutComponent,
    TestNg2ChartsBarComponent,
    TestNg2ChartsComponent
  ]
})
export class Ng2ChartsTestModule { }
