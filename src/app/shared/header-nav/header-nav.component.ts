import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  btnHeader: string = 'Admin';
  btnHeaderStyle: string = 'display: flex; justify-content: end;';
  btnHeaderType:  string ='button';
  label : string[]=['Case Study','Services','Blogs','Technology','Contact Us'];
  taglineImg: string = '../assets/../assets/images/tagline.png';

}
