import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-zoom',
  templateUrl: './portfolio-zoom.component.html',
  styleUrls: ['./portfolio-zoom.component.scss']
})
export class PortfolioZoomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() isPortHidden = {
    hideArt: false,
    hideWeb: false,
    hideGraph: false
}

}
