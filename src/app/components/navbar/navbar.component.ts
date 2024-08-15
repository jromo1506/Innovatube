import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  ngAfterViewInit(): void {
    // Inicializa los tooltips
    (document.querySelectorAll('[data-bs-toggle="tooltip"]') as NodeListOf<HTMLElement>).forEach((tooltip) => {
      new bootstrap.Tooltip(tooltip);
    });
  }

}
