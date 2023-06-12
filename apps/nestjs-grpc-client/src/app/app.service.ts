import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, of } from 'rxjs';
import { HeroService } from '../app/hero/hero-service';

@Injectable()
export class AppService implements OnModuleInit {
  private heroService: HeroService;

  constructor(@Inject('HERO_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.heroService = this.client.getService<HeroService>('HeroService');
  }

  getHero(): Observable<any> {
    return this.heroService.findOne({ id: 1 });
  }
}
