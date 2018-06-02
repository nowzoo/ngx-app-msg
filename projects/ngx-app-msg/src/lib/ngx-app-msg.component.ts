import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


import { INgxAppMsg, INgxAppMsgOptions, NgxAppMsgOptions } from './interfaces';
import { NgxAppMsgService } from './ngx-app-msg.service';


@Component({
  selector: 'ngx-app-msg',
  exportAs: 'ngxAppMessage',
  templateUrl: './ngx-app-msg.component.html'
})
export class NgxAppMsgComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  @Input() options: INgxAppMsgOptions = new NgxAppMsgOptions();
  shown = false;
  message: string;
  context: string;
  dismissible: boolean;
  modal: boolean;
  hideTimeout: any = null;
  constructor(private service: NgxAppMsgService) { }

  ngOnInit() {
    this.service.messages$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(val => {
        this.handleChange(val);
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  handleChange(msg: INgxAppMsg) {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
    if (! msg) {
      this.shown = false;
    } else {
      this.message = msg.message;
      this.context = msg.context;
      this.dismissible = msg.dismissible;
      this.modal = msg.modal;
      if (msg.autohide) {
        this.hideTimeout = setTimeout(() => this.shown = false, this.options.autohideAfter);
      }
      this.shown = true;
    }

  }
  dismiss(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.shown = false;
  }

}
