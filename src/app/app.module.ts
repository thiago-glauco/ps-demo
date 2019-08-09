
import "hammerjs";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

//Material
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { UserDataFormComponent } from './user-data-form/user-data-form.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatButtonToggleModule
    ],
  declarations: [ AppComponent, HelloComponent, UserSettingsFormComponent, UserDataFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
