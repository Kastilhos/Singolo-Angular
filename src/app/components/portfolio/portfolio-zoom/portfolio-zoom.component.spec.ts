import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioZoomComponent } from './portfolio-zoom.component';

describe('PortfolioZoomComponent', () => {
  let component: PortfolioZoomComponent;
  let fixture: ComponentFixture<PortfolioZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioZoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
