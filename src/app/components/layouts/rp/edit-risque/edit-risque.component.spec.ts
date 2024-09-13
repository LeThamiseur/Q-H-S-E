import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRisqueComponent } from './edit-risque.component';

describe('EditRisqueComponent', () => {
  let component: EditRisqueComponent;
  let fixture: ComponentFixture<EditRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRisqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
