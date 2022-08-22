import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PortfolioCards } from '../../Interfaces/cards';
import { ART_CARDS } from '../../portfolio-cards'
import { GRAPH_CARDS } from '../../portfolio-cards'
import { WEB_CARDS } from '../../portfolio-cards'

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  // artCards = of(ART_CARDS);
  // graphCards = of(GRAPH_CARDS);
  // webCards = of(WEB_CARDS);


  getArt(): Observable<PortfolioCards[]> {
    const artCards = of(ART_CARDS);
    return artCards;
  };

  getWeb(): Observable<PortfolioCards[]> {
    const webCards = of(WEB_CARDS);
    return webCards;
  };

  getGraph(): Observable<PortfolioCards[]> {
    const graphCards = of(GRAPH_CARDS);
    return graphCards;
  };


}
