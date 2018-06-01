import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxAppMsgComponent } from './ngx-app-msg.component';
import { NgxAppMsgService } from './ngx-app-msg.service';
@NgModule({
  imports: [CommonModule],
  declarations: [NgxAppMsgComponent],
  exports: [NgxAppMsgComponent]
})
export class NgxAppMsgModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: NgxAppMsgModule, providers: [NgxAppMsgService]};
  }
}
