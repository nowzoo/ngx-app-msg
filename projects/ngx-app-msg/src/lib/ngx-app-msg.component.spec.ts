import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { NgxAppMsgComponent } from './ngx-app-msg.component';
import { NgxAppMsgService } from './ngx-app-msg.service';
import { NgxAppMsgOptions } from './interfaces';
describe('NgxAppMsgComponent', () => {
  let component: NgxAppMsgComponent;
  let fixture: ComponentFixture<NgxAppMsgComponent>;
  let service;
  let subj$;
  beforeEach(async(() => {
    subj$ = new BehaviorSubject(null);
    service = {messages$: subj$.asObservable()};
    TestBed.configureTestingModule({
      declarations: [ NgxAppMsgComponent ],
      providers: [
        {provide: NgxAppMsgService, useValue: service}
      ]
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

  it('should subscribe & unsub to the messages', () => {
    expect(subj$.observers.length).toBe(1);
    component.ngOnDestroy();
    expect(subj$.observers.length).toBe(0);
  });

  it('should set a timeout & if sent a message with autohide = true', () => {
    expect(component.hideTimeout).toEqual(null);
    subj$.next({autohide: true, message: 'foo', context: 'success', modal: true, dismissible: true});
    expect(component.hideTimeout).not.toEqual(null);
  });
  it('should clear the timeout if sent another message', () => {
    expect(component.hideTimeout).toEqual(null);
    subj$.next({autohide: true, message: 'foo', context: 'success', modal: true, dismissible: true});
    expect(component.hideTimeout).not.toEqual(null);
    subj$.next({autohide: false, message: 'foo', context: 'success', modal: true, dismissible: true});
    expect(component.hideTimeout).toEqual(null);
  });

  it('should hide after the timeout', fakeAsync(() => {
    const t = new NgxAppMsgOptions().autohideAfter;
    expect(component.shown).toBe(false);
    subj$.next({autohide: true, message: 'foo', context: 'success', modal: true, dismissible: true});
    expect(component.shown).toBe(true);
    tick(t - 1);
    expect(component.shown).toBe(true);
    tick(1);
    expect(component.shown).toBe(false);
  }));

  it('should hide if another set options has been set the timeout', fakeAsync(() => {
    const t = 678899;
    component.options = {autohideAfter: t};
    expect(component.shown).toBe(false);
    subj$.next({autohide: true, message: 'foo', context: 'success', modal: true, dismissible: true});
    expect(component.shown).toBe(true);
    tick(t - 1);
    expect(component.shown).toBe(true);
    tick(1);
    expect(component.shown).toBe(false);
  }));

  describe('dismiss()', () => {
    it('should set shown to false if passed an event', () => {
      const event: any = {preventDefault: jasmine.createSpy()};
      component.shown = true;
      component.dismiss(event);
      expect(component.shown).toBe(false);
    });
    it('should set shown to false if not passed an event', () => {
      component.shown = true;
      component.dismiss();
      expect(component.shown).toBe(false);
    });
  });
});
