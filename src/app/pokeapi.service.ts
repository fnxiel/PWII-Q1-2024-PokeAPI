import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPokemon } from './interfaces/IPokemon';
import { Observable } from 'rxjs';
import { IPokemonDetalle } from './interfaces/IPokemonDetalle';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private urlBase = "https://pokeapi.co/api/v2";
  
  constructor(private cliente: HttpClient) { }

  private httpOptions ={
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  getPokemons(limit?: number): Observable<IPokemon>{
    let url = (!limit) ? `${this.urlBase}/pokemon` : `${this.urlBase}/pokemon/?limit=${limit}`

    return this.cliente.get<IPokemon>(url, this.httpOptions)
  }

  getPokemonDetalle(url: string){
    //Url valida
    return this.cliente.get<IPokemonDetalle>(url, this.httpOptions)
    //Validar errores
  }

  

}
