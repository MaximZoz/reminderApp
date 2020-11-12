# создаём и оживляем страницу логина

### создаём шаблон для входа

user\login-page\login-page.component.html

### подключаем форму

user\login-page\login-page.component.ts => form user\login-page\user-page.component.ts => ngOnInit =>

- this.form = new FormGroup

app.module.ts => imports =>

- FormsModule
- ReactiveFormsModule

### создаём файл интерфейсов, реализуем его в login-page.component

shared\interfaces.ts =>

- User

admin\login-page\login-page.component.ts =>

- const user: User
