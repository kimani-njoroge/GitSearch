import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';

import { GitsearchService } from './service/gitsearch.service';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HighlightDirective } from './highlight.directive';
import { ReposComponent } from './repos/repos.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HighlightDirective,
    ReposComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [GitsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
