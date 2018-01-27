import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-angular2-knob-test',
  templateUrl: './angular2-knob-test.component.html',
  styleUrls: ['./angular2-knob-test.component.less']
})
export class Angular2KnobTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  knOptions = {
    readOnly: true,
    size: 140,
    unit: '%',
    textColor: '#000000',
    fontSize: '32',
    fontWeigth: '700',
    fontFamily: 'Roboto',
    valueformat: 'percent',
    value: 0,
    max: 100,
    trackWidth: 19,
    barWidth: 20,
    trackColor: '#D8D8D8',
    barColor: '#FF6F17',
    subText: {
      enabled: true,
      fontFamily: 'Verdana',
      font: '14',
      fontWeight: 'bold',
      text: 'Overall',
      color: '#000000',
      offset: 7
    },
  }
  value = 75; 

}
