import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "rafael";
  nombreUpper: string = "RAFAEL";
  nombreCompleto: string = "raFaEl uRIBe";

  fecha: Date = new Date();

}
