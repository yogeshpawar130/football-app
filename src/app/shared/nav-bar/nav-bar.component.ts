import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { countryList } from '../../league-details/league-details';
import { leaguesMenu } from '../../model/football.model';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit, OnChanges {
  countryList: leaguesMenu[] = [];
  @Input() selected?: number;

  constructor() {

  }

  postCountryData(id: number) {
    console.log(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selected"]) {
      console.log('selected');
    }
  }

  ngOnInit(): void {
    console.log(countryList);
    this.countryList = countryList;
  }

}
