import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  menuNavLinks:NavLink[] = [
    {
      url:'test-angular2-knob',
      label: 'angular2-knob'
    },
    {
      url:'test-ng2-charts',
      label: 'ng2-charts'
    },
    {
      url:'test-visjs',
      label: 'vis.js'
    },
    {
      url:'test-misc-controls',
      label: 'controls'
    },
    {
      url:'test-css-goodies',
      label: 'CSS'
    },
  ];
}


//TODO: move
export class NavLink {
  url: string;
  label: string;
  responsiveClass?: string[];
}
