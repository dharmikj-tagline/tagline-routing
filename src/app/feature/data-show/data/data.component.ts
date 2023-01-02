import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OurService } from 'src/app/services/our.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  users: any;
  constructor(private router: Router, private ourService: OurService) {}

  ngOnInit(): void {
    this.users = this.ourService.users;
  }

  visitUserProfile(userId: number) {
    if(userId){
      this.router.navigateByUrl(`data-show/data/${userId}`);
    }
  }
}
