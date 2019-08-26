import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Rutas 
import {APP_ROUTING } from './app.routes';
// Servicios
import {HeroesService} from './services/heroes.service'


// Componentes
import { AppComponent } from './app.component';
import {NavbarComponent} from './componets/navbar/navbar.component';
import {HomeComponent} from './componets/home/home.component';
import { HeroesComponent } from './componets/heroes/heroes.component';
import { AboutComponent } from './componets/about/about.component';
import { HeroeViewComponent } from './componets/heroe-view/heroe-view.component';

// import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeViewComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
