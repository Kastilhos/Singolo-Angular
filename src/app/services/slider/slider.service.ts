import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SLIDER } from 'src/app/slider';
import { Slides } from 'src/app/Interfaces/slides';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor() { }

  getSlides(): Observable<Slides[]> {
    const slides = of(SLIDER);
    return slides;
  }

}
