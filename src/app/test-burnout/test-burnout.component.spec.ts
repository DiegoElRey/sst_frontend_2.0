import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBurnoutComponent } from './test-burnout.component';

describe('TestBurnoutComponent', () => {
  let component: TestBurnoutComponent;
  let fixture: ComponentFixture<TestBurnoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBurnoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestBurnoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
