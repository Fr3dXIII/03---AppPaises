import { Component, Input } from '@angular/core';

import { PaisService } from './../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {  

  termino   : string = '';
  hayError  : boolean = false;
  paises    : Country[] = [];

  constructor(
    public paisService :PaisService
  ) { }

  buscar(event:string){
    this.hayError = false;
    this.termino = event;

    this.paisService.buscarPorCapital(event)
        .subscribe( dataPaises => {          
          this.paises = dataPaises;
        } , (err) => {
          this.hayError = true;
          console.log(err);
          this.paises = [];
        }) ;        
  }


  sugerencias(event:string){
    this.hayError = false;
    this.buscar(event);
  }

}
