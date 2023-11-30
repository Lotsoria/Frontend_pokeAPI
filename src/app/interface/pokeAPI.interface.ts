
export interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}
export interface pokeAPI {
    nombre: string;
    id: number;
    habilidades: string[];
    imagenes: string;
    tipos: PokemonType[];
}