# NgxAppMsg

A flexible message service and component for Angular 6 apps. [Demo App](https://nowzoo.github.io/ngx-app-msg/)


## Quick Start

```bash
npm i --save @nowzoo/ngx-app-msg
```

Copy the `ngx-app-msg.scss` file [here](https://github.com/nowzoo/ngx-app-msg/blob/master/src/ngx-app-msg.scss) into your app's `src/` directory, and incorporate it into your app's styles. You can do this in `angular.json` ([example](https://github.com/nowzoo/ngx-app-msg/blob/master/angular.json#L31)) or by importing it from your main stylesheet.

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
    this.msg.wait('Doing something time consuming...', false, true, true);
    setTimeout(() => {
      this.msg.success('Done!');
    }, 2000);
  }

}
```
