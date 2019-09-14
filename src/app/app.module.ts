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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Slider1Component,
    Feature1Component,
    WhychooseusComponent,
    Model1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
