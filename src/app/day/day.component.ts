import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-day',
  styleUrls: ['./day.component.css'],
  template: `
    <h2>{{value}}</h2>
    <small *ngIf="maybe">there is a possibility that is {{maybe}}</small>
  `,
})
export class DayComponent {
  @Input('value') value: string;
  maybe: string = Math.random() < 0.1 ? (week => week.filter(day => day !== this.value)[Math.floor(Math.random() * week.length)])([
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ]) : undefined;

  @HostBinding('class.weekend') get weekend() {
    return ['saturday', 'sunday'].includes(this.value);
  }
}
