import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  loginForm: FormGroup;


  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(''),
      // password: new FormControl('', Validators.required),
      // repassword:new FormControl('', Validators.required)
      // recaptcha: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.loginForm) {
      var email ={
        email:this.loginForm.value.email,
      }
      
        this.userService.forgotPassword(email);
        Swal.fire({
          title: 'Email sent',
          text: 'You will receive an email to reset your password',
          icon: 'success',
          background: '#333', // Fondo oscuro
          color: '#fff', // Texto en blanco
          confirmButtonColor: '#3085d6'
        });
    } else {
      var pwdMiss = document.getElementById("pwd") as HTMLDivElement;
      pwdMiss.style.display = "block";
    }
  }




}
