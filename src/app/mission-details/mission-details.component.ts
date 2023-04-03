import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {
  @Input() flightNumber = '';
  missionName = '';
  launchYear = '';
  details = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`https://api.spacexdata.com/v3/launches/${this.flightNumber}`)
      .subscribe((data: any) => {
        this.missionName = data.mission_name;
        this.launchYear = data.launch_year;
        this.details = data.details;
      });
  }
}
