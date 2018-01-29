import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  menuNavLinks:NavLink[] = [
    {
      url:'test1',
      label: 'Test1'
    },
    {
      url:'test2',
      label: 'Test2'
    },
    {
      url:'test-angular2-knob',
      label: 'test-angular2-knob'
    },
  ];
}


//TODO: move
export class NavLink {
  url: string;
  label: string;
  responsiveClass?: string[];
}
