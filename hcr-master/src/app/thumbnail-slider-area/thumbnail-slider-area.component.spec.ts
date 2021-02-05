import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailSliderAreaComponent } from './thumbnail-slider-area.component';

describe('ThumbnailSliderAreaComponent', () => {
  let component: ThumbnailSliderAreaComponent;
  let fixture: ComponentFixture<ThumbnailSliderAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailSliderAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailSliderAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
