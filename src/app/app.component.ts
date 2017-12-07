import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>Days of the week next week</h1>
    <section>
      <app-day *ngFor="let day of ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']" [value]="day"></app-day>
    </section>
  `,
})
export class AppComponent {}
