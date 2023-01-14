import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges {

  isLoggedIn!: boolean;
  constructor(private jwtHelper: JwtHelperService,private router:Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.isAuthenticated();
  }

  ngOnInit(): void {
  }
  expired!: boolean;
  isAuthenticated = (): boolean => {
    const token = localStorage.getItem("jwt");

    if (token) {
      this.expired = this.jwtHelper._isTokenExpired(token);
      if (!this.expired) {
        return true;
      }
    }
    return false;
  }
  logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userName");
    console.log(this.isAuthenticated())
    this.router.navigate(["/login"]);
  }

}
