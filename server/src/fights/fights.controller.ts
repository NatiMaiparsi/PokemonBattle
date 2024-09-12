import { Body, Controller, Post } from '@nestjs/common';
import { FightsService } from './fights.service';
import { FightDto } from './dto/fight.dto';

@Controller()
export class FightsController {
    constructor(private fightService: FightsService){}

    @Post("/fight")
    saveFight(@Body() fight: FightDto): Promise<FightDto>{
        return this.fightService.saveFight(fight);
    }
}
