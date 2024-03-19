import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../interfaces/IPokemon';
import { PokeapiService } from '../pokeapi.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, FormsModule,PokemonComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {
  pokemons?: IPokemon
  cargando: boolean = true
  cantidad: number = 50

  constructor(private pokeApi: PokeapiService){
    
  }

  ngOnInit(): void {
    this.cargarPokemons()
  }

  cargarPokemons(){
    this.cargando = true
    console.log(this.cantidad)
    this.pokeApi.getPokemons(this.cantidad).subscribe(pokemons =>{
      this.pokemons = pokemons
      this.cargando =false
    })
  }

}
