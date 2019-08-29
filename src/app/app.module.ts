
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
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu'; 

//carousel lib
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from "ngx-carousel-lib";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { UserDataFormComponent } from './user-data-form/user-data-form.component';
import { InputNameComponent } from './input-name/input-name.component';
import { GenericCardComponent } from './generic-card/generic-card.component';
import { CardLineComponent } from './card-line/card-line.component';
import { HeaderComponent } from './header/header.component';
import { DonateCardComponent } from './donate-card/donate-card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RoundedCardComponent } from './rounded-card/rounded-card.component';


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
    MatButtonToggleModule,
    MatCardModule,
    NgbModule,
    MatMenuModule,
    CarouselModule
    ],
  declarations: [ AppComponent, HelloComponent, UserSettingsFormComponent, UserDataFormComponent, InputNameComponent, GenericCardComponent, CardLineComponent, HeaderComponent, DonateCardComponent, CarouselComponent, RoundedCardComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
