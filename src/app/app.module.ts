import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IceComponent } from './ice/ice.component';
import { IceCreamComponent } from './ice-cream/ice-cream.component';

@NgModule({
  declarations: [
    AppComponent,
    IceComponent,
    IceCreamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
