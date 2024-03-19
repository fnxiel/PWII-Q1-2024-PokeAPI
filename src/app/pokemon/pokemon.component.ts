import { Component, Input, OnInit } from '@angular/core';
import { IPokemonResult } from '../interfaces/IPokemonResult';
import { IPokemonDetalle } from '../interfaces/IPokemonDetalle';
import { PokeapiService } from '../pokeapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  @Input() public pokemonResult?: IPokemonResult
  public pokemon?: IPokemonDetalle
  public cargando: boolean = true

  constructor(private pokeApi: PokeapiService){}

  ngOnInit(): void {
    this.cargando =true
    this.pokeApi.getPokemonDetalle(this.pokemonResult?.url || '')
    .subscribe(pokemon => {
      this.pokemon = pokemon
      this.cargando = false
    })
  }
}
