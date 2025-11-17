import { Component, signal } from '@angular/core';
import { Todos } from "./MyComponents/todos/todos";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [Todos]
})
export class App {
  title = signal('Fruits');

  constructor() {
    setTimeout(() => {
      this.title.set('Vegetable');
    }, 2000);
  }
}
