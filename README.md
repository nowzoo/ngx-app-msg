# NgxAppMsg

A flexible message service and component for Angular 6 apps. [Demo App](https://nowzoo.github.io/ngx-app-msg/)


## Quick Start

```bash
npm i --save @nowzoo/ngx-app-msg
```

Copy the `ngx-app-msg.scss` file [here](https://github.com/nowzoo/ngx-app-msg/blob/master/src/ngx-app-msg.scss) into your app's `src/` directory, and incorporate it into your app's styles. You can do this in `angular.json` ([example](https://github.com/nowzoo/ngx-app-msg/blob/master/angular.json#L31)) or by importing it from your main stylesheet.

**Note:** None of the styles or animations are coded into the component. You have to provide them in your app's build. See [customizing](#Customizing) below.

### Import the module
```ts
// app.module.ts...
import { NgxAppMsgModule } from '@nowzoo/ngx-app-msg';
// ...
@NgModule({
  imports: [
    //...
    NgxAppMsgModule.forRoot()
  ]
})
export class AppModule { }
```
[Full example](https://github.com/nowzoo/ngx-app-msg/blob/master/src/app/app.module.ts)

### Place the `NgxAppMsgComponent` in your app component
Put `<ngx-app-msg></ngx-app-msg>` somewhere.
```html
<!-- app.component.html -->
<router-outlet></router-outlet>
<ngx-app-msg></ngx-app-msg>
```

### Use `NgxAppMsgService` to show messages
```ts
import { NgxAppMsgService } from '@nowzoo/ngx-app-msg';
//...
export class SomeComponent {
  constructor(
    private msg: NgxAppMsgService
  ) { }

  show() {
    this.msg.wait('Doing something time consuming...');
    setTimeout(() => {
      this.msg.success('Done!');
    }, 2000);
  }

}
```

## API


`type INgxAppMsgContext = 'wait' | 'warning' | 'success' | 'error'`

`interface INgxAppMsgOptions {autohideAfter: number;}`

You can pass an instance of this to the component to set the autohide delay. The default delay is 4000 (4 seconds.)


### Component `NgxAppMsgComponent`

**selector:** `ngx-app-msg` **exportAs:** `ngxAppMessage`

`@Input() options: INgxAppMsgOptions` Optional. Example:
```html
<ngx-app-msg [options]="{autohideAfter: 10 * 1000}"></ngx-app-msg>
```


### Service: `NgxAppMsgService`
All public methods take the following parameters. There are different defaults depending on the context: For example `autohide` is set to false by default for `wait()` and true for `success()`

 - `message: string` The message you want to display.
 - `autohide: boolean` Whether to hide the message automatically after a timeout.
 - `modal: boolean` Whether to display a modal backdrop that prevents interaction with the page while the message is shown.
 - `dismissible: boolean` Whether to show a close button.

#### Methods
 - `show(context: INgxAppMsgContext, message: string, autohide = true, modal = false, dismissible = false)`
 - `wait(message: string, autohide = false, modal = true, dismissible = false)`
 - `warn(message: string, autohide = false, modal = true, dismissible = true)`
 - `error(message: string, autohide = false, modal = true, dismissible = true)`
 - `success(message: string, autohide = true, modal = false, dismissible = true)`

## Customizing

None of the styles or animations are coded into the component. The stylesheet can be customized as you wish &mdash; e.g. switching the placement of the message, changing the icons, or adjusting the animations.

If you don't like the markup, you can easily extend the component with a different template.
