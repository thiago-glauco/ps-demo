import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { Address } from '../shared/address';
import { UserPersonalData } from '../shared/user-personal-data';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.css']
})
export class UserDataFormComponent implements OnInit {
  //Form variables:
  hidePassword: boolean = true;
  user: User = new User();

  constructor( ) {
    console.dir(this.user)
  }
  ngOnInit() {
    
  }

  onSubmit() {
    
  }

}