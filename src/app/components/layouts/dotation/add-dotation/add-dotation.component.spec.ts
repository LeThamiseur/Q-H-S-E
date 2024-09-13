import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDotationComponent } from './add-dotation.component';

describe('AddDotationComponent', () => {
  let component: AddDotationComponent;
  let fixture: ComponentFixture<AddDotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
