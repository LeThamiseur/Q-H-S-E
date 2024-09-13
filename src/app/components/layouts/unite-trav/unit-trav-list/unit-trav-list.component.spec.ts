import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTravListComponent } from './unit-trav-list.component';

describe('UnitTravListComponent', () => {
  let component: UnitTravListComponent;
  let fixture: ComponentFixture<UnitTravListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitTravListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnitTravListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
