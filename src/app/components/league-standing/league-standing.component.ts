import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StandingObject, StandingLeague } from '../../model/football.model';
import { ApiserviceService } from '../../services/apiservice.service';

@Component({
  selector: 'app-league-standing',
  templateUrl: './league-standing.component.html',
  styleUrl: './league-standing.component.css'
})
export class LeagueStandingComponent implements OnInit {
  public leagueid?: number;
  standingData: StandingLeague[] = [];

  constructor(private routes: ActivatedRoute, private apiService: ApiserviceService) { }

  getFootballData() {
    this.apiService.getStandingData(this.leagueid!).subscribe((data:StandingObject) => {
      this.standingData = data.response[0]?.league?.standings[0];
    });
  }

  ngOnInit(): void { 
    this.routes.params.subscribe(param => {      
      this.leagueid = +(param['leagueid']); 
      this.getFootballData();
    });
  }

}
