import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemploginComponent } from './templogin.component';

describe('TemploginComponent', () => {
  let component: TemploginComponent;
  let fixture: ComponentFixture<TemploginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemploginComponent]
    });
    fixture = TestBed.createComponent(TemploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
