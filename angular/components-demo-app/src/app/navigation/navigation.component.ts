import { Component, OnChanges, OnInit, SimpleChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  // providers: [UserFromDB],
})

export class NavigationComponent implements OnInit, OnChanges {
  @Input('titleFromApp') title:string = '';
  @Input('activeUsers') activeUsers:{ name: string, age: number }[] = [];
  @Output() onTestOutput = new EventEmitter<boolean>();

  //title = 'Now'; // simple declaration
  inputValue = 'Hello';
  isActive = false;

  ngOnInit(){
    //debugger;
    console.log('navigation -> init');
  }

  ngAfterViewInit(){
    console.log('navigation -> After View Init');
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('changes');
  }

  handleClick(event: Event, ...args: number[]): void {
    this.isActive = !this.isActive; // reverse self
    this.activeUsers = [...this.activeUsers, ];
    // console.log({ args });
    this.onTestOutput.emit(this.isActive);
  }
}
