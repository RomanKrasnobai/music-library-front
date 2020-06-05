import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicInstrumentsComponent } from './music-instruments.component';

describe('MusicInstrumentsComponent', () => {
  let component: MusicInstrumentsComponent;
  let fixture: ComponentFixture<MusicInstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicInstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
