import { AfterViewInit, Component, Input, OnChanges ,SimpleChanges} from '@angular/core';


declare var $: any;


@Component({
  selector: 'app-video-carrousel',
  templateUrl: './video-carrousel.component.html',
  styleUrls: ['./video-carrousel.component.scss']
})
export class VideoCarrouselComponent implements AfterViewInit, OnChanges{

  @Input() videosYT: any[] = [];
 



  ngAfterViewInit(): void {

    
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: { items: 1 },
        600: { items: 3 },
        1000: { items: 4 }
      }
    });

    console.log(this.videosYT,"Los videos");
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['videosYT']) {
      console.log('Videos updated:', this.videosYT);
    }
  }
}
