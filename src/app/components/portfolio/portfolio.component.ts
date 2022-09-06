import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { PortfolioImgsComponent } from "./portfolio-imgs/portfolio-imgs.component";

@Component({
    selector: "app-portfolio",
    templateUrl: "./portfolio.component.html",
    styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent {

    @ViewChild(PortfolioImgsComponent) portImgs?: PortfolioImgsComponent;

    ngAfterViewInit() {
        this.portImgs?.totalImgs();
    }

    isPortHidden = {
        hideArt: false,
        hideWeb: false,
        hideGraph: false
    }

    areAllShown: boolean = true;

    filter(arg: "hideArt" | "hideWeb" | "hideGraph" | "all"): void {

        if (arg == 'all') {
            this.areAllShown = true;
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
        this.portImgs?.totalImgs();

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