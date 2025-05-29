# Альтамед-с - Медицинский центр

Веб-сайт для медицинского центра "Альтамед-с", разработанный с использованием Next.js, TypeScript, Prisma ORM и PostgreSQL.

## Технологии

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (рекомендуется)

## Особенности проекта

- Современный UI дизайн с использованием Tailwind CSS
- Полностью адаптивный интерфейс для мобильных устройств и десктопов
- Взаимодействие с базой данных через Prisma ORM
- API-маршруты для работы с данными
- Многоязычный интерфейс (русский)

## Настройка проекта

### Предварительные требования

- Node.js 18.x или выше
- PostgreSQL 13.x или выше
- npm или yarn

### Установка

1. Клонировать репозиторий:
```bash
git clone https://github.com/yourusername/altamed-sait.git
cd altamed-sait
```

2. Установить зависимости:
```bash
npm install
# или
yarn install
```

3. Настроить переменные окружения:
   - Создать файл `.env` в корне проекта со следующим содержимым:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/altamed_db?schema=public"
   ```
   - Замените `username`, `password` и другие параметры на ваши данные подключения к PostgreSQL

4. Настроить базу данных:
```bash
# Сгенерировать Prisma клиент
npm run prisma:generate

# Создать таблицы в базе данных
npm run db:push

# Заполнить базу данными для разработки
npm run db:seed
```

5. Запустить проект в режиме разработки:
```bash
npm run dev
```

После запуска проект будет доступен по адресу [http://localhost:3000](http://localhost:3000).

## Структура проекта

- `/src/app` - Страницы приложения и API-маршруты (Next.js App Router)
- `/src/components` - Многоразовые React компоненты
- `/src/lib` - Утилиты и библиотеки
- `/prisma` - Схема базы данных и миграции Prisma

## Основные страницы

- **Главная** (`/`) - Основная информация о клинике
- **Услуги** (`/services`) - Список медицинских услуг по категориям
- **Врачи** (`/doctors`) - Информация о врачах клиники
- **Запись на прием** (`/appointments`) - Форма для записи к врачу
- **Блог** (`/blog`) - Медицинские статьи и новости
- **О нас** (`/about`) - Информация о клинике
- **Контакты** (`/contacts`) - Контактная информация и карта

## API эндпоинты

- `/api/doctors` - Управление врачами
- `/api/services` - Управление услугами
- `/api/categories` - Управление категориями услуг
- `/api/appointments` - Управление записями на прием
- `/api/articles` - Управление статьями блога

## Команды

- `npm run dev` - Запуск сервера разработки
- `npm run build` - Сборка проекта для продакшн
- `npm run start` - Запуск собранного проекта
- `npm run lint` - Проверка кода с помощью ESLint
- `npm run prisma:generate` - Генерация Prisma клиента
- `npm run prisma:migrate` - Создание миграции базы данных
- `npm run prisma:studio` - Запуск Prisma Studio для управления данными
- `npm run db:push` - Применение схемы Prisma к базе данных
- `npm run db:seed` - Заполнение базы данных тестовыми данными

## Лицензия

Copyright © 2024 Альтамед-с
