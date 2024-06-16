import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipsSectionComponent } from './memberships-section.component';

describe('MembershipsSectionComponent', () => {
  let component: MembershipsSectionComponent;
  let fixture: ComponentFixture<MembershipsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembershipsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembershipsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
