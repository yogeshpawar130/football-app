import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
  // @Output() notify = new EventEmitter<number>();

  constructor() {

  }

  postCountryData(id: number) {
    console.log(id);
  }

  // notifyParent(){
  //   this.notify.emit(this.selected);

  // }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selected"]) {

    }

  }




  dataflow() {
    // this.onNavChange.emit(24);
  }




  ngOnInit(): void {
    console.log(countryList);
    this.countryList = countryList;
  }

}
