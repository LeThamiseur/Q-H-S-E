import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccListComponent } from './acc-list.component';

describe('AccListComponent', () => {
  let component: AccListComponent;
  let fixture: ComponentFixture<AccListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
