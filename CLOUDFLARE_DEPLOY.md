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
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
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

## Ручной деплой через Wrangler CLI

### Установка Wrangler

```bash
npm install -g wrangler
```

### Авторизация

```bash
wrangler login
```

### Деплой

```bash
npm run build
wrangler pages deploy .next --project-name=altamed-c
```

## Особенности конфигурации

### Файлы конфигурации

- `wrangler.toml` - основная конфигурация Cloudflare
- `public/_headers` - HTTP заголовки для безопасности и кэширования
- `public/_redirects` - правила перенаправления для SPA
- `next.config.js` - настройки Next.js для Cloudflare Pages

### Поддерживаемые функции

✅ **Поддерживается:**
- Статические страницы
- Server-Side Rendering (SSR)
- API Routes
- Изображения (unoptimized)
- Кэширование статических ресурсов

❌ **Не поддерживается:**
- Оптимизация изображений Next.js
- Некоторые Node.js модули
- WebSockets

## Мониторинг и отладка

### Логи

Просмотр логов деплоя:
```bash
wrangler pages deployment list --project-name=altamed-c
```

### Функции

Просмотр функций:
```bash
wrangler pages functions list --project-name=altamed-c
```

## Производительность

### Оптимизации

1. **Кэширование**: Статические ресурсы кэшируются на 1 год
2. **CDN**: Глобальная сеть Cloudflare
3. **Сжатие**: Автоматическое сжатие Brotli/Gzip
4. **HTTP/3**: Поддержка современных протоколов

### Метрики

- **Time to First Byte (TTFB)**: < 100ms
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s

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

## Поддержка

При возникновении проблем:
1. Проверьте логи деплоя в Cloudflare Dashboard
2. Убедитесь, что все переменные окружения настроены
3. Проверьте совместимость используемых пакетов с Cloudflare Workers

---

**Статус проекта**: ✅ Готов к деплою на Cloudflare Pages 