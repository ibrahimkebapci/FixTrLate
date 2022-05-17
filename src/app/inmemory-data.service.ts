import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Ali'},
    { id: 12, name: 'veli' },
    { id: 13, name: 'mert'},
    { id: 14, name: 'murat'},
    { id: 15, name: 'cem'},
    { id: 16, name: 'halil' },
    { id: 17, name: 'ibrahim' },
    { id: 18, name: 'kerim' },
    { id: 19, name: 'murat' },
    { id: 20, name: 'mehmet' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}