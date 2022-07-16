import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlApi    : string = 'https://restcountries.com/v2'; 

  constructor(
    public http:HttpClient
  ) { }
  
  

  get httpParams(){  
    return new HttpParams().set('fields','numericCode,name,flag,population,capital,alpha2Code');
  } 

  buscarPorNombre(termino:any):Observable<Country[]> {
    return this.http.get<Country[]>(this.urlApi + `/name/${termino}`,{ params:this.httpParams });
  }

  buscarPorRegion(termino:any):Observable<Country[]>{
    return this.http.get<Country[]>(this.urlApi + `/region/${termino}`,{ params:this.httpParams })
      .pipe(
        tap(console.log)
    );
  }//--- Buscar Región -------------------

  buscarPorCapital(termino:any):Observable<Country[]>{
    return this.http.get<Country[]>(this.urlApi + `/capital/${termino}`,{ params:this.httpParams });
  }

  getPaisByAlpha(id:any):Observable<Country>{        
    return this.http.get<Country>(this.urlApi + `/alpha/${id}`);
  }
}
