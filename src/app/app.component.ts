import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public leagueid ?: number;
  constructor(private routes : ActivatedRoute){}
  
  ngOnInit(): void {
  this.routes.params.subscribe(param => {this.leagueid = +(param['leagueid']);})
  
  
  }
     
  }