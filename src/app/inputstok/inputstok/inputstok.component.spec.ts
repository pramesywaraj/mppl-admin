import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputstokComponent } from './inputstok.component';

describe('InputstokComponent', () => {
  let component: InputstokComponent;
  let fixture: ComponentFixture<InputstokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputstokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputstokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
