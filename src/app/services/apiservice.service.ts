import { Injectable } from '@angular/core';
import { FixtureObject, StandingObject, cache } from '../model/football.model';
import { Observable,  of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService  {
  cacheData = new Map<string, cache>();
  currentYear: Date | number;
  private apiKey= '8e35709ed13b03a7a1660f8345457a67';
  x_rapidoapi_host   = 'v3.football.api-sports.io'
  private apiUrl = 'https://v3.football.api-sports.io/';
  lastresultFixtures = 10;
  constructor(private http:HttpClient) {
    //  this.currentYear = (new Date()).getFullYear();
    this.currentYear = 2023;
  }

  getStandingData(leagueid:number): Observable<StandingObject> {
    const key = `statndingdata-${leagueid}`;
    if (this.cacheData.has(key)) {
      return of(this.cacheData.get(key) as StandingObject)
    } else {
      const headers = new HttpHeaders({
        'x-rapidapi-host' : this.x_rapidoapi_host,
        'x-rapidapi-key': this.apiKey
      });
      return this.http.get<StandingObject>(`${this.apiUrl}standings?league=${leagueid}&season=${this.currentYear}`, { headers })
      .pipe(
        tap(data => {
          if (Object.keys(data.errors).length == 0) {
            this.cacheData.set(key, data);
          }
        })
      );
      }
  }

  getFixtureResult(leagueid:number,teamsid:number): Observable<FixtureObject> {
    const key = `fixturedata-${leagueid}-${teamsid}`;
    if (this.cacheData.has(key)) {
      return of(this.cacheData.get(key) as FixtureObject);
    } else {
      
      const headers = new HttpHeaders({
        'x-rapidapi-host' :this.x_rapidoapi_host,
        'x-rapidapi-key': this.apiKey
      });
      return this.http.get<FixtureObject>(`${this.apiUrl}fixtures?league=${leagueid}&season=${this.currentYear}&team=${teamsid}&last=${this.lastresultFixtures}`, { headers }).
      pipe(
        tap(data =>  {if (Object.keys(data.errors).length == 0) {
          this.cacheData.set(key, data);
        }
        })
      );
    }
  }

}