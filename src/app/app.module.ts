
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

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { UserDataFormComponent } from './user-data-form/user-data-form.component';
import { InputNameComponent } from './input-name/input-name.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { CardLineComponent } from './components/card-line/card-line.component';
import { HeaderComponent } from './components/header/header.component';
import { DonateCardComponent } from './components/donate-card/donate-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RoundedCardComponent } from './components/rounded-card/rounded-card.component';
import { TestimonialSliderComponent } from './components/testimonial-slider/testimonial-slider.component';
import { FooterComponent } from './components/footer/footer.component';


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
    ],
  declarations: [ AppComponent, HelloComponent, UserSettingsFormComponent, UserDataFormComponent, InputNameComponent, GenericCardComponent, CardLineComponent, HeaderComponent, DonateCardComponent, CarouselComponent, RoundedCardComponent, TestimonialSliderComponent, FooterComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
