import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    Welcome to {{ title }}
  </h1>

  <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
}
