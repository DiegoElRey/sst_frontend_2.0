import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodologiaArbolComponent } from './metodologia-arbol.component';

describe('MetodologiaArbolComponent', () => {
  let component: MetodologiaArbolComponent;
  let fixture: ComponentFixture<MetodologiaArbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodologiaArbolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodologiaArbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
