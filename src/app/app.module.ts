import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HelloModule} from '@sitakant/say-hello/src/app/app.module'

import { AppComponent } from './app.component';
import { HelloComponent } from '@sitakant/say-hello/src/app/app.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
