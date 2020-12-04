import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsieComponent } from './asie.component';

describe('AsieComponent', () => {
  let component: AsieComponent;
  let fixture: ComponentFixture<AsieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
