import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmeriqueComponent } from './amerique.component';

describe('AmeriqueComponent', () => {
  let component: AmeriqueComponent;
  let fixture: ComponentFixture<AmeriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmeriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmeriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
