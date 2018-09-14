import { Directive, Input, ElementRef, Host, HostListener } from '@angular/core';
import { UIRouter, SrefStatus, UISrefStatus } from "@uirouter/angular";
import { Subscription } from "rxjs";


@Directive({
  selector: '[selectAllOnFocus]',
})
export class SelectAllOnFocusDirective {

  constructor(
    @Host()
    private host: ElementRef
  ) {}

  @HostListener('focus', ['$event'])
  inputFocused() {
    const inputElem = <HTMLInputElement>this.host.nativeElement;
    inputElem.select();
  }

}