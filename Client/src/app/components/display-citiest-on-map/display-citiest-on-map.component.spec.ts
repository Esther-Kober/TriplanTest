import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCitiestOnMapComponent } from './display-citiest-on-map.component';

describe('DisplayCitiestOnMapComponent', () => {
  let component: DisplayCitiestOnMapComponent;
  let fixture: ComponentFixture<DisplayCitiestOnMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCitiestOnMapComponent]
    });
    fixture = TestBed.createComponent(DisplayCitiestOnMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
