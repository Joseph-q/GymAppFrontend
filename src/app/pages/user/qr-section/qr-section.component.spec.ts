import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrSectionComponent } from './qr-section.component';

describe('QrSectionComponent', () => {
  let component: QrSectionComponent;
  let fixture: ComponentFixture<QrSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QrSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
