import { Component, Input, OnInit } from "@angular/core";
import { PortfolioService } from "src/app/services/portfolio/portfolio.service";
import { PortfolioCards } from "src/app/Interfaces/cards";

@Component({
    selector: 'app-portfolio-imgs',
    templateUrl: './portfolio-imgs.component.html',
    styleUrls: ['./portfolio-imgs.component.scss']
})

export class PortfolioImgsComponent implements OnInit {

    constructor (private portfolioService: PortfolioService) {}

    ngOnInit() {
        this.getArt();
        this.getGraph();
        this.getWeb();
    }

    art?: PortfolioCards[];
    web?: PortfolioCards[];
    graph?: PortfolioCards[];

    @Input() isPortHidden = {
        hideArt: false,
        hideWeb: false,
        hideGraph: false
    };
    
    getArt(): void {
        this.portfolioService.getArt()
            .subscribe(art => this.art = art)
    }
    getWeb(): void {
        this.portfolioService.getWeb()
            .subscribe(web => this.web = web)
    }
    getGraph(): void {
        this.portfolioService.getGraph()
            .subscribe(graph => this.graph = graph)
    }

};