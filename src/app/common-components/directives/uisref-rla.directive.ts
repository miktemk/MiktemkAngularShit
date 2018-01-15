import { Directive, OnInit, OnDestroy, Input, ElementRef, Host } from '@angular/core';
import { UIRouter, SrefStatus, UISrefStatus } from "@uirouter/angular";
import { Subscription } from "rxjs/Subscription";

// FROM EXAMPLE: https://github.com/ui-router/angular/blob/b93a5a6c0f70723913685c4b981e5a3a602dfcff/src/directives/uiSrefActive.ts

@Directive({
  selector: 'a,uiSrefRla',
  exportAs: 'uiSrefRla'
})
export class UISrefRlaDirective implements OnInit, OnDestroy {

  public isActive:boolean = false;
  @Input()
  public uiSref:string;

  private _subscription: Subscription;
  constructor(
    private uiSrefStatus: UISrefStatus,
    @Host()
    private host: ElementRef
  ) {}

  ngOnInit() {
    this.isActive = this.uiSrefStatus.status.active || false;
    this._subscription = this.uiSrefStatus.uiSrefStatus.subscribe((next: SrefStatus) => {
      this.isActive = next.active;
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
