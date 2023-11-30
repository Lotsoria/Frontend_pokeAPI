import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pokeAPI } from '../../interface/pokeAPI.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {
  private url = 'http://localhost:3001/pokeAPI/findPokemon';
  constructor(
    private http: HttpClient
  ) { }

  obtenerPokemon(){
    return this.http.get<pokeAPI>(`${this.url}/80`);
  }
  obtenerPokemon2(pokemon: any){
    return this.http.get<pokeAPI>(`${this.url}/${pokemon}`);
  }
}
