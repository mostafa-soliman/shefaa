import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GulleryComponent } from './gullery.component';

describe('GulleryComponent', () => {
  let component: GulleryComponent;
  let fixture: ComponentFixture<GulleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GulleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GulleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
