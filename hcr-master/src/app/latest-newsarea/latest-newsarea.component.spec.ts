import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsareaComponent } from './latest-newsarea.component';

describe('LatestNewsareaComponent', () => {
  let component: LatestNewsareaComponent;
  let fixture: ComponentFixture<LatestNewsareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestNewsareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
