import { Component } from "@angular/core";
// import { ART_CARDS } from "src/app/portfolio-cards";
// import { WEB_CARDS } from "src/app/portfolio-cards";
// import { GRAPH_CARDS } from "src/app/portfolio-cards";

@Component({
    selector: "app-portfolio",
    templateUrl: "./portfolio.component.html",
    styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent {
    // artCards = ART_CARDS;
    // webCards = WEB_CARDS;
    // graphCards = GRAPH_CARDS;

    isPortHidden = {
        hideArt: false,
        hideWeb: false,
        hideGraph: false
    }

    areAllShown: boolean = true;

    filter(arg: "hideArt" | "hideWeb" | "hideGraph" | "all"): void {

        if (arg == 'all') {
            this.areAllShown = true;;
            let tag: "hideArt" | "hideWeb" | "hideGraph";
            for (tag in this.isPortHidden) {
                this.isPortHidden[tag] = false;
            }
        } else {
            if (this.areAllShown == true) {
                this.areAllShown = false;
                let tag: "hideArt" | "hideWeb" | "hideGraph";
                for (tag in this.isPortHidden) {
                    this.isPortHidden[tag] = true;
                }
                this.isPortHidden[arg] = false;
            } else if (this.isPortHidden[arg] == false) {
                this.isPortHidden[arg] = true;
            } else {
                this.isPortHidden[arg] = false;
            }
        }

        this.checkAll();

    }
    checkAll(): void {

        let art = this.isPortHidden.hideArt;
        let web = this.isPortHidden.hideWeb;
        let graph = this.isPortHidden.hideGraph;

        if (art == false && web == false && graph == false) {
            this.areAllShown = true;
        } else if (art == true && web == true && graph == true) {
            this.filter('all');
        }
    }
};