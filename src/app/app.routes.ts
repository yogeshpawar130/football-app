import { Routes } from '@angular/router';
import { LeagueStandingComponent } from './components/league-standing/league-standing.component';
import { TeamFixturesComponent } from './components/team-fixtures/team-fixtures.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '39', pathMatch: 'full'

    },
    {
        path: ':leagueid', component: LeagueStandingComponent,

    },
    {
        path: ':leagueid/:teamid', component: TeamFixturesComponent,

    }

];


