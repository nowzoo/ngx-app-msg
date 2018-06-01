export type INgxAppMsgContext = 'wait' | 'warning' | 'success' | 'error';
export interface INgxAppMsg {
  context: INgxAppMsgContext;
  message: string;
  modal: boolean;
  dismissable: boolean;
  autohide: boolean;
}
