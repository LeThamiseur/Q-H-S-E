import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotationBackComponent } from './dotation-back.component';

describe('DotationBackComponent', () => {
  let component: DotationBackComponent;
  let fixture: ComponentFixture<DotationBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DotationBackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DotationBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
