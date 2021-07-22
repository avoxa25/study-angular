import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldNgIfComponent } from './hello-world-ngIf/hello-world-ngIf.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldNgIfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
