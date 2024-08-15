import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCarrouselComponent } from './video-carrousel.component';

describe('VideoCarrouselComponent', () => {
  let component: VideoCarrouselComponent;
  let fixture: ComponentFixture<VideoCarrouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoCarrouselComponent]
    });
    fixture = TestBed.createComponent(VideoCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
