import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  loginForm: FormGroup;

  constructor(private userService:UsersService,private router:Router) {
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
    this.userService.authUser(this.loginForm.value).subscribe(
      (found:any)=>{
        Swal.fire({
          title: 'Success',
          text: 'Welcome back ' +this.loginForm.value.username,
          background: '#2e2e2e',  // Fondo oscuro
          color: '#ffffff',
          icon: 'success',
          timer: 2000,  
          timerProgressBar: true,
          showConfirmButton: false
        }).then(() => {
          
          this.router.navigate(['/Home']);
        });;
      },
      (error:any)=>{
        Swal.fire({
          title: 'Error',
          text: 'Authentication failed or user not found',
          background: '#2e2e2e',
          color: '#ffffff',
          icon: 'error',
          confirmButtonColor: '#f79737',
          confirmButtonText: 'OK'
        });
      }
);



  }


  

}
