import { Directive, Input, ElementRef, Host, Inject } from '@angular/core';
import { UIRouter, SrefStatus, UISrefStatus } from "@uirouter/angular";
import { Subscription } from "rxjs/Subscription";


@Directive({
  selector: '[focusByFlag]'
})
export class FocusByFlagDirective {

  constructor( @Inject(ElementRef) private element: ElementRef) { }

  // protected ngOnChanges() {
  //   this.element.nativeElement.focus();
  // }

  @Input() set focusByFlag(value: boolean) {
    if (value)
      this.element.nativeElement.focus();
  }
}

