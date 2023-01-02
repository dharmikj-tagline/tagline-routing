import { Component, OnInit } from '@angular/core';

export interface About{
  name : string,
  profileUpdated : boolean
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about : About[]=[
    {
      name : 'DJ',
      profileUpdated : true
    },
    {
      name : 'MH',
      profileUpdated : false
    },
    {
      name : 'PK',
      profileUpdated : true
    }
  ]

  property : string[]=['Name','Profile Updated'];

}
