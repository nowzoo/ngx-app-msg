import { Component, OnInit } from '@angular/core';
import { NgxAppMsgService } from '@nowzoo/ngx-app-msg';
@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss']
})
export class HomeRouteComponent implements OnInit {

  constructor(
    public msg: NgxAppMsgService
  ) { }

  ngOnInit() {
  }

  tryMe() {
    this.msg.wait('Doing some arduous and time consuming task...');
    setTimeout(() => {
      this.msg.success('Done!');
    }, 2000);
  }

}
