import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemons } from './pokemons.entity';
import { Repository } from 'typeorm';
import { FightPokemonDto } from './dto/pokemon.dto';

@Injectable()
export class PokemonsService {
  constructor(@InjectRepository(Pokemons) private pokemonsRepository: Repository<Pokemons>) { }
  saveAllPokemons() {
    const pokemons = [
      {
        "id": "pokemon-1",
        "name": "Pikachu",
        "attack": 4,
        "defense": 3,
        "hp": 3,
        "speed": 6,
        "type": "Type",
        "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
      },
      {
        "id": "pokemon-2",
        "name": "Charmander",
        "attack": 4,
        "defense": 3,
        "hp": 3,
        "speed": 4,
        "type": "Type",
        "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"
      },
      {
        "id": "pokemon-3",
        "name": "Squirtle",
        "attack": 3,
        "defense": 4,
        "hp": 3,
        "speed": 3,
        "type": "Type",
        "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"
      },
      {
        "id": "pokemon-4",
        "name": "Bulbasur",
        "attack": 4,
        "defense": 3,
        "hp": 3,
        "speed": 3,
        "type": "Type",
        "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
      },
      {
        "id": "pokemon-5",
        "name": "Eevee",
        "attack": 4,
        "defense": 3,
        "hp": 4,
        "speed": 5,
        "type": "Type",
        "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png"
      }
    ]
    pokemons.map((e) => {
      const newPokemon = this.pokemonsRepository.create(e);
       this.pokemonsRepository.save(newPokemon);
    })
    return
  }

  getAllPokemons() {
    return this.pokemonsRepository.find();
  }

  fightPokemons(pokemons: FightPokemonDto[]) {

    const fight = (p1:FightPokemonDto, p2:FightPokemonDto) => {
      let firstPokemon:FightPokemonDto, secondPokemon:FightPokemonDto;
    
      // Determinar quién va primero basado en velocidad y ataque
      if (p1.speed > p2.speed || (p1.speed === p2.speed && p1.attack > p2.attack)) {
        firstPokemon = p1;
        secondPokemon = p2;
      } else {
        firstPokemon = p2;
        secondPokemon = p1;
      }
    
      // Función auxiliar para calcular daño
      const calculateDamage = (attacker:FightPokemonDto, defender:FightPokemonDto) => {
        const damage = attacker.attack > defender.defense ? attacker.attack - defender.defense : 1;
        defender.hp -= damage;
      };
    
      // Ciclo de pelea por turnos
      while (firstPokemon.hp > 0 && secondPokemon.hp > 0) {
        // Primer Pokémon ataca
        calculateDamage(firstPokemon, secondPokemon);
        if (secondPokemon.hp <= 0) return firstPokemon; // Si el segundo Pokémon se queda sin HP, gana el primero.
    
        // Segundo Pokémon ataca
        calculateDamage(secondPokemon, firstPokemon);
        if (firstPokemon.hp <= 0) return secondPokemon; // Si el primer Pokémon se queda sin HP, gana el segundo.
      }
    }

    const winner = fight(pokemons[0], pokemons[1]);
    return winner;
  }
}
