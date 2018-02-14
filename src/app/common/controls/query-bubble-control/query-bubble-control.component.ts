import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-query-bubble-control',
  templateUrl: './query-bubble-control.component.html',
  styleUrls: ['./query-bubble-control.component.less']
})
export class QueryBubbleControlComponent implements OnInit {

  @Input()
  vm: QueryBubbleVm;
  @Input()
  isInFocus: boolean;
  @Output()
  onSendQuery = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  bubbleFocus($event: FocusEvent): void {
    this.isInFocus = true;
  }
  bubbleBlur($event: FocusEvent): void {
    this.isInFocus = false;
  }
  // keyPressed($event: KeyboardEvent): void {
  //   if ($event && $event.keyCode === 13) {
  //     this.triggerSendQuery();
  //     $event.stopImmediatePropagation();
  //     $event.preventDefault();
  //     return;
  //   }
  // }

  triggerSendQuery():void {
    if (!this.vm.query)
      return;
    this.onSendQuery.emit(this.vm.query);
  }

}



export class QueryBubbleVm {
  query: string;
  isInFocus: boolean;
}
