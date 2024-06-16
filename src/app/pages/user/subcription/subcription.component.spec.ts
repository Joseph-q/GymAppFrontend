import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionComponent } from './subcription.component';

describe('SubcriptionComponent', () => {
  let component: SubcriptionComponent;
  let fixture: ComponentFixture<SubcriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubcriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
