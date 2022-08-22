import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PortfolioImgsComponent } from './components/portfolio-imgs/portfolio-imgs.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    AboutComponent,
    PortfolioComponent,
    ServicesComponent,
    FooterComponent,
    ContactComponent,
    PortfolioImgsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
