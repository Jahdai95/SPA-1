import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe-view',
  templateUrl: './heroe-view.component.html',
  styleUrls: ['./heroe-view.component.css']
})
export class HeroeViewComponent {
  heroe: any = {}; // variable local para mostrar en la vista detalle de heroe
  images = {
    marvel: 'assets/img/marvel-logo.png',
    dc: 'assets/img/dc-logo.jpg'
  };
  options = {
    marvel: 'Marvel',
    dc: 'DC'
  };

  constructor(private activateRoute: ActivatedRoute,
              private _heroesService: HeroesService
            ) {
    this.activateRoute.params.subscribe( params => {
      // console.log(params);
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });

   }

}
