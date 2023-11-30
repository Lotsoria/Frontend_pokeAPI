import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from "../complements/cards/cards.component";
import { ActivatedRoute } from '@angular/router';
import { PokeAPIService } from '../../services/pokeAPI/poke-api.service';
import { pokeAPI } from '../../interface/pokeAPI.interface';
import { HeaderComponent } from "../complements/header/header.component";
@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './css/main.component.css',
    imports: [CommonModule, CardsComponent, HeaderComponent]
})
export class MainComponent implements OnInit {
    dataPokemon : pokeAPI = { nombre: "", id: 0, habilidades: [], imagenes: "", tipos: [] };;
    currentItem: string = '';
    constructor(
        private route: ActivatedRoute,
        private pokeAPI: PokeAPIService
    ){

    }
    ngOnInit(){
        const pokemon = this.route.snapshot.paramMap.get('pokemon');
        if(pokemon){
            this.currentItem = pokemon;
            this.pokeAPI.obtenerPokemon2(pokemon).subscribe({
                next: (data)=>{
                    this.dataPokemon = data
                    console.log("pokemon desde el main: ", data)
                }
            })
        }
    }
}
