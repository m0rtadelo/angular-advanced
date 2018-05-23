import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../component/login-form/login-form.component';
import { LoginComponent } from '../../component/login/login.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [LoginFormComponent],
  bootstrap: [LoginComponent],
  exports: [LoginFormComponent]
})
export class LoginFormModule { }
