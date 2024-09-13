import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUTComponent } from './add-ut.component';

describe('AddUTComponent', () => {
  let component: AddUTComponent;
  let fixture: ComponentFixture<AddUTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddUTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
