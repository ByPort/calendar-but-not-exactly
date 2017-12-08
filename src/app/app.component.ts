import { Component } from '@angular/core';

import { Weekday } from './weekday.enum';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>Days of the week next week</h1>
    <section>
      <app-day *ngFor="let day of weekdays" [value]="day"></app-day>
    </section>
  `,
})
export class AppComponent {
  weekdays: Weekday[] = Object.values(Weekday).map(day => day as Weekday);
}
