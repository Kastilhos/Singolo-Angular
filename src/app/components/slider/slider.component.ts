import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Slides } from "src/app/Interfaces/slides";
import { SliderService } from "src/app/services/slider/slider.service";

@Component( {
    selector: "app-slider",
    templateUrl: "./slider.component.html",
    styleUrls: ["./slider.component.scss"]

})

export class SliderComponent implements OnInit, AfterViewInit {
    
    constructor (private sliderService: SliderService) {}

    @ViewChild("sliderId") slider!: ElementRef;

    sliderElement!: HTMLElement;
    
    ngAfterViewInit() {
        this.sliderElement = this.slider.nativeElement;
    }
    

    ngOnInit() {
        this.getSlides();
        this.startUp;
    }

    slides: Slides[] = [];

    getSlides():void {
        this.sliderService.getSlides()
            .subscribe(slide => this.slides = slide)
    }

    slideCounter = 1;
    slideWidth = -100

    startUp = setInterval(() => this.sliderNext(), 4000);

    sliderPrevious() {
        this.sliderElement.style.transition = ".5s";
        this.slideCounter--;
        this.sliderElement.style.marginLeft = `${this.slideCounter * this.slideWidth}%`

        if (this.slideCounter == 0) {
            setTimeout(() => {
                this.sliderPreviousReset()
            },500)
        }
        clearInterval(this.startUp)
        this.startUp = setInterval(() => this.sliderNext(), 4000);
    }

    sliderPreviousReset() {
        this.sliderElement.style.transition = "0s";
        this.slideCounter = 2;
        this.sliderElement.style.marginLeft = `${this.slideCounter * this.slideWidth}%`
    }

    sliderNext() {
        this.sliderElement.style.transition = ".5s";
        this.slideCounter++;
        this.sliderElement.style.marginLeft = `${this.slideCounter * this.slideWidth}%`

        if (this.slideCounter == this.slides.length + 1) {
            setTimeout(() => {
                this.sliderNextReset()
            },500)
        }
        clearInterval(this.startUp)
        this.startUp = setInterval(() => this.sliderNext(), 4000);
    }

    sliderNextReset() {
        this.sliderElement.style.transition = "0s";
        this.slideCounter = 1;
        this.sliderElement.style.marginLeft = `${this.slideCounter * this.slideWidth}%`
    }
};