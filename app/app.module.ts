import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponent } from './shared/component/tab/tab.component';
import { TabSwitchComponent } from './shared/component/tab-switch/tab-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
