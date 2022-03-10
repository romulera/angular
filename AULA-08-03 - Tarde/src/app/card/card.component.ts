import { getLocaleEraNames } from '@angular/common';
import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

 //criando 3 propriedade para o componente CARD
@Input()
 titulo: string = ""

@Input()
 subtitulo: string = ""

@Input()
 conteudo: string = " "

@Input()
bg: string = "#ffe8f8e1"


}
