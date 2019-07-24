
import "hammerjs";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule
    ],
  declarations: [ AppComponent, HelloComponent, UserSettingsFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
