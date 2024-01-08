import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { LeagueStandingComponent } from './components/league-standing/league-standing.component';
import { TeamFixturesComponent } from './components/team-fixtures/team-fixtures.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from './services/apiservice.service';


@NgModule({
    declarations: [
      LeagueStandingComponent,
      TeamFixturesComponent,
      NavBarComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      HttpClientModule,
           
    ],
    providers: [ApiserviceService],
    exports:[LeagueStandingComponent,TeamFixturesComponent,NavBarComponent]
    
  })
  export class AppModule { }