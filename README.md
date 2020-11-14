# Подключаем DataBase для приложения

### валидируем форму и отправляем её на сервер

src\app\user\login-page\login-page.component.ts => submit =>

- this.auth.login(user).subscribe

### ответ с сервера в виде токена закидываем в private token

src\app\user\shared\services\auth.service.ts => AuthService =>

- private token
