import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicationComponent } from './ubication.component';

describe('UbicationComponent', () => {
  let component: UbicationComponent;
  let fixture: ComponentFixture<UbicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UbicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UbicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
