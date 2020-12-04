import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfriqueComponent } from './afrique.component';

describe('AfriqueComponent', () => {
  let component: AfriqueComponent;
  let fixture: ComponentFixture<AfriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
