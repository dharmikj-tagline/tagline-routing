import { Component, OnInit } from '@angular/core';
import { OurService } from 'src/app/services/our.service';

export interface Services {
  img?: string;
  head?: string;
  content?: string;
  link?: string;
  serviceBox7Span?: string;
  button?: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private ourService: OurService) {}

  serviceBoxes : Services[]=[];

  ngOnInit(): void {
    this.serviceBoxes=this.ourService.ourServices;
  }

  // servicesHead : string ='Our Services';

}
