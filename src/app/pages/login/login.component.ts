import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  loginForm: FormGroup;

  constructor(private userService:UsersService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authUser();   
    } else {
      var pwdMiss=document.getElementById("pwd") as HTMLDivElement;
      pwdMiss.style.display="block";
    }
  }


  authUser(){
    this.userService.authUser(this.loginForm.value).pipe(
      switchMap((auth: any) => this.userService.getUser(auth))
    ).subscribe(
      (found: any) => {
        Swal.fire({
          title: 'Success',
          text: 'Your account has been registered',
          background: '#2e2e2e',  // Fondo oscuro
          color: '#ffffff',
          icon: 'success',
          confirmButtonColor: '#f79737',
          confirmButtonText: 'Yeah'
        });
      },
      (error) => {
        // Manejar errores aquí, si es necesario
        console.error('Error:', error);
      }
    );
  }


  

}
