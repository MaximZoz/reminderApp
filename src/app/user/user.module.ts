import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../manerial.module';
import { AlertService } from '../shared/services/alert.service';
import { AuthGuard } from '../shared/services/auth.guard';
import { AuthService } from '../shared/services/auth.service';
import { SearchPipe } from '../shared/services/search.pipe';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReminderPageComponent } from './reminder-page/reminder-page.component';
import { UserLayoutComponent } from './shared/component/user-layout/user-layout.component';
import { AlertComponent } from './shared/component/alert/alert.component';

@NgModule({
  declarations: [
    UserLayoutComponent,
    LoginPageComponent,
    ReminderPageComponent,
    CreatePageComponent,
    EditPageComponent,
    SearchPipe,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
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
  providers: [AuthService, AuthGuard, AlertService],
})
export class UserModule {}
