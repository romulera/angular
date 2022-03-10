import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './/material.modules';
import { FormsModule } from '@angular/forms';
import { BotaoComponent } from './botao/botao.component';
import { CardComponent } from './card/card.component';
import { CardPlanosComponent } from './card-planos/card-planos.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BotaoComponent,
    CardPlanosComponent,
    
  ],
  imports: [
    CardComponent,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
