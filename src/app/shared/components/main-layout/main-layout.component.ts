import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  constructor(private router: Router, public auth: AuthService) {}

  ngOnInit(): void {}

  login(event: Event) {
    event.preventDefault();
    if (this.auth.isAuthenticated) {
      this.router.navigate(['user', 'reminder']);
    } else {
      this.router.navigate(['user', 'login']);
    }
  }
}
