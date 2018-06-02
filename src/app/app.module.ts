import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxMdModule } from 'ngx-md';

import { NgxAppMsgModule } from '@nowzoo/ngx-app-msg';
import { AppComponent } from './app.component';
import { HomeRouteComponent } from './home-route/home-route.component';

const routes: Routes = [
  {path: '', component: HomeRouteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeRouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgxMdModule.forRoot(),
    NgxAppMsgModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
