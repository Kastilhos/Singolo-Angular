import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Slides } from "src/app/Interfaces/slides";
import { SliderService } from "src/app/services/slider/slider.service";

@Component( {
    selector: "app-slider",
    templateUrl: "./slider.component.html",
    styleUrls: ["./slider.component.scss"]

})

export class SliderComponent implements OnInit{
    
    constructor (private sliderService: SliderService) {}
    
    @ViewChild("sliderId") slider!: ElementRef;
    sliderElement!: HTMLElement;

    ngOnInit() {
        this.getSlides();
        this.sliderElement = this.slider.nativeElement;
    }

    slides: Slides[] = [];

    getSlides():void {
        this.sliderService.getSlides()
            .subscribe(slide => this.slides = slide)
    }

    slideCounter = 1;
    slideWidth = -100

    sliderPrevious() {
        this.slideCounter--;
        this.sliderElement.style.marginLeft = `${this.slideCounter * this.slideWidth}%`
        
        if (this.slideCounter == 0) {
            this.slideCounter = this.slides.length;
            this.sliderElement.style.transition = "0";
            this.sliderElement.style.marginLeft = `${this.slideCounter * this.slideWidth}%`
            this.sliderElement.style.transition = ".75s";
        }
    }

    sliderNext() {
        console.log("why god")
        this.slideCounter++;
        this.sliderElement.style.marginLeft = `${this.slideCounter * this.slideWidth}%`
        
        if (this.slideCounter == this.slides.length + 1) {
            this.slideCounter = 1;
            this.sliderElement.style.transition = "0";
            this.sliderElement.style.marginLeft = `0px`
            this.sliderElement.style.transition = ".75s";
        }
    }

    // sliderMotion(arg: string): void {
    //     console.log("why god, why")
    //     if (arg == "next") {
    //         this.slideCounter++;
    //         this.sliderElement.style.marginLeft = `${this.slideCounter * this.slideWidth}%`
            
    //         if (this.slideCounter == this.slides.length + 1) {
    //             this.slideCounter = 1;
    //             this.sliderElement.style.transition = "0";
    //             this.sliderElement.style.marginLeft = `0px`
    //             this.sliderElement.style.transition = ".75s";
    //         }
    //     }

    //     if (arg == "previous")  {
    //         this.slideCounter--;
    //         this.sliderElement.style.marginLeft = `${this.slideCounter * this.slideWidth}%`
            
    //         if (this.slideCounter == 0) {
    //             this.slideCounter = this.slides.length;
    //             this.sliderElement.style.transition = "0";
    //             this.sliderElement.style.marginLeft = `${this.slideCounter * this.slideWidth}%`
    //             this.sliderElement.style.transition = ".75s";
    //         }
    //     }
    // }
};