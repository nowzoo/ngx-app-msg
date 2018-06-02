export type INgxAppMsgContext = 'wait' | 'warning' | 'success' | 'error';
export interface INgxAppMsg {
  context: INgxAppMsgContext;
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
