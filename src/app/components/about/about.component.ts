import { Component } from "@angular/core";
import { ABOUT_CARDS } from "src/app/about-cards";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent {
    aboutCards = ABOUT_CARDS;
};