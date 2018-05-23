import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../component/breadcrumb/breadcrumb.component';
import { LoginComponent } from '../../component/login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BreadcrumbComponent, LoginComponent],
  exports: [BreadcrumbComponent, LoginComponent]
})
export class HeaderModule { }
