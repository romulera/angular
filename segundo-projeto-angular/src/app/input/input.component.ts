import { Component, Input } from '@angular/core';
//importa o input aqui dentro 

@Component({
  selector: 'app-input', // SE LIGA NO SELETOR
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent  {

  @Input() //o decorator @input indica que essa propriedade do componente é um input
  label: string = 'Texto label'
  @Input()
  tipo: string = 'String do tipo de input'
  @Input()
  text: string = 'Algum input possivel'

}
