import { Input, Output } from "@angular/core";
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-planos',
  templateUrl: './card-planos.component.html',
  styleUrls: ['./card-planos.component.css']
})
export class CardPlanosComponent {

 //propriedades para o componente CARD
 @Input()
 plano: string = ""
 
 @Input()
 valor: string = ""
 
 @Input()
 espaco: string = " "
 
 @Input()
 user: string = " "
 
 @Input()
 upload: string = " "
 
 @Input()
 bg: string = "#f1f1f1"
 
 @Output()
 eventoPersonalizado: EventEmitter<any> = new EventEmitter<any>()
 
 emissorEvento(): void {
   this.eventoPersonalizado.emit()
 }

}
