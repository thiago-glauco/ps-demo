
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

//firebase
import { firebaseConf } from './shared/firebase-conf';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';

//carousel lib
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//social networks
import {FacebookModule} from 'ngx-facebook';

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
import { AppRoutingModule } from './app-routing/app-routing.module';

//views
import {HomeComponent} from './views/home/home.component';
import { ProjetosComponent } from './views/projetos/projetos.component';
import { VoluntarioComponent } from './views/voluntario/voluntario.component';
import { DoacaoComponent } from './views/doacao/doacao.component';
import { LojaComponent } from './views/loja/loja.component';
import { PatrocinioComponent } from './views/patrocinio/patrocinio.component';
import { ClubeComponent } from './views/clube/clube.component';
import { RealTimeDatabaseService } from './services/real-time-database.service';
import { CarouselHomeService } from './services/carousel-home.service';
import { StorageService } from './services/storage.service';
import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';
import { CardsHomeService } from './services/cards-home.service';
import { DepoimentosService } from './services/depoimentos.service';
import { DepoimentoComponent } from './components/depoimento/depoimento.component';
import { AboutComponent } from './views/about/about.component';
import { VideoTopComponent } from './components/video-top/video-top.component';


@NgModule({
  imports:      [ 
    AngularFireModule.initializeApp(firebaseConf.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
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
    AppRoutingModule,
    ],
  declarations: [
    AppComponent,
    HelloComponent,
    UserSettingsFormComponent,
    UserDataFormComponent,
    InputNameComponent,
    GenericCardComponent,
    CardLineComponent,
    HeaderComponent,
    DonateCardComponent,
    CarouselComponent,
    RoundedCardComponent,
    TestimonialSliderComponent,
    FooterComponent,
    HomeComponent,
    ProjetosComponent,
    VoluntarioComponent,
    DoacaoComponent,
    LojaComponent,
    PatrocinioComponent,
    ClubeComponent,
    CarouselHomeComponent,
    DepoimentoComponent,
    AboutComponent,
    VideoTopComponent,
  ],

  bootstrap:    [ AppComponent ],

  providers: [RealTimeDatabaseService, CarouselHomeService, StorageService, CardsHomeService, DepoimentosService]
})
export class AppModule { }
