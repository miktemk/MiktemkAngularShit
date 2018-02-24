import { NgModule } from "@angular/core";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CdkTableModule } from "@angular/cdk/table";
import * as Mat from '@angular/material';

// NOTE: this prevents us from having to list every single material component we will use
@NgModule({
  imports: [
    BrowserAnimationsModule,
    CdkTableModule,
    Mat.MatButtonModule,
    Mat.MatInputModule,
    Mat.MatRadioModule,
    Mat.MatCheckboxModule,
    Mat.MatTabsModule,
    Mat.MatSelectModule,
    Mat.MatMenuModule,
    Mat.MatDatepickerModule,
    Mat.MatNativeDateModule,
    Mat.MatTableModule,
    Mat.MatPaginatorModule,
    Mat.MatDialogModule,
    Mat.MatSliderModule,
    Mat.MatIconModule,
    Mat.MatProgressBarModule,
    Mat.MatProgressSpinnerModule,
  ],
  exports: [
    BrowserAnimationsModule,
    CdkTableModule,
    Mat.MatButtonModule,
    Mat.MatInputModule,
    Mat.MatRadioModule,
    Mat.MatCheckboxModule,
    Mat.MatTabsModule,
    Mat.MatSelectModule,
    Mat.MatMenuModule,
    Mat.MatDatepickerModule,
    Mat.MatNativeDateModule,
    Mat.MatTableModule,
    Mat.MatPaginatorModule,
    Mat.MatDialogModule,
    Mat.MatSliderModule,
    Mat.MatIconModule,
    Mat.MatProgressBarModule,
    Mat.MatProgressSpinnerModule,
  ]
})
export class MyCommonMaterialModulesModule { }
