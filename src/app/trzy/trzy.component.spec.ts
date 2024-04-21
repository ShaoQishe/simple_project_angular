import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrzyComponent } from './trzy.component';

describe('TrzyComponent', () => {
  let component: TrzyComponent;
  let fixture: ComponentFixture<TrzyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrzyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
