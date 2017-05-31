import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {

  constructor(private _http: Http) {}

  search(term: string): Observable<Hero[]> {
    return this._http
               .get(`app/heroes/?name=${term}`)
               .map(response => response.json().data as Hero[]);
  }

}
