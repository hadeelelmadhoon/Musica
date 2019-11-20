import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeAndTakedownComponent } from './notice-and-takedown.component';

describe('NoticeAndTakedownComponent', () => {
  let component: NoticeAndTakedownComponent;
  let fixture: ComponentFixture<NoticeAndTakedownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeAndTakedownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeAndTakedownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
