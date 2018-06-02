import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GitsearchService } from './service/gitsearch.service';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GitsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
