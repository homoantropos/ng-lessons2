import { Component, EventEmitter } from '@angular/core';

import { SourceComponent} from '../source/source.component';
import { Monitor } from '../monitor/monitor.model';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html'
})

export class ReceiptComponent {
bacground: string;

  constructor() { }

  colorSet(message: Monitor): void{
   this.bacground = `${message.color}`;
  }


}
