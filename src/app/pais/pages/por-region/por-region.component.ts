import { Component, OnInit } from '@angular/core';

import { PaisService } from './../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent  {

  regiones      :string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva  :string = '';

  paises    : Country[] = [];

  constructor(
    public paisService :PaisService
  ) { }

  activarRegion(itemRegion:string){    
    if(itemRegion == this.regionActiva){ return; } 

    this.regionActiva = itemRegion;    
    this.paises = [];


    this.paisService.buscarPorRegion(this.regionActiva)
      .subscribe(dataPaises => {
        this.paises = dataPaises;
      });
  }
  

  getClassCSS( regionItem:string):string{
    return (regionItem === this.regionActiva )? 'btn-primary' : 'btn-primary-outline';
  }
}
