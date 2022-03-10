import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "opa aula 08-03"


  //property binding 

  tipo:string = "password"
  placeholder:string = "passa a senha"

//criando metodo
 alertar() { 
   alert('Nao colocou a senha')
 }

alertar2(e: any) { //E vai receber o valor de $event
  alert('Alertar dois')
  console.log(e)
}


}
