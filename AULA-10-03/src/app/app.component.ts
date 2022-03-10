import { Component, ElementRef, ViewChild } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//propriedade de classe
adicionarClasse: boolean = false
mostrarParagrafo: boolean = false
alunos: Array<string> = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aarron"]
numeros: number[] = [33,45454,456,566873,9823,44,1000]
//propriedade cor
cor: string | null = 'white' //union types, propriedade recwebe tanto string como null 

//element ref
@ViewChild('inputAluno') //viewchild vá procurar no HTML um componente com a variavel inputAluno
ipt!: ElementRef //o ! indica ao TS que a variavel vai ficar vazia, ElementRef contem as propriedade do HTML


Marxismo(): void {
this.mostrarParagrafo = !this.mostrarParagrafo
}



//metodo alterar cor
alterarCor(cor: string | null): void {
  this.cor = cor
}

addAluno(valor:string): void {
  this.alunos.push(valor)
  this.ipt.nativeElement.value = " " // esse cara apaga o input do formulario
}

}

localStorage.setItem('token', '123455667')
console.log(localStorage.getItem('token'))



