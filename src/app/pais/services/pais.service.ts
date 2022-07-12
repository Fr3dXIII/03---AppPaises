import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlApi    : string = 'https://restcountries.com/v2'; 



  constructor(
    public http:HttpClient
  ) { }

  buscarPorNombre(termino:any):Observable<Country[]> {
    return this.http.get<Country[]>(this.urlApi + `/name/${termino}`);
  }

  buscarPorRegion(termino:any):Observable<Country[]>{
    return this.http.get<Country[]>(this.urlApi + `/regionalbloc/${termino}`);
  }


  buscarPorCapital(termino:any):Observable<Country[]>{
    return this.http.get<Country[]>(this.urlApi + `/capital/${termino}`);
  }

  getPaisByAlpha(id:any):Observable<Country>{
    return this.http.get<Country>(this.urlApi + `/alpha/${id}`);
  }
}
