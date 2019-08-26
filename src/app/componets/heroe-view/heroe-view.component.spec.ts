import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeViewComponent } from './heroe-view.component';

describe('HeroeViewComponent', () => {
  let component: HeroeViewComponent;
  let fixture: ComponentFixture<HeroeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
