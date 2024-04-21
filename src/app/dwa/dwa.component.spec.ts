import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwaComponent } from './dwa.component';

describe('DwaComponent', () => {
  let component: DwaComponent;
  let fixture: ComponentFixture<DwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
