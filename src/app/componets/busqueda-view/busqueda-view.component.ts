import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-busqueda-view',
  templateUrl: './busqueda-view.component.html',
  styleUrls: ['./busqueda-view.component.css']
})
export class BusquedaViewComponent implements OnInit {
  heroes: any[] = [];
  busqueda: string;

  constructor(private _activateRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this._activateRoute.params.subscribe(params => {
      if (params && params.termino) {
        this.busqueda = params.termino;
        this.heroes = this._heroesService.buscarHeroe(params.termino);
        console.log(this.heroes);
      }
    });
  }

  ngOnInit() { }

}
