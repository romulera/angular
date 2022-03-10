import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {




clicou(): void {
  console.log("clicou 1")
  alert("Aeee sinisssstro")
  }

clicou2(e: any) {
  console.log("clicou 2")
  alert("Aeee sinisssstro 2")
  }



planoEscolhido(): void {
  alert("Voce escolheu o plano")

}

}
