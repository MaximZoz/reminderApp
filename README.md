# Создание поста

### Создаём сервис для постов posts.service

- PostsService

- #### создаём метод create по типу observable <Post>

  src\app\shared\posts.service.ts => PostsService => create

### пишем логику, что при создании поста отправляем его на baseDate и очишщаем форму

src\app\admin\create-page\create-page.component.ts => submit

- this.postsService.create(post).subscribe()

### обрабатываем логику id поста, который должен приходить с сервера

src\app\shared\posts.service.ts => PostsService => create => pipe => map =>

- ...post,
  id: response
  date: new Date(post.date)
