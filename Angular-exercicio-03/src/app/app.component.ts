import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number = 0
  
  contaclick(): void {
    this.contador += 1
  }

  contaclickmenos(): void {
    this.contador -= 1
  }

}
