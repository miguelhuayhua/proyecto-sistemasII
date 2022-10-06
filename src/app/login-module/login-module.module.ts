import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatriculateComponent } from './matriculate/matriculate.component';



@NgModule({
  declarations: [
    LoginComponent,
    MatriculateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [LoginComponent, MatriculateComponent]
})
export class LoginModule { }
