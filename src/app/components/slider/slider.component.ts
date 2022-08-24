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

    slideCounter = 1;
    currentSlide = "-100%"

    sliderMotion(arg: string): void {
        arg == "next" ? this.slideCounter++ :
        this.slideCounter--;
        this.getMargin();
        console.log(this.currentSlide)
    }
    
    getMargin(): void {
        this.currentSlide = `-${this.slideCounter * 100}%`
    }
};