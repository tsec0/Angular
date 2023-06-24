import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  // template: '<h1>Test from template</h1>',
  // in the home (component) folder
  templateUrl: './home.component.html', // .html file
  styleUrls: ['./home.component.css'], // .css file
  // styles: [`div {
  //   background: red;
  // }`],
})

export class HomeComponent {
  test = 'Test123';
}
