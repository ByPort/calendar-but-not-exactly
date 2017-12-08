import { Component, Input, HostBinding } from '@angular/core';

import { Weekday } from '../weekday.enum';

@Component({
  selector: 'app-day',
  styleUrls: ['./day.component.css'],
  template: `
    <h2>{{value}}</h2>
    <small *ngIf="maybe">Possibly it's {{maybe}}</small>
  `,
})
export class DayComponent {
  @Input('value') value: Weekday;
  maybe: Weekday = Math.random() < 0.1
    ? (
        week => week.filter(day => day !== this.value)[Math.floor(Math.random() * week.length)]
      )(Object.values(Weekday).map(day => day as Weekday))
    : undefined;

  @HostBinding('class.weekend') get weekend() {
    return [Weekday.Saturday, Weekday.Sunday].includes(this.value);
  }
}
