import { Directive, Input, ElementRef, Host, HostListener } from '@angular/core';
import { UIRouter, SrefStatus, UISrefStatus } from "@uirouter/angular";
import { Subscription } from "rxjs/Subscription";


@Directive({
  selector: '[selectAllOnClick]',
})
export class SelectAllOnClickDirective {

  constructor(
    @Host()
    private host: ElementRef
  ) {}

  @HostListener('click', ['$event'])
  inputClicked() {
    const inputElem = <HTMLInputElement>this.host.nativeElement;
    inputElem.select();
  }

}
