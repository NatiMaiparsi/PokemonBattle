import { Module } from '@nestjs/common';
import { PokemonsController } from './pokemons.controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemons } from './pokemons.entity';
import { PokemonsService } from './pokemons.service';

@Module({
    imports: [TypeOrmModule.forFeature([Pokemons])],
    controllers: [PokemonsController],
    providers: [PokemonsService]
})
export class PokemonsModule {}
