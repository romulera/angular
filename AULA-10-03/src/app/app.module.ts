import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './/material.modules';
import { FormsModule } from '@angular/forms';
import { NewComponent } from './new/new.component';
import { CmpComponent } from './cmp/cmp.component';
import { EstyledBtnDirective } from './estyled-btn.directive';





@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    CmpComponent,
    EstyledBtnDirective,

    
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
