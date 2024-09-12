import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { FightsModule } from './fights/fights.module';
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'pokemonDB',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}']
    }),
    FightsModule,
    PokemonsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
