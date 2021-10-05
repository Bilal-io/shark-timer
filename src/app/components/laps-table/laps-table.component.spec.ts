import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapsTableComponent } from './laps-table.component';

describe('LapsTableComponent', () => {
  let component: LapsTableComponent;
  let fixture: ComponentFixture<LapsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LapsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
