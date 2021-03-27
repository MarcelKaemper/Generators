import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowoutputComponent } from './showoutput/showoutput.component';
import { DBFormComponent } from './dbform/dbform.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowoutputComponent,
    DBFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
