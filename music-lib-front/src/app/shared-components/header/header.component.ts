import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentUser = this.authService.currentUserValue;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  manageProfile() {
    this.router.navigate(['/profile']);
  }

  signOut() {
    this.authService.signOut();
  }
}
