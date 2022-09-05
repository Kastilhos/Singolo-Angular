import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';
import { PortfolioCards } from 'src/app/Interfaces/cards';

@Component({
  selector: 'app-portfolio-zoom',
  templateUrl: './portfolio-zoom.component.html',
  styleUrls: ['./portfolio-zoom.component.scss']
})

export class PortfolioZoomComponent implements OnInit {

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
  };

  @Input() art?: PortfolioCards[];
  @Input() web?: PortfolioCards[]
  @Input() graph?: PortfolioCards[];
  @Input() selectedImg?: number;
  @Input() isPortHidden = {
    hideArt: false,
    hideWeb: false,
    hideGraph: false
  };



  next() {};

  previous() {};

  close () {};

}
