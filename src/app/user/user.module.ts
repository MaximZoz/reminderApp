import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    RouterModule.forChild([
      {
        path: '',
        component: UserLayoutComponent,
        children: [
          { path: '', redirectTo: '/user/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          { path: 'reminder', component: ReminderPageComponent },
          { path: 'create', component: CreatePageComponent },
          { path: 'reminder/:id/edit', component: EditPageComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class UserModule {}
