import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastokComponent } from './datastok.component';

describe('DatastokComponent', () => {
  let component: DatastokComponent;
  let fixture: ComponentFixture<DatastokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatastokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatastokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
