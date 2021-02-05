import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbodyComponent } from './searchbody.component';

describe('SearchbodyComponent', () => {
  let component: SearchbodyComponent;
  let fixture: ComponentFixture<SearchbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
