import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'; //importando o snack bar

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'segundo-projeto-angular';
  subtittle: string = 'olha o subtitulo ai'

  tipoinput: string = "password"
  texto: string = 'Sera que vai?'
  valorInput: string = " "
  contador: number = 0
  content: string = ""

  constructor(private _snackBar: MatSnackBar) {}

  mostrarSnackBar(): void { //criando uma funcao que nao retonar nenhum valor por isso void
    this._snackBar.open('Vai toma no cú ! bagulho dificil do caralho!!', 'Action é a mensagem do botao')
  }

  alteraValor(event: any): void {
    console.log(event.target.value)
    this.valorInput = event.target.value
  }

  contaclick(): void {
    this.contador += 1
  }

  contaclickmenos(): void {
    this.contador -= 1
  }

}
