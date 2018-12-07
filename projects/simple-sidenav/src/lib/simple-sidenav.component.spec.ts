import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSidenavComponent } from './simple-sidenav.component';

describe('SimpleSidenavComponent', () => {
  let component: SimpleSidenavComponent;
  let fixture: ComponentFixture<SimpleSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
