# Создания alert сервиса

ng g c user/shared/components/alert --skipTests

### регистрируем сервис AlertService

src \ app \ user \ user.module.ts => провайдеры =>

- AlertService

### создаём стрим, который будет работать с алертами

src \ app \ user \ shared \ services \ alert.service.ts => AlertService =>

- публичное оповещение \$ = новая тема scss

#### создаём медод, вызывая который он будет диспачить для алерта новый объект и показываеть его

src\app\user\shared\services\alert.service.ts => AlertService =>

- success(text: string) {this.alert\$.next({type: 'success', text})}

#### Создаём компонент alert

ng g c user/shared/components/alert --skipTests

#### в alert component объявляем delay, text, type = 'success'

src\app\user\shared\components\alert\alert.component.ts => AlertComponent =>

- delay, text, type

#### В AlertComponent объявляем alertService

src\app\user\shared\components\alert\alert.component.ts => AlertComponent => constructor =>

- private alertService: AlertService
  src\app\user\shared\components\alert\alert.component.ts => AlertComponent => ngOnInit =>

- this.alertService.alert\$.subscribe((alert) => {this.text = alert.text; this.type = alert.type})

- const timeOut = setTimeout(() => {clearTimeout(timeOut); this.text = '';}, this.delay);

#### очищаем Subscription

src\app\user\shared\components\alert\alert.component.ts => AlertComponent =>

- aSub: Subscription;
- ngOnDestroy

#### !!! сделать напоминания алертом !!!

#### !!! ngAnimate + главная страница если останется времени

#### !!! unit + интеграц тесты

#### !!! PWA
