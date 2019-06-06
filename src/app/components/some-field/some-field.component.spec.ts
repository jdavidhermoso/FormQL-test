import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeFieldComponent } from './some-field.component';

describe('SomeFieldComponent', () => {
  let component: SomeFieldComponent;
  let fixture: ComponentFixture<SomeFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
