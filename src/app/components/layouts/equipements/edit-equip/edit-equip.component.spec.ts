import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipComponent } from './edit-equip.component';

describe('EditEquipComponent', () => {
  let component: EditEquipComponent;
  let fixture: ComponentFixture<EditEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditEquipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
