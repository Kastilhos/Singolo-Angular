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

  totalImgs() {

    let allImgs: PortfolioCards[] = [];

    this.getArt()
      .subscribe(art => allImgs = [...allImgs,...art])

    this.getWeb()
      .subscribe(web => allImgs = [...allImgs,...web])

    this.getGraph()
      .subscribe(graph => allImgs = [...allImgs,...graph])

    return allImgs//.sort((a,b) => a.order - b.order);
  }

};