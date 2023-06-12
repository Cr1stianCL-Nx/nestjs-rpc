/* import { Controller, Get, OnModuleInit } from '@nestjs/common'; */

import { Controller, Get, Query, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';

import { AppService } from '../app.service';
import { grpcClientOptions } from '../grpc-client.options';
import { HeroService } from './hero-service';

@Controller()
export class HeroController implements OnModuleInit {
  @Client(grpcClientOptions) private readonly client: ClientGrpc;
  private heroService: HeroService;

  onModuleInit(): void {
    this.heroService = this.client.getService<HeroService>('Rpc');
  }
}
