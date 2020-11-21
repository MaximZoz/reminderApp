import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { User } from 'src/app/shared/interfaces';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  message: string;
  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['authFailed']) {
        this.message = 'Сессия токена истекла';
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.auth.login(user).subscribe(
      () => {
        this.form.reset();
        this.router.navigate(['/user', 'reminder']);
        this.submitted = false;
        this.alert.success('Поздравляю, Вы в системе!');
      },
      () => {
        this.submitted = false;
      }
    );
  }
}
