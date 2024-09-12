import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fights } from './fights.entity';
import { Repository } from 'typeorm';
import { FightDto } from './dto/fight.dto';

@Injectable()
export class FightsService {
    constructor(@InjectRepository(Fights) private fightsRepository: Repository<Fights>) { }
    saveFight(fight: FightDto){
        const newFight = this.fightsRepository.create(fight);
        return this.fightsRepository.save(newFight);
        
    }
}
