import { Component } from "@angular/core";
import { ABOUT_CARDS } from "src/app/about-cards";

@Component({
    selector: "app-about-cards",
    templateUrl: './about-cards.component.html',
    styleUrls: ['./about-cards.component.scss']
})

export class AboutCardsComponent {
    aboutCards = ABOUT_CARDS;
};