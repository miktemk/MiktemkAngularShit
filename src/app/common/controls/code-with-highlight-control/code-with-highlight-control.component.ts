import { Component, OnInit, OnChanges, Input, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'my-code-with-highlight-control',
  templateUrl: './code-with-highlight-control.component.html',
  styleUrls: ['./code-with-highlight-control.component.less']
})
export class CodeWithHighlightControlComponent implements OnInit, OnChanges {

  @Input()
  text: string;
  @Input()
  pos: number;

  @ViewChild("codePanel")
  codePanel: ElementRef;

  //htmlText: string;

  constructor(
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // .... set the highlight span
    if (this.pos == null || this.pos < 0)
      this.codePanel.nativeElement.innerHTML = this.text;
    else
      this.codePanel.nativeElement.innerHTML = this.replaceAtPosWithCapture(this.text, this.pos, 1, '<span class="highlight">$1</span>');
    // .... scroll to highlight span
    // TODO: make a jQuery util function out of this
    let $elem = $(this.codePanel.nativeElement);
    let $elemHighlight = $elem.find('.highlight');
    this.jQuerySmoothScrollWithinThresh($elem, $elemHighlight, 100);
  }

  // NOTE: reusable function.
  jQuerySmoothScrollWithinThresh($elemScroller: JQuery<HTMLElement>, $elemTarget: JQuery<HTMLElement>, thresh: number) {
    if (!$elemTarget[0])
      return;
    let caretPosY = $elemTarget.offset().top - $elemScroller.offset().top;
    if (($elemScroller.scrollTop() > 0 && caretPosY < thresh) || caretPosY > $elemScroller.height() - thresh) {
      let scrollTarget = $elemScroller.scrollTop() + caretPosY - thresh;
      $elemScroller.animate({ scrollTop: scrollTarget + 'px' }, 'fast');
    }
  }

  // NOTE: reusable function. "$1" in replacement str can be used as a capture group for the original
  // example usage: replaceAtRegex(this.text, this.pos, 1, '<span class="highlight">$1</span>');
  replaceAtPosWithCapture(s: string, index: number, span: number, replacement: string) {
    let prefix = s.substr(0, index);
    let middle = s.substr(index, span);
    let postfix = s.substring(index + span, s.length - 1);
    return this.htmlspecialchars(prefix)
      + replacement.replace("$1", this.htmlspecialchars(middle))
      + this.htmlspecialchars(postfix);
  }

  // NOTE: reusable function.
  htmlspecialchars(str) {
    var map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;" // ' -> &apos; for XML only
    };
    return str.replace(/[&<>"']/g, function (m) { return map[m]; });
  }

}
