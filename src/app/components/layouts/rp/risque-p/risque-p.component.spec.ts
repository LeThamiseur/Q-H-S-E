import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisquePComponent } from './risque-p.component';

describe('RisquePComponent', () => {
  let component: RisquePComponent;
  let fixture: ComponentFixture<RisquePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RisquePComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RisquePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
