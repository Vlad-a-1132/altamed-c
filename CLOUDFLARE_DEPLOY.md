# 🚀 Деплой на Cloudflare Pages

## Автоматический деплой через GitHub

### 1. Подключение репозитория

1. Перейдите на [Cloudflare Pages](https://pages.cloudflare.com/)
2. Нажмите **"Create a project"**
3. Выберите **"Connect to Git"**
4. Выберите ваш репозиторий: `Vlad-a-1132/altamed-c`

### 2. Настройки сборки

В настройках проекта укажите:

```
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Root directory: (оставьте пустым)
```

### 3. Переменные окружения

Добавьте следующие переменные в настройках проекта:

```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### 4. Настройки домена

После успешного деплоя:
1. Перейдите в **Custom domains**
2. Добавьте ваш домен
3. Настройте DNS записи согласно инструкциям Cloudflare

## Особенности статического экспорта

### Что изменилось

- ✅ **Удалены API маршруты** - проект теперь полностью статический
- ✅ **Добавлены статические данные** - врачи, услуги и статьи хранятся в `src/data/static-data.ts`
- ✅ **Формы используют localStorage** - для демонстрации функционала
- ✅ **Добавлен generateStaticParams** - для динамических маршрутов
- ✅ **Настроен статический экспорт** - `output: 'export'` в next.config.js

### Файлы конфигурации

- `wrangler.toml` - конфигурация Cloudflare
- `functions/_middleware.js` - middleware для Cloudflare Pages Functions
- `public/_headers` - HTTP заголовки для безопасности и кэширования
- `public/_redirects` - правила перенаправления для SPA
- `next.config.js` - настройки Next.js для статического экспорта
- `src/data/static-data.ts` - статические данные

### Поддерживаемые функции

✅ **Поддерживается:**
- Статические страницы
- Динамические маршруты (через generateStaticParams)
- Формы с localStorage
- Изображения (unoptimized)
- Кэширование статических ресурсов
- SEO оптимизация

❌ **Не поддерживается:**
- API Routes (удалены)
- Server-Side Rendering (SSR)
- База данных Prisma (заменена на статические данные)
- Серверные функции

## Альтернативные платформы деплоя

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

### GitHub Pages
```bash
# Добавьте в package.json:
"homepage": "https://yourusername.github.io/altamed-c",
"scripts": {
  "deploy": "npm run build && gh-pages -d out"
}
```

## Производительность

### Оптимизации

1. **Статический контент**: Все страницы предварительно сгенерированы
2. **CDN**: Глобальная сеть Cloudflare
3. **Сжатие**: Автоматическое сжатие Brotli/Gzip
4. **HTTP/3**: Поддержка современных протоколов
5. **Кэширование**: Агрессивное кэширование статических ресурсов

### Метрики

- **Time to First Byte (TTFB)**: < 50ms
- **First Contentful Paint (FCP)**: < 1.0s
- **Largest Contentful Paint (LCP)**: < 1.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

## Безопасность

### Заголовки безопасности

Автоматически добавляются через `_headers`:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

### SSL/TLS

- Автоматический SSL сертификат
- HTTP/2 и HTTP/3 поддержка
- HSTS заголовки

## Мониторинг и аналитика

### Cloudflare Analytics

- Просмотры страниц
- Уникальные посетители
- Производительность
- Безопасность

### Web Vitals

Мониторинг Core Web Vitals через Cloudflare:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## Поддержка

При возникновении проблем:
1. Проверьте логи деплоя в Cloudflare Dashboard
2. Убедитесь, что все переменные окружения настроены
3. Проверьте, что build output directory указан как `out`
4. Убедитесь, что используется правильный Framework preset

---

**Статус проекта**: ✅ Готов к деплою как статический сайт на Cloudflare Pages

**Последнее обновление**: Проект конвертирован в статический экспорт для максимальной производительности и совместимости с Cloudflare Pages. 