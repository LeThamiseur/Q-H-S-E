import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  username: string = '';
  password: string = '';
  showPassword: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(success => {
      if (!success) {
        this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
      }
    });
  }

}
