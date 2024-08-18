import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchQuery: string = '';
  isLoggedIn = false;
  username: string | null = null;

  constructor(private router:Router,private authService: UserAuthService) {
    
  }


  ngOnInit(): void {
    // Suscribirse a los cambios en las credenciales
    this.authService.credentials$.subscribe(credentials => {
      this.isLoggedIn = !!credentials;
      this.username = credentials ? credentials.username : null;
    });
  }


  ngAfterViewInit(): void {
    // Inicializa los tooltips
    (document.querySelectorAll('[data-bs-toggle="tooltip"]') as NodeListOf<HTMLElement>).forEach((tooltip) => {
      new bootstrap.Tooltip(tooltip);
    });

    
  }



    onSearch(): void {
      if (this.searchQuery.trim()) {
        this.router.navigate(['/Search'], { queryParams: { query: this.searchQuery } });
      }
    }


    logout(): void {
      this.authService.clearCredentials();
      
      Swal.fire({
        title: 'Bye bye!',
        text: 'Logged out of your account ',
        background: '#2e2e2e',  // Fondo oscuro
        color: '#ffffff',
        icon: 'info',
        timer: 2500,  
        timerProgressBar: true,
        showConfirmButton: false
      }).then(() => {
        
        this.router.navigate(['/Home']);
      });;
    }
    
  }


