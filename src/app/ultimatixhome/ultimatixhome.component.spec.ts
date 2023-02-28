import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimatixhomeComponent } from './ultimatixhome.component';

describe('UltimatixhomeComponent', () => {
  let component: UltimatixhomeComponent;
  let fixture: ComponentFixture<UltimatixhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimatixhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimatixhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
