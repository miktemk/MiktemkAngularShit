import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-timeline-player-controls',
  templateUrl: './timeline-player-controls.component.html',
  styleUrls: ['./timeline-player-controls.component.less']
})
export class TimelinePlayerControlsComponent implements OnInit {

  @Input()
  events: any[];
  @Output()
  onReset = new EventEmitter<void>();
  @Output()
  onReenactEvent = new EventEmitter<any>(true);

  sliderValue: number = 0;

  constructor() { }

  ngOnInit() {
  }


  prevFrame() {
    if (this.sliderValue <= 0)
      return;
    this.sliderValue--;
    this.onReenactEvent.emit(this.events[this.sliderValue]);
  }
  nextFrame() {
    if (this.sliderValue >= this.events.length - 1)
      return;
    this.sliderValue++;
    this.onReenactEvent.emit(this.events[this.sliderValue]);
  }
  rerunUntilThis() {
    this.onReset.emit();
    for (let i = 0; i <= this.sliderValue; i++)
      this.onReenactEvent.emit(this.events[i]);
  }

  slider_change() {
    this.onReenactEvent.emit(this.events[this.sliderValue]);
  }
}
