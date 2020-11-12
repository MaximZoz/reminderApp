# Создаём модуль пользовательской панели, применяем Lazy loading для него

src\app\app-routing.module.ts => Routes =>

- loadChildren

### Создаём layout пользователя (генерируем компоненты, которые будут относиться к layout), прописываем роуты для них

- ng g c user/shared/component/user-layout --skipTests
- ng g c user/login-page --skipTests
- ng g c user/reminder-page --skipTests
- ng g c user/edit-page --skipTests

  src\app\user\user.module.ts => RouterModule.forChild => component => AdminLayoutComponent =>

- children
