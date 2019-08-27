import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router'; // Para realizar redirecciones

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor (private _heroesService: HeroesService,
               private router: Router
               ) {
   }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(heroeId: number) {
    this.router.navigate(['/heroe', heroeId ]);
  }
}
