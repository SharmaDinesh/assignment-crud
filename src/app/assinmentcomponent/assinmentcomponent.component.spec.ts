import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssinmentcomponentComponent } from './assinmentcomponent.component';

describe('AssinmentcomponentComponent', () => {
  let component: AssinmentcomponentComponent;
  let fixture: ComponentFixture<AssinmentcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssinmentcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssinmentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
