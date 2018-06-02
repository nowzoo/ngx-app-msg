import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { INgxAppMsg, NgxAppMsgContext } from './interfaces';
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

  private _show(context: NgxAppMsgContext, message: string, autohide: boolean, modal: boolean, dismissible: boolean) {
    this.messages$$.next({
      context: context,
      message: message,
      autohide: autohide,
      modal: modal,
      dismissible: dismissible
    });
  }

  show(context: NgxAppMsgContext, message: string, autohide = true, modal = false, dismissible = false) {
    this._show(context, message, autohide, modal, dismissible);
  }

  wait(message: string, autohide = false, modal = true, dismissible = false) {
    this._show('wait', message, autohide, modal, dismissible);
  }
  warn(message: string, autohide = false, modal = true, dismissible = true) {
    this._show('warning', message, autohide, modal, dismissible);
  }
  error(message: string, autohide = false, modal = true, dismissible = true) {
    this._show('error', message, autohide, modal, dismissible);
  }
  success(message: string, autohide = true, modal = false, dismissible = true) {
    this._show('success', message, autohide, modal, dismissible);
  }
  hide() {
    this.messages$$.next(null);
  }
}
