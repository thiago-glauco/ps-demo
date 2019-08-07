

import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  user: User = new User();
  constructor( ) {
    console.dir(this.user)
  }
  ngOnInit() {
    
  }

  onSubmit() {
    
  }

}