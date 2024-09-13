import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUTComponent } from './edit-ut.component';

describe('EditUTComponent', () => {
  let component: EditUTComponent;
  let fixture: ComponentFixture<EditUTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditUTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
