import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public homeText!: string;
  constructor() { }
  imageSrc!: string;
  ngOnInit(): void {
    this.homeText = "mars: the new north star";
    this.imageSrc = '/assets/images/home-background.jpg';
  }

  isAuthenicated = (): boolean => {
    return false;
  }
  logout = () => {
    localStorage.removeItem("jwt");
  }
}
