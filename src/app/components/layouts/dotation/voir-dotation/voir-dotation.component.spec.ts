import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirDotationComponent } from './voir-dotation.component';

describe('VoirDotationComponent', () => {
  let component: VoirDotationComponent;
  let fixture: ComponentFixture<VoirDotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoirDotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoirDotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
