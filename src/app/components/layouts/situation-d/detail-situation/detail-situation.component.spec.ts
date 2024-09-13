import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSituationComponent } from './detail-situation.component';

describe('DetailSituationComponent', () => {
  let component: DetailSituationComponent;
  let fixture: ComponentFixture<DetailSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailSituationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
