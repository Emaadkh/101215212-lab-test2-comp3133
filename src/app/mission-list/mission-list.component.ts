import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MissionDetailsComponent } from '../mission-details/mission-details.component';


@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  launches: any[] = [];
  year = '';
  selectedFlightNumber = 0;
  errorMessage = '';
  selectedMission: any;


  constructor(private http: HttpClient) {
    this.year = '';
  }

  showDetails(flightNumber: number): void {
    this.selectedFlightNumber = flightNumber;
  }

  ngOnInit() {
    this.http.get<any[]>('https://api.spacexdata.com/v3/launches').subscribe(
      (data: any[]) => {
        this.launches = data;
      },
      (error: any) => {
        this.errorMessage = 'Failed to load SpaceX launches data.';
      }
    );
  }

  searchByYear() {
    this.http.get<any[]>(`https://api.spacexdata.com/v3/launches?launch_year=${this.year}`).subscribe(
      (data: any[]) => {
        this.launches = data;
      },
      (error: any) => {
        this.errorMessage = 'Failed to search SpaceX launches by year.';
      }
    );
  }

  showAll() {
    this.http.get<any[]>('https://api.spacexdata.com/v3/launches').subscribe(
      (data: any[]) => {
        this.launches = data;
      },
      (error: any) => {
        this.errorMessage = 'Failed to load SpaceX launches data.';
      }
    );
  }
}
