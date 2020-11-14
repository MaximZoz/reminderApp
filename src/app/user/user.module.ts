import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/services/auth.guard';
import { AuthService } from '../shared/services/auth.service';

import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReminderPageComponent } from './reminder-page/reminder-page.component';
import { UserLayoutComponent } from './shared/component/user-layout/user-layout.component';

@NgModule({
  declarations: [
    UserLayoutComponent,
    LoginPageComponent,
    ReminderPageComponent,
    CreatePageComponent,
    EditPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserLayoutComponent,
        children: [
          { path: '', redirectTo: '/user/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          {
            path: 'reminder',
            component: ReminderPageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'create',
            component: CreatePageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'reminder/:id/edit',
            component: EditPageComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard],
})
export class UserModule {}
