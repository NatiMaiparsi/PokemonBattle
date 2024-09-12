import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('pokemons') 
export class Pokemons {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'name', length: 70, nullable: false })
  name: string;

  @Column({ name: 'attack', nullable: false })
  attack: number;

  @Column({ name: 'defense', nullable: false })
  defense: number;

  @Column({name: 'hp', nullable: true})
  hp: number;

  @Column({name: 'speed', nullable: true})
  speed: number;

  @Column({name: 'type', nullable: true})
  type: string;

  @Column({name: 'imageUrl', nullable: true})
  imageUrl: string;
}