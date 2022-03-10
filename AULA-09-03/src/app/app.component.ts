import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CmpComponent } from './cmp/cmp.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// pegar um elemento padrao do HTML usa o ElementRef
@ViewChild('inputTexto')
inputTexto!: ElementRef

 // prcurando a variavel de template 
@ViewChild('confirma')
cmpViewChildConfirma!: CmpComponent

// pegando as propriedade do compomente CmpComponent
@ViewChild(CmpComponent)
cmpViewChild!: CmpComponent  // nome da classe que ele ta procurando 

ngAfterViewInit() {
  console.log(this.cmpViewChild)
  console.log(this.cmpViewChild.darOi)
  console.log(this.cmpViewChild.title)
  console.log(this.cmpViewChild.prop)
  console.log(this.cmpViewChild.numero) // vai pegar o primeiro conteudo da propriedade numero que ele achar.
  console.log(this.cmpViewChild.numero)
  console.log(this.cmpViewChildConfirma.numero)
  console.log(this.inputTexto.nativeElement.value)
  
  
}












}
