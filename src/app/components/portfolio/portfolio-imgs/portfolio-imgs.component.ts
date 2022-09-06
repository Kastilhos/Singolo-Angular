import { Component, Input, OnInit } from "@angular/core";
import { PortfolioService } from "src/app/services/portfolio/portfolio.service";
import { PortfolioCards } from "src/app/Interfaces/cards";

@Component({
    selector: 'app-portfolio-imgs',
    templateUrl: './portfolio-imgs.component.html',
    styleUrls: ['./portfolio-imgs.component.scss']
})

export class PortfolioImgsComponent implements OnInit {

    constructor(private portfolioService: PortfolioService) { }

    ngOnInit() {
        this.totalImgs();
    }

    @Input() isPortHidden = {
        hideArt: false,
        hideWeb: false,
        hideGraph: false
    };

    allImgs: PortfolioCards[] = [];

    totalImgs() {

        this.allImgs = [];

        if (this.isPortHidden.hideArt == false) {
            this.portfolioService.getArt()
                .subscribe(art => this.allImgs = [...this.allImgs, ...art])
        }

        if (this.isPortHidden.hideWeb == false) {
            this.portfolioService.getWeb()
                .subscribe(web => this.allImgs = [...this.allImgs, ...web])
        }

        if (this.isPortHidden.hideGraph == false) {
            this.portfolioService.getGraph()
                .subscribe(graph => this.allImgs = [...this.allImgs, ...graph])
        }

        return this.allImgs.sort((a, b) => a.order - b.order);

    };

    selectedImgIndex: number = 0
    imgShown = false;

    select(a: number): void {
        this.selectedImgIndex = a;
        this.imgShown = true;
    };

    closeReceptor(close: boolean) {
        this.imgShown = close;
    }

    nextReceptor(next: number) {
        this.selectedImgIndex = next;
    }

    previousReceptor(previous: number) {
        this.selectedImgIndex = previous;
    }

};