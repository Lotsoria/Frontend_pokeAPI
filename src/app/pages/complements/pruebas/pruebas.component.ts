import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { pokeAPI } from '../../../interface/pokeAPI.interface';
import { PokeAPIService } from '../../../services/pokeAPI/poke-api.service';

@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pruebas.component.html',
  styleUrl: './css/pruebas.component.css'
})
export class PruebasComponent implements OnInit {
  datosPokemon: pokeAPI = {nombre:"",id:0,habilidades:[],imagenes:"", tipos:[]};


  constructor(
    private pokeAPI: PokeAPIService
  ){}
  ngOnInit(){
    this.pokeAPI.obtenerPokemon().subscribe({
      next:(data)=>{
        console.log(data)
        this.datosPokemon = data
      }
    })
  }
}
