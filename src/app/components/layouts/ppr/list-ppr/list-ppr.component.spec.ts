import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPprComponent } from './list-ppr.component';

describe('ListPprComponent', () => {
  let component: ListPprComponent;
  let fixture: ComponentFixture<ListPprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPprComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
