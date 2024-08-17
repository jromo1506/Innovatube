import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchQuery: string = '';

  constructor(private router:Router) {
    
  }


  ngAfterViewInit(): void {
    // Inicializa los tooltips
    (document.querySelectorAll('[data-bs-toggle="tooltip"]') as NodeListOf<HTMLElement>).forEach((tooltip) => {
      new bootstrap.Tooltip(tooltip);
    });

    
  }

  // searchVideos(): void {
  //   if (this.searchQuery.trim()) {
  //     this.router.navigate(['/Search'], { queryParams: { query: this.searchQuery } });
  //   }

    onSearch(): void {
      if (this.searchQuery.trim()) {
        this.router.navigate(['/Search'], { queryParams: { query: this.searchQuery } });
      }
    }
    

    // if (this.searchQuery.trim()) {

    
    //   this.youtubeService.searchVideos(this.searchQuery, 5);
    //   this.youtubeService.videos$.subscribe(videos => {
    //     this.videos = videos;
    //   });
    // }
  }


