import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { AboutComponent } from '../views/about/about.component';
import { ProjetosComponent } from '../views/projetos/projetos.component';
import { VoluntarioComponent } from '../views/voluntario/voluntario.component';
import { DoacaoComponent } from '../views/doacao/doacao.component';
import { LojaComponent } from '../views/loja/loja.component';
import { PatrocinioComponent } from '../views/patrocinio/patrocinio.component';
import { ClubeComponent } from '../views/clube/clube.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'voluntario', component: VoluntarioComponent },
  { path: 'doacao', component: DoacaoComponent },
  { path: 'loja', component: LojaComponent },
  { path: 'patrocinio', component: PatrocinioComponent },
  { path: 'clube', component: ClubeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];