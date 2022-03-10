import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {


//  clicou(): void {
// console.log("clicou1")
// alert("Aeee sinisssstro")
// }

@Output() //Output informa que o angular vai mandar conteudo pra fora do componente
btnClickEvent: EventEmitter<any> = new EventEmitter<any>()

emitirEvento(): void {
  this.btnClickEvent.emit('btnClickEvent executado')
  }





}
