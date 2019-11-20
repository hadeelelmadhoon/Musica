import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicChartsComponent } from './music-charts.component';

describe('MusicChartsComponent', () => {
  let component: MusicChartsComponent;
  let fixture: ComponentFixture<MusicChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
