import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HeroById } from './HeroById';
import { Hero } from './hero';

@Controller()
export class HeroController {
  @GrpcMethod('HeroService', 'FindOne')
  findOne(data: HeroById, metadata: any): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
