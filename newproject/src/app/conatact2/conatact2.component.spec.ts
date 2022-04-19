import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conatact2Component } from './conatact2.component';

describe('Conatact2Component', () => {
  let component: Conatact2Component;
  let fixture: ComponentFixture<Conatact2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conatact2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conatact2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
