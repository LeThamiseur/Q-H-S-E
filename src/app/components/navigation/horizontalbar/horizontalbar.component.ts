import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-horizontalbar',
  templateUrl: './horizontalbar.component.html',
  styleUrl: './horizontalbar.component.css'
})
export class HorizontalbarComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getUser();
  }
  logOut() {
    this.authService.logout();
  }

}
