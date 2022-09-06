import { Component, Input, OnInit, Output, OutputDecorator, EventEmitter } from '@angular/core';
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

  @Output() closeEvent = new EventEmitter<boolean>();
  @Output() nextEvent = new EventEmitter<number>();
  @Output() previousEvent = new EventEmitter<number>();

  @Input() allImgs!: PortfolioCards[];
  @Input() selectedImgIndex!: number;
  @Input() imgShown!: boolean;

  next() {
    return this.selectedImgIndex < this.allImgs.length - 1
      ? ++this.selectedImgIndex
      : this.selectedImgIndex;
  }

  previous() {
    return this.selectedImgIndex > 0
      ? --this.selectedImgIndex
      : this.selectedImgIndex;
  }

  nextEmitter(): void {
    this.nextEvent.emit(this.next());
  };

  previousEmitter(): void {
    this.previousEvent.emit(this.previous());
  };

  closeEmitter(): void {
    this.closeEvent.emit(false);
  };

}
