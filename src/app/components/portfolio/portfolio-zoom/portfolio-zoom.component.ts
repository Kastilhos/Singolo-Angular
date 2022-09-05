import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';
import { PortfolioCards } from 'src/app/Interfaces/cards';

@Component({
  selector: 'app-portfolio-zoom',
  templateUrl: './portfolio-zoom.component.html',
  styleUrls: ['./portfolio-zoom.component.scss']
})

export class PortfolioZoomComponent implements OnInit {

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  };

  // @Input() art?: PortfolioCards[];
  // @Input() web?: PortfolioCards[]
  // @Input() graph?: PortfolioCards[];
  @Input() allImgs?: PortfolioCards[];
  // @Input() selectedImg?: PortfolioCards;
  // @Input() isPortHidden = {
  //   hideArt: false,
  //   hideWeb: false,
  //   hideGraph: false
  // };

  selectedImg!: PortfolioCards;
  selectedImgSrc?: number;
  imgShown = false;

  select(a: number): void {
    console.log(this.allImgs![a])
    // this.selectedImg = this.allImgs![a];
    // this.selectedImgSrc = a;
    // this.imgShown = true;
  };

  next() { };

  previous() { };

  close(): void {
    this.imgShown = false;
   };

}
