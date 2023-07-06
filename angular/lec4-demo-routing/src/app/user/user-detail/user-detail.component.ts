import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  constructor( 
      private activeRoute: ActivatedRoute,
      private userService: UserService,
    ){
    console.log('snapshot.data\n', this.activeRoute.snapshot.data);
    this.activeRoute.params.subscribe((value) => console.log('params.subscribe\n', value));
  }

  ngOnInit(): void {
      
  }
}
