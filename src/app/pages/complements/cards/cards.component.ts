import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeAPIService } from '../../../services/pokeAPI/poke-api.service';
import { HttpClientModule } from '@angular/common/http';
import { pokeAPI } from '../../../interface/pokeAPI.interface';
import { TypeColors } from '../../../enums/types.enums';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cards.component.html',
  styleUrl: './css/cards.component.css'
})
export class CardsComponent implements OnInit {
  datosPokemon: pokeAPI = { nombre: "", id: 0, habilidades: [], imagenes: "", tipos: [] };
  coloresPorTipo: string[] = [];
  // @Input() dataPokemonC: pokeAPI = { nombre: "", id: 0, habilidades: [], imagenes: "", tipos: [] };;
  @Input() pokemon?: string;
  colorPorTipo: string = ''; 
  constructor(
    private pokeAPI: PokeAPIService
  ) { }



  obtenerColorPorTipo(tipo: string): string {
    if (TypeColors[tipo]) {
      return TypeColors[tipo];
    } else {
      return '#FFFFFF';
    }
  }
  ngOnInit() {
    const poke = this.pokemon;
    this.pokeAPI.obtenerPokemon2(this.pokemon).subscribe({
      next: (data) => {
        this.datosPokemon = data
        this.coloresPorTipo = data.tipos.map(tipo => this.obtenerColorPorTipo(tipo.type.name));
      }
    })
    // this.dataPokemonC = this.dataPokemonC;
    // console.log("Datos desde la card: ", this.dataPokemonC?.id )
  }
  color(tipo: string): string {
    if (tipo == 'normal') {
      return '#A8A77A'
    }
    else if (tipo == 'fighting') {
      return '#C22E28'
    }
    else if (tipo == 'flying') {
      return '#A98FF3'
    }
    else if (tipo == 'poison') {
      return '#A33EA1'
    }
    else if (tipo == 'ground') {
      return '#E2BF65'
    }
    else if (tipo == 'rock') {
      return '#B6A136'
    }
    else if (tipo == 'bug') {
      return '#A6B91A'
    }
    else if (tipo == 'ghost') {
      return '#735797'
    }
    else if (tipo == 'steel') {
      return '#B7B7CE'
    }
    else if (tipo == 'fire') {
      return '#EE8130'
    }
    else if (tipo == 'water') {
      return '#6390F0'
    }
    else if (tipo == 'grass') {
      return '#7AC74C'
    }
    else if (tipo == 'electric') {
      return '#F7D02C'
    }
    else if (tipo == 'psychic') {
      return '#F95587'
    }
    else if (tipo == 'ice') {
      return '#96D9D6'
    }
    else if (tipo == 'dragon') {
      return '#6F35FC'
    }
    else if (tipo == 'dark') {
      return '#705746'
    }
    else if (tipo == 'fairy') {
      return '#D685AD'
    }
    else if (tipo == 'unknown') {
      return '#68A090'
    }
    else if (tipo == 'shadow') {
      return '#705746 nbh'
    }
    else {
      return '#FFFFFF'
    }
  }
}
