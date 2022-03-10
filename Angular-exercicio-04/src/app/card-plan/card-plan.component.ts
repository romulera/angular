import { Component, Input, EventEmitter, Output} from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar"

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrls: ['./card-plan.component.css']
})
export class CardPlanComponent  {

constructor(private _snackBar: MatSnackBar) {}

openSnackBar(message: string, action: string) {
  this._snackBar.open(`You chose ${message}`, `${action} BUY !`);
}

//Propriedade do componente 
@Input()
plano: string = " "

@Input()
valor: string = " "

@Input()
espaco: string = " "

@Input()
user: string = " "

@Input()
upload: string = " "

@Input()
bg: string = "#f1f1f1"

@Input()
Array: Array<any> = ["plano", "valor", "user" ]

@Output()
eventoPersonalizado: EventEmitter<any> = new EventEmitter<any>()

emissorEvento(): void {
  this.eventoPersonalizado.emit()
  console.log("evendo dentro do card")
  console.log(this.plano)

  }

}
