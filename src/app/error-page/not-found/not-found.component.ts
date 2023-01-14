import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  imageSrc!:string;
  constructor() { }

  ngOnInit(): void {
    this.imageSrc='/assets/images/404.png';
  }

}
