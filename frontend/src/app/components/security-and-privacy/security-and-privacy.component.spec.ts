import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAndPrivacyComponent } from './security-and-privacy.component';

describe('SecurityAndPrivacyComponent', () => {
  let component: SecurityAndPrivacyComponent;
  let fixture: ComponentFixture<SecurityAndPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityAndPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityAndPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
