import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OurService } from 'src/app/services/our.service';

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.scss'],
})
export class DataShowComponent implements OnInit {
  private userId!: number;
  public userDetails: any;

  constructor(
    private ourService: OurService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((response: any) => {
      if (response) {
        this.userId = response.id;
      }
    });

    this.ourService.users.find((res: any) => {
      if (res.id == this.userId) {
        this.userDetails = res;
      }
    });

  }
}
