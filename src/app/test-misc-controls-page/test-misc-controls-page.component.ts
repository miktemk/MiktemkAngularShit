import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-test-misc-controls-page',
  templateUrl: './test-misc-controls-page.component.html',
  styleUrls: ['./test-misc-controls-page.component.less']
})
export class TestMiscControlsPageComponent implements OnInit {

  public testDate: Date;

  constructor() { }

  ngOnInit() {
  }

}
