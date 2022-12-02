import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroIngComponent } from './registro-ing.component';

describe('RegistroIngComponent', () => {
  let component: RegistroIngComponent;
  let fixture: ComponentFixture<RegistroIngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroIngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
