import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  reminders: string[] = [];

  addReminder(text: string) {
    this.reminders.push(text);
  }
}