import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { INgxAppMsg, INgxAppMsgContext } from './interfaces';
@Injectable({
  providedIn: 'root'
})
export class NgxAppMsgService {

  private messages$$: BehaviorSubject<INgxAppMsg>;
  get messages$(): Observable<INgxAppMsg> {
    return this.messages$$.asObservable();
  }
  constructor() {
    this.messages$$ = new BehaviorSubject(null);
  }

  private _show(context: INgxAppMsgContext, message: string, autohide: boolean, modal: boolean, dismissable: boolean) {
    this.messages$$.next({
      context: context,
      message: message,
      autohide: autohide,
      modal: modal,
      dismissable: dismissable
    });
  }

  show(context: INgxAppMsgContext, message: string, autohide = true, modal = false, dismissable = false) {
    this._show(context, message, autohide, modal, dismissable);
  }

  wait(message: string, autohide = false, modal = true, dismissable = false) {
    this._show('wait', message, autohide, modal, dismissable);
  }
  warn(message: string, autohide = true, modal = true, dismissable = false) {
    this._show('warning', message, autohide, modal, dismissable);
  }
  error(message: string, autohide = false, modal = true, dismissable = true) {
    this._show('error', message, autohide, modal, dismissable);
  }
  success(message: string, autohide = true, modal = false, dismissable = false) {
    this._show('success', message, autohide, modal, dismissable);
  }
}
