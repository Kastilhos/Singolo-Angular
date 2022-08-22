import { Component, OnInit } from "@angular/core";
import { Slides } from "src/app/Interfaces/slides";
import { SliderService } from "src/app/services/slider/slider.service";

@Component( {
    selector: "app-slider",
    templateUrl: "./slider.component.html",
    styleUrls: ["./slider.component.scss"]

})

export class SliderComponent {

    constructor (private sliderService: SliderService) {}

    ngOnInit() {
        this.getSlides();
    }

    slides: Slides[] = [];

    getSlides():void {
        this.sliderService.getSlides()
            .subscribe(slide => this.slides = slide)
    }

    
    firstSlide = this.slides[0]; //.at(0);
    lastSlide = this.slides[this.slides.length -1];  //.at(-1);

};