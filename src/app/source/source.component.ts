import { Component, Output, EventEmitter } from '@angular/core';
import { Monitor } from '../monitor/monitor.model';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html'
})

export class SourceComponent {

@Output() source: EventEmitter<Monitor>;
colorsetter: Monitor;

  constructor() {
    this.source = new EventEmitter();
  }

  push(znach: HTMLInputElement): boolean {
    this.colorsetter = new Monitor(znach.value);
    this.source.emit(this.colorsetter);
    return false;
  }

}
