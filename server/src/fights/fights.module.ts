import { Module } from "@nestjs/common";
import { FightsController } from './fights.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Fights } from "./fights.entity";
import { FightsService } from './fights.service';

@Module({
    imports: [TypeOrmModule.forFeature([Fights])],
    controllers: [FightsController],
    providers: [FightsService]
})
export class FightsModule {}