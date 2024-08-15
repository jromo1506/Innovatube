import { AfterViewInit, Component } from '@angular/core';


declare var $: any;


@Component({
  selector: 'app-video-carrousel',
  templateUrl: './video-carrousel.component.html',
  styleUrls: ['./video-carrousel.component.scss']
})
export class VideoCarrouselComponent implements AfterViewInit{



  ngAfterViewInit(): void {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: { items: 1 },
        600: { items: 3 },
        1000: { items: 4 }
      }
    });
  }
}
