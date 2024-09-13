import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRisqueComponent } from './add-risque.component';

describe('AddRisqueComponent', () => {
  let component: AddRisqueComponent;
  let fixture: ComponentFixture<AddRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRisqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
