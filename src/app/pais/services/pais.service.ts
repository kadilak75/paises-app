import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country} from '../interfaces/interfacePais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL3: string = "https://restcountries.com/v3.1";
  private apiURL2: string = "https://restcountries.com/v2";

  constructor( private httpElement: HttpClient) {
   }

   buscarPaisV3 (termino:string):Observable<Country[]>{
     const url: string = `${this.apiURL3}${termino}`;
     return this.httpElement.get<Country[]>(url);

   }
   buscarPaisV2 (termino:string):Observable<Country[]>{
    const url: string = `${this.apiURL2}${termino}`;
    return this.httpElement.get<Country[]>(url);

  }

   
}
