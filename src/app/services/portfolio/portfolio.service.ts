import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PortfolioCards } from '../../Interfaces/cards';
import { ART_CARDS } from '../../portfolio-cards';
import { GRAPH_CARDS } from '../../portfolio-cards';
import { WEB_CARDS } from '../../portfolio-cards';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getArt(): Observable<PortfolioCards[]> {
    return of(ART_CARDS);
  };

  getWeb(): Observable<PortfolioCards[]> {
    return of(WEB_CARDS);
  };

  getGraph(): Observable<PortfolioCards[]> {
    return of(GRAPH_CARDS);
  };

};