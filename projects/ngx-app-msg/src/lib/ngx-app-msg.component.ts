import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


import { INgxAppMsg } from './interfaces';
import { NgxAppMsgService } from './ngx-app-msg.service';


@Component({
  selector: 'ngx-app-msg',
  templateUrl: './ngx-app-msg.component.html',
  styleUrls: ['./ngx-app-msg.component.scss'],

})
export class NgxAppMsgComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  shown = false;
  message: string;
  context: string;
  dismissable: boolean;
  modal: boolean;
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
    if (! msg) {
      this.shown = false;
    } else {
      this.message = msg.message;
      this.context = msg.context;
      this.dismissable = msg.dismissable;
      this.modal = msg.modal;
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
