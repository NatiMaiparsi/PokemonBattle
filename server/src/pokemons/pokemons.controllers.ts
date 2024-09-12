import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { PokemonsService } from "./pokemons.service";
import { FightPokemonDto } from "./dto/pokemon.dto";
import { Pokemons } from "./pokemons.entity";
import { Response } from "express";

@Controller()
export class PokemonsController {
    constructor(private pokemonsService: PokemonsService){}
    // Save all the pokemons in a table
    @Post('/pokemons')
    saveAllPokemons(@Res() res: Response) {
        this.pokemonsService.saveAllPokemons();
        res.status(200).send({ message: 'Pokemons created successfully' })
    }
    // Get all the pokemons from the database
    @Get('/pokemons')
    getAllPokemons(): Promise<Pokemons[]>{
        return this.pokemonsService.getAllPokemons();
    }

    @Post('/fightPokemons')
    fightPokemons(@Body() pokemons: FightPokemonDto[]){
        return this.pokemonsService.fightPokemons(pokemons);
    }
}