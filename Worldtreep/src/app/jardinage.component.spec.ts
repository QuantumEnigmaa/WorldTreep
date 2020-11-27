import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JardinageComponent } from './jardinage.component';

describe('JardinageComponent', () => {
  let component: JardinageComponent;
  let fixture: ComponentFixture<JardinageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JardinageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JardinageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
