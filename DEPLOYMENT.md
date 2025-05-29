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

## Платформы для деплоя

### 1. Vercel (Рекомендуется)

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

### 2. Netlify

1. Зайдите на [netlify.com](https://netlify.com)
2. Подключите GitHub репозиторий
3. Настройки сборки:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Для Next.js добавьте в настройки:
   - Framework: Next.js

### 3. Railway

1. Зайдите на [railway.app](https://railway.app)
2. Подключите GitHub репозиторий
3. Railway автоматически определит Next.js
4. Добавьте PostgreSQL сервис при необходимости

## Переменные окружения

Создайте следующие переменные на платформе деплоя:

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
В `next.config.js` добавлено:
- Оптимизация изображений
- Сжатие gzip
- Кэширование

### 2. Performance
- Все изображения оптимизированы
- Используется lazy loading
- Минимизированный CSS/JS

### 3. SEO
- Meta теги настроены
- Sitemap готов к генерации
- Open Graph поддержка

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
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com) 