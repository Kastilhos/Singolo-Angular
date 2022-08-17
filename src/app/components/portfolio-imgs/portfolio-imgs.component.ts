import { Component } from "@angular/core";
import {PORT_CARDS} from "src/app/portfolio-cards";

@Component({
    selector: 'app-portfolio-imgs',
    templateUrl: './portfolio-imgs.component.html',
    styleUrls: ['./portfolio-imgs.component.scss']
})

export class PortfolioImgsComponent {
    PortCards = PORT_CARDS;
};