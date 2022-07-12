import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';


import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService : PaisService
  ) { }

  ngOnInit() {
    
    //--- SwitchMap ---------------------------------------------------
    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisByAlpha(id)),
        tap(console.log)
      )
      .subscribe( dataPais => this.pais = dataPais );

      //--- Con dos llamadas suscribe ----------------------------------
    /* this.activateRoute.params
      //--- Desestructura el suscribe tomando el parametro -------------
      .subscribe( ({id}) => {
        console.log(id);

        this.paisService.getPaisByAlpha(id)
          .subscribe( data => {
            console.log(data);
          });
      }); */

      
      
  }

}
