import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-find',
  templateUrl: './data-find.component.html',
  styleUrls: ['./data-find.component.scss']
})
export class DataFindComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  userId : any;
  ngOnInit(): void {
    this.userId=this.route.snapshot.paramMap.get('id')
  }

}
