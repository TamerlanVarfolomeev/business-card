# BusinessCard

Этот проект представляет собой простую веб-страницу визитной карточки, разработанную с использованием Angular. Визитная карточка отображает контактные данные, такие как имя, должность, телефон, а также позволяет пользователям копировать номер телефона в буфер обмена и открывать контакт в приложениях Telegram и WhatsApp.

## Развертывание проекта

### Требования
- Node.js (версия v18.20.8 и выше)
- Angular CLI (версия 19.2.6 и выше)

### Шаги по развертыванию

1. Клонируйте репозиторий на свой локальный компьютер:
    ```bash
    git clone <ссылка_на_репозиторий>
    cd business-card
    ```

2. Установите зависимости проекта с помощью npm:
    ```bash
    npm install
    ```

3. Запустите локальный сервер разработки:
    ```bash
    ng serve --host 0.0.0.0
    ```

4. Откройте браузер и перейдите по адресу:
    ```
    http://localhost:4200/
    ```

Проект будет автоматически обновляться при изменении исходных файлов.

## Описание структуры проекта

Проект состоит из нескольких файлов и директорий, которые организованы следующим образом:

```plaintext
business-card
├── README.md
├── angular.json
├── package-lock.json
├── package.json
├── public
│   ├── assets
│   │   ├── telegram.png
│   │   └── whatsapp.png
│   └── favicon.ico
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── business-card
│   │       ├── business-card.component.html
│   │       ├── business-card.component.scss
│   │       ├── business-card.component.spec.ts
│   │       └── business-card.component.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json


# BusinessCard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
