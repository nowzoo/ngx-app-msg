# NgxAppMsg

A flexible message service and component for Angular 6 apps. See the [demo](https://nowzoo.github.io/ngx-app-msg/).


## Quick Start

### Install
```bash
npm i --save @nowzoo/ngx-app-msg
```

### Add the styles
Copy the `ngx-app-msg.scss` file [here](https://github.com/nowzoo/ngx-app-msg/blob/master/src/ngx-app-msg.scss) into your app's `src/` directory, and incorporate it into your app's styles. You can do this in `angular.json` ([example](https://github.com/nowzoo/ngx-app-msg/blob/master/angular.json#L31)) or by importing it from your main stylesheet.

**Note:**  None of the styles or animations are coded into the component. You have to provide them in your app's build. See [customizing](#customizing) below.

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


`type NgxAppMsgContext = 'wait' | 'warning' | 'success' | 'error'`

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
 - `show(context: NgxAppMsgContext, message: string, autohide = true, modal = false, dismissible = false)`
 - `wait(message: string, autohide = false, modal = true, dismissible = false)`
 - `warn(message: string, autohide = false, modal = true, dismissible = true)`
 - `error(message: string, autohide = false, modal = true, dismissible = true)`
 - `success(message: string, autohide = true, modal = false, dismissible = true)`

## Customizing

**CSS** The library is unopinionated as to design. None of the styles or animations are coded into the component. The downside is that you have to add styles yourself. The upside is that the the component can be customized as you wish &mdash; e.g. switching the placement of the message, changing the icons, or adjusting the animations.

**Markup** If you don't like the markup, you can easily extend the component with a different template.

## Contributing

Contributions and suggestions are welcome.

This library was built with the Angular CLI.

### Development set up

```bash
# clone this repo
git clone https://github.com/nowzoo/ngx-app-msg.git

#install the deps
npm i

# build the library...
ng build ngx-app-msg --prod

# Serve the demo locally
ng serve --open

```

The [demo app](https://nowzoo.github.io/ngx-app-msg/) code is in `src/app`.

The library itself is found under `projects/ngx-app-msg`.

### Tests
 - `ng test ngx-app-msg`
 - Optionally, you can run tests with Wallaby using the config at `projects/ngx-app-msg/wallaby.js`

### Other dev notes

 - You must build the library with `ng build ngx-app-msg --prod` for changes to show up in the demo app.
 - Also, you must build the library at least once before you serve the demo app.
 - The `publish` bash script will fail, unless you are a @nowzoo contributor. Instead, make a PR.

## License
[MIT](https://github.com/nowzoo/ngx-app-msg/blob/master/LICENSE) | Copyright 2018 NowZoo
