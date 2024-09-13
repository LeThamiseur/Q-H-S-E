import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDotationComponent } from './edit-dotation.component';

describe('EditDotationComponent', () => {
  let component: EditDotationComponent;
  let fixture: ComponentFixture<EditDotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
