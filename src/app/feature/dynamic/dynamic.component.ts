import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }

  data =[
    {
      id:1,
      name:'Dharmik',
      cource:'BCA'
    },
    {
      id:2,
      name:'Vishal',
      cource:'BCA'
    },
    {
      id:3,
      name:'Pratik',
      cource:'Computer'
    }
  ]

}
