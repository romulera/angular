import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



loren: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure maiores natus reprehenderit voluptatum adipisci ex."
 

clicou(): void {
  console.log("clicou 1")
  alert("Aeee sinisssstro")
  }

clicou2(e: any) {
  console.log("clicou 2")
  alert("Aeee sinisssstro 2")
  }

}
