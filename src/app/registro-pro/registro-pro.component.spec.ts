import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProComponent } from './registro-pro.component';

describe('RegistroProComponent', () => {
  let component: RegistroProComponent;
  let fixture: ComponentFixture<RegistroProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
