import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './/material.modules';
import { FormsModule } from '@angular/forms';
import { NewComponent } from './new/new.component';
import { CardPlanComponent } from './card-plan/card-plan.component';





@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    CardPlanComponent,

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
