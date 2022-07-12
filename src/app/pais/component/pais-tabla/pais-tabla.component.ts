import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { PaisService } from './../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent  {

  @Input() paises: Country[] = [];

  constructor(
    public paisService :PaisService
  ) { }

  
  
}
