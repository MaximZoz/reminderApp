# Инициализируем Angular проект reminderApp

# Создаём layout (генерируем компоненты, которые будут относиться к layout)

### генерируем компонент main-layout (показ напоминаний) в папке shared/components

- ng g c shared/components/main-layout --skipTests

### генерируем компонент home-page (Домашняя страница) в корне проекта

- ng g c home-page --skipTests

### генерируем компонент, reminder-page (страница напоминания) в корне проекта

- ng g c reminder-page --skipTests

#### применяем main-layout и его детей (home-page и reminder-page) к роутам

- app-routing.module.ts => const routes => component => MainLayoutComponent
