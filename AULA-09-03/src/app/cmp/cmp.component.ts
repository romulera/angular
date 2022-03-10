import { Component, Input } from '@angular/core';


@Component({
  selector: 'cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.css']
})
export class CmpComponent { //aqui é o seletor que o View Child vai procurar

title: string = "CmpComponente"
used: boolean = true
prop: number = 7146

@Input()
numero: number = 123

darOi(): string {
  return "Ola, mundo"
}

metodo(): number {
  return this.prop ** 2
}

}
