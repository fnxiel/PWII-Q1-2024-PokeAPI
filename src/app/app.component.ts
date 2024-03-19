import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeapiService } from './pokeapi.service';
import { PokedexComponent } from './pokedex/pokedex.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokedexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Pokedex';

  constructor(private PokeApi: PokeapiService){

  }

  ngOnInit(): void {
    this.PokeApi.getPokemons(100)
  }

}
