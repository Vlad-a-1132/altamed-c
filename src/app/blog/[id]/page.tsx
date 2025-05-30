import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/data/static-data';

export function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id.toString(),
  }));
}

export function generateMetadata() {
  return {
    title: 'Статья - Альтамед-С',
    description: 'Читайте наши статьи о здоровье и медицине',
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = articles.find(a => a.id === parseInt(id));
  
  if (!article) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-emerald-600">
              Альтамед-С
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/services" className="text-gray-600 hover:text-emerald-600">Услуги</Link>
              <Link href="/doctors" className="text-gray-600 hover:text-emerald-600">Врачи</Link>
              <Link href="/about" className="text-gray-600 hover:text-emerald-600">О нас</Link>
              <Link href="/contacts" className="text-gray-600 hover:text-emerald-600">Контакты</Link>
            </div>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700">
              Записаться
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-emerald-600">Главная</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-emerald-600">Блог</Link></li>
              <li>/</li>
              <li className="text-gray-900">{article.title}</li>
            </ol>
          </nav>

          {/* Article */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-96">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                  {article.category}
                </span>
                <time className="text-gray-500 text-sm">
                  {new Date(article.date).toLocaleDateString('ru-RU')}
                </time>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
              
              <div className="flex items-center mb-6">
                <span className="text-gray-600">Автор: {article.author}</span>
              </div>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link 
                  href="/blog"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                >
                  ← Вернуться к статьям
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
} 