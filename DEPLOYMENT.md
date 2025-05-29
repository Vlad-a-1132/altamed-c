# 🚀 Инструкции по деплою Altamed-C

## Исправление ошибок деплоя

### Проблема с package-lock.json
Если при деплое возникает ошибка:
```
npm error Missing: @jridgewell/trace-mapping@0.3.9 from lock file
```

**Решение:**
1. Удалите `package-lock.json`
2. Переустановите зависимости: `npm install`
3. Зафиксируйте изменения: `git add . && git commit -m "Fix package-lock"`
4. Загрузите на GitHub: `git push`

### Проблема с Next.js конфигурацией
Если возникает ошибка:
```
⚠ Обнаружены недопустимые параметры next.config.js:
⚠ Нераспознанный ключ(и) в объекте: «телеметрия»
```

**Решение:**
Опция `telemetry` удалена из `next.config.js`. Телеметрия отключается через:
- Файл `.npmrc` с настройкой `next-telemetry-disabled=1`
- Переменную окружения `NEXT_TELEMETRY_DISABLED=1`

## Платформы для деплоя

### 1. Cloudflare Pages (Рекомендуется)

**Настройки сборки для Cloudflare:**
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `/`
- Node.js version: `18` или выше

**Переменные окружения для Cloudflare:**
```
NEXT_TELEMETRY_DISABLED=1
NODE_ENV=production
```

**Шаги:**
1. Зайдите в [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Выберите "Workers & Pages" > "Create application" > "Pages"
3. Подключите GitHub репозиторий `Vlad-a-1132/altamed-c`
4. Настройки:
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npm run build`
   - Build output directory: `out`
5. Добавьте переменные окружения
6. Deploy

### 2. Vercel

**Автоматический деплой:**
1. Зайдите на [vercel.com](https://vercel.com)
2. Подключите GitHub аккаунт
3. Импортируйте репозиторий `Vlad-a-1132/altamed-c`
4. Vercel автоматически определит Next.js проект
5. Настройте переменные окружения (необязательно)

**Ручной деплой:**
```bash
npm i -g vercel
vercel login
vercel --prod
```

### 3. Netlify

1. Зайдите на [netlify.com](https://netlify.com)
2. Подключите GitHub репозиторий
3. Настройки сборки:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Для Next.js добавьте в настройки:
   - Framework: Next.js

### 4. Railway

1. Зайдите на [railway.app](https://railway.app)
2. Подключите GitHub репозиторий
3. Railway автоматически определит Next.js
4. Добавьте PostgreSQL сервис при необходимости

## Переменные окружения

### Обязательные для всех платформ:
```env
NEXT_TELEMETRY_DISABLED=1
NODE_ENV=production
```

### Опциональные:
```env
DATABASE_URL=postgresql://username:password@host:5432/database
YANDEX_MAPS_API_KEY=your_api_key
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=random_secret_string
```

## Настройка базы данных

### Для продакшена с PostgreSQL:
1. Создайте базу данных (на Railway, Supabase, или PlanetScale)
2. Добавьте `DATABASE_URL` в переменные окружения
3. Запустите миграции:
   ```bash
   npx prisma migrate deploy
   npx prisma db seed
   ```

### Без базы данных:
Проект работает и без базы данных, используя статические данные.

## Оптимизация для продакшена

### 1. Настройки Next.js
В `next.config.js` настроено:
- Статический экспорт для Cloudflare/Netlify (`output: 'export'`)
- Неоптимизированные изображения (`images: { unoptimized: true }`)
- Завершающие слэши (`trailingSlash: true`)
- Сжатие и кэширование

### 2. Отключение телеметрии
- Файл `.npmrc` с настройкой `next-telemetry-disabled=1`
- Переменная окружения `NEXT_TELEMETRY_DISABLED=1`

### 3. Performance
- Все изображения оптимизированы
- Используется lazy loading
- Минимизированный CSS/JS

### 4. SEO
- Meta теги настроены
- Sitemap готов к генерации
- Open Graph поддержка

## Решение частых проблем

### Cloudflare Pages висит на сборке:
1. Убедитесь что `NEXT_TELEMETRY_DISABLED=1` добавлена в переменные окружения
2. Проверьте что Build command: `npm run build`
3. Проверьте что Build output directory: `out`

### Ошибка "invalid next.config.js":
- Убедитесь что в `next.config.js` нет опции `telemetry`
- Телеметрия отключается через `.npmrc` и переменные окружения

### Изображения не загружаются:
- В `next.config.js` установлено `images: { unoptimized: true }`
- Это необходимо для статического экспорта

### Ошибки маршрутизации:
- Установлено `trailingSlash: true` для совместимости со статическим хостингом

## Мониторинг после деплоя

### Проверьте:
- ✅ Главная страница загружается
- ✅ Мобильная версия корректна
- ✅ Слайдеры работают
- ✅ Карта отображается (с API ключом)
- ✅ Формы отправляются
- ✅ Все изображения загружаются

### Полезные ссылки:
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com) 