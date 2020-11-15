# Создание интерсептора для обработки ошибок

### если происходит ошибка авторизации (401) , то удаляем недействительный токен и направляем юзера в форму регистрации

- src\app\shared\auth.interseptor.ts

#### регистрируем интерсепрот в app.module

- src\app\app.module.ts

#### применяем его к login-page (выводим massage ошибки авторизации в шаблон формы логина)

- src\app\user\login-page\login-page.component.html
