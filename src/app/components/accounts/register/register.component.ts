import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user : User = new User();
  showPassword: boolean = false;
  msg = '';

  constructor(private userService: UserService) { }
  saveUser (form:NgForm) {
    if (form.valid){
      this.userService.register(this.user).subscribe(result => {
        console.log('Utilisateur enregistré avec succès', result);
        this.msg = this.user.username + ' enregistré';
        form.resetForm();
      },
      error => {
        console.log("Erreur d'enregistrement",error );
        this.msg = " Erreur d'enregistrement!";
      });
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // saveUser () {
  //   this.msg='Utilisateur '+ this.user.username +' ajouté';
  //   this.user = new User();
  // }

}
