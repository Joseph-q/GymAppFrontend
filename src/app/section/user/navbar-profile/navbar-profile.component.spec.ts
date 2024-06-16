import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProfileComponent } from './navbar-profile.component';

describe('NavbarProfileComponent', () => {
  let component: NavbarProfileComponent;
  let fixture: ComponentFixture<NavbarProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
