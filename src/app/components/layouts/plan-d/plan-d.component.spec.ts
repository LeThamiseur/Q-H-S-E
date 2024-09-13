import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDComponent } from './plan-d.component';

describe('PlanDComponent', () => {
  let component: PlanDComponent;
  let fixture: ComponentFixture<PlanDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
