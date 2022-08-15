import { Component } from "@angular/core";
import {SERVICE_CARDS} from "src/app/service-cards"

@Component({
    selector: 'app-service-cards',
    templateUrl: './service-cards.component.html',
    styleUrls: ['./service-cards.component.scss']
})

export class ServiceCardsComponent {
    ServCards = SERVICE_CARDS;
}