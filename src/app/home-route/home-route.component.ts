import { Component, OnInit } from '@angular/core';
import { NgxAppMsgService } from '@nowzoo/ngx-app-msg';
@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss']
})
export class HomeRouteComponent implements OnInit {

  constructor(
    private msg: NgxAppMsgService
  ) { }

  ngOnInit() {
  }

  demo() {
    this.msg.wait('Doing something time consuming...', false, true, true);
    setTimeout(() => {
      this.msg.success('Done!');
    }, 2000);
  }

}
