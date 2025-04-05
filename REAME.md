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
