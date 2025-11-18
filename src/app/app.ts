import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // <-- REQUIRED !!!
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, RouterLink]
})
export class App {
  title = signal('Fruits');

  constructor() {
    setTimeout(() => {
      this.title.set('Vegetable');
    }, 2000);
  }
}
