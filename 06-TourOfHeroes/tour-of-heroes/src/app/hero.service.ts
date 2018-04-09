import { Injectable } from '@angular/core';
import { Observable} from "rxjs/Observable";
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {of} from "rxjs/observable/of";
import { MessageService} from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  /*
  // the old one
  getHeroes(): Observable<Hero[]> {
  this.messageService.add('HeroService: fetched heroes');
  return of(HEROES);
  }  */

/** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }


  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
