import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipComponent } from './add-equip.component';

describe('AddEquipComponent', () => {
  let component: AddEquipComponent;
  let fixture: ComponentFixture<AddEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEquipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
