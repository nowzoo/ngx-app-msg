import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAppMsgComponent } from './ngx-app-msg.component';

describe('NgxAppMsgComponent', () => {
  let component: NgxAppMsgComponent;
  let fixture: ComponentFixture<NgxAppMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAppMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAppMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
