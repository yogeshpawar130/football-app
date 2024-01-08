import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { FixtureObject, fixtureResponse } from '../../model/football.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-fixtures',
  templateUrl: './team-fixtures.component.html',
  styleUrl: './team-fixtures.component.css'
})
export class TeamFixturesComponent implements OnInit {
  public leagueid?: number;
  public teamid?: number;
  result: fixtureResponse[] = [];
  constructor(private routes: ActivatedRoute, private apiService: ApiserviceService, private location: Location) { }

  getFixtureData() {
    this.apiService.getFixtureResult(this.leagueid!, this.teamid!).subscribe((data: FixtureObject) => {
      this.result = data.response;
      localStorage.setItem('resultData', JSON.stringify(this.result));
    })
  }

  backtoStanding() {
    this.location.back();
  }

  ngOnInit(): void {
    this.routes.params.subscribe(param => {
      this.teamid = +(param['teamid']);
      this.leagueid = +(param['leagueid']);
      this.getFixtureData();
    })
    this.result = JSON.parse(localStorage.getItem('resultData') || '[]');
  }

}
