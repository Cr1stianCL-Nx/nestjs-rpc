import { Module } from '@nestjs/common';

import { HeroController } from './hero/hero.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [HeroController],
  providers: [AppService],
})
export class AppModule {}
