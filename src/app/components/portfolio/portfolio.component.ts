import { Component } from "@angular/core";
import {PORT_CARDS} from "src/app/portfolio-cards";

@Component({
    selector: "app-portfolio",
    templateUrl: "./portfolio.component.html",
    styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent {
    PortCards = PORT_CARDS;
};