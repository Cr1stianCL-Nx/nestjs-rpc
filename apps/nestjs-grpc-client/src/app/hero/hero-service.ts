import { Observable } from 'rxjs';
import { HeroById } from './HeroById';
import { Hero } from './hero';

export interface HeroService {
  findOne(data: HeroById): Observable<Hero>;
  findMany(upstream: Observable<HeroById>): Observable<Hero>;
}
