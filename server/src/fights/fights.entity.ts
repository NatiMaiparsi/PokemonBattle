import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fights') 
export class Fights {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'firstPokemonId', length: 70, nullable: false })
  firstPokemonId: string;

  @Column({ name: 'firstPokemonName', length: 70, nullable: false })
  firstPokemonName: string;

  @Column({ name: 'secondPokemonId', nullable: false })
  secondPokemonId: string;
  
  @Column({ name: 'secondPokemonName', nullable: false })
  secondPokemonName: string;

  @Column({ name: 'winnerId', nullable: false })
  winnerId: string;
  
  @Column({ name: 'winnerName', nullable: false })
  winnerName: string;
}