export type NgxAppMsgContext = 'wait' | 'warning' | 'success' | 'error';
export interface INgxAppMsg {
  context: NgxAppMsgContext;
  message: string;
  modal: boolean;
  dismissible: boolean;
  autohide: boolean;
}
export interface INgxAppMsgOptions {
  autohideAfter: number;
}
export class NgxAppMsgOptions implements INgxAppMsgOptions {
  autohideAfter = 4000;
}
