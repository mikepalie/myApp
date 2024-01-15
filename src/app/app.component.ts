import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class  AppComponent {
  name: string = "Mixalis";
  age: number = 32;
  salary: number = 50000;

}
