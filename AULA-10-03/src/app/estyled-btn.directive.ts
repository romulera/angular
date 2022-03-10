import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appEstyledBtn]' //igual o seletor de atributo do componente
})
export class EstyledBtnDirective {

  @Input()
  bg: string = 'orange'
  



  constructor(
    private el: ElementRef //propriedade é a variavel el que recebe um elemeneref

  ) { 
    this.el.nativeElement.style.backgroundColor = "red" //como o el é um elemento nativo, ele tem style e todos os parametros que cabem dentro do style
    this.el.nativeElement.style.borderRadius = '30px'
    this.el.nativeElement.style.border = 0
    this.el.nativeElement.style.height = '60px'
    this.el.nativeElement.style.width = '300px'
    this.el.nativeElement.style.color = 'white'
    this.el.nativeElement.style.fontSize = '20px'

   }

   ngOnInit(){
     this.el.nativeElement.style.backgroundColor = this.bg
   }

}
