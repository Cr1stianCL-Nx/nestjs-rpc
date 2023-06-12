import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [
    HeroModule,
    /*     ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: join(__dirname, 'hero/hero.proto'),
        },
      },
    ]), */
  ],
  providers: [AppService],
})
export class AppModule {}
