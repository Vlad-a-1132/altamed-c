// Middleware для Cloudflare Pages Functions
export async function onRequest(context) {
  const { request, next, env } = context;
  
  // Устанавливаем переменные окружения
  env.NODE_ENV = 'production';
  env.NEXT_TELEMETRY_DISABLED = '1';
  
  // Обрабатываем запрос
  const response = await next();
  
  // Добавляем заголовки безопасности
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
} 