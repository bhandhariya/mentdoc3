import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/shared/header/header.component';
import { Slider1Component } from './home/shared/slider1/slider1.component';
import { Feature1Component } from './home/shared/feature1/feature1.component';
import { WhychooseusComponent } from './home/shared/whychooseus/whychooseus.component';
import { Model1Component } from './home/shared/model1/model1.component';
import { TestomonialComponent } from './home/shared/testomonial/testomonial.component';
import { CounterComponent } from './home/shared/counter/counter.component';
import { GallaryComponent } from './home/shared/gallary/gallary.component';
import { SecurityComponent } from './security/security.component';
import { BannerComponent} from './security/shared/banner/banner.component';
import { SecureComponent} from './security/shared/secure/secure.component';
import {MixingComponent} from './security/shared/mixing/mixing.component';
import {FaqComponent} from './security/shared/faq/faq.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Slider1Component,
    Feature1Component,
    WhychooseusComponent,
    Model1Component,
    TestomonialComponent,
    CounterComponent,
    GallaryComponent,
    SecurityComponent,
    FaqComponent,
    MixingComponent,
    SecureComponent,
    BannerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
