# Добавляем гварды для компонентов user

### создаём сервис guard, в нём реализуем метод canActivate

src\app\shared\services\auth.guard.ts => AuthGuard =>

- canActivate

### дабавляем метод canActivate в дочерние роуты user

src\app\user\user.module.ts => imports =>

- canActivate: (AuthGuard)
