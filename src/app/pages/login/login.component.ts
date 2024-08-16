import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      Swal.fire({
        title: 'Success',
        text: 'Your account has been registered',
        background: '#2e2e2e',  // Fondo oscuro
        color: '#ffffff',
        icon: 'success',
        confirmButtonColor: '#f79737',
        
        confirmButtonText: 'Yeah'
      });
      
    } else {
      var pwdMiss=document.getElementById("pwd") as HTMLDivElement;
      pwdMiss.style.display="block";
    }
  }


  

}
