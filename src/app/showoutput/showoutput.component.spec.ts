import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowoutputComponent } from './showoutput.component';

describe('ShowoutputComponent', () => {
  let component: ShowoutputComponent;
  let fixture: ComponentFixture<ShowoutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowoutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
