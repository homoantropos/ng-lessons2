import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonitorComponent } from './monitor/monitor.component';
import { SourceComponent } from './source/source.component';
import { ReceiptComponent } from './receipt/receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    MonitorComponent,
    SourceComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
