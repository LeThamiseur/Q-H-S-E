import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotationListComponent } from './dotation-list.component';

describe('DotationListComponent', () => {
  let component: DotationListComponent;
  let fixture: ComponentFixture<DotationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DotationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DotationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
