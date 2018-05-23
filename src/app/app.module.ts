import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';

import { BannerComponent } from './component/banner/banner.component';
import { LoginFormModule } from './module/login-form/login-form.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BreadcrumbComponent,
    BannerComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    LoginFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
