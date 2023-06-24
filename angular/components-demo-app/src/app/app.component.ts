import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: '<h1>Test from template</h1>',
  templateUrl: './app.component.html', // .html template
  styleUrls: ['./app.component.css'], // .css template
  // styles: [`div {
  //   background: red;
  // }`],
})
export class AppComponent {
  title = 'title from AppComponent';
  hello = 'Hello World';
}
