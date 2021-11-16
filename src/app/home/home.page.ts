import { AfterViewInit, Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  currentUser: any;
  constructor(private auth: AuthService, private router: Router) {}

  ngAfterViewInit() {
    this.auth.user$.subscribe((user) => {
      if (user === null) {
        this.router.navigate(['user-profile']);
      }
    });
  }
}
