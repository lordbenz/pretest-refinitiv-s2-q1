import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColumnAreaComponent } from './three-column-area.component';

describe('ThreeColumnAreaComponent', () => {
  let component: ThreeColumnAreaComponent;
  let fixture: ComponentFixture<ThreeColumnAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeColumnAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeColumnAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
