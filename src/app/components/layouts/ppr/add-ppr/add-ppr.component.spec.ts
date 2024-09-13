import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPprComponent } from './add-ppr.component';

describe('AddPprComponent', () => {
  let component: AddPprComponent;
  let fixture: ComponentFixture<AddPprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPprComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
