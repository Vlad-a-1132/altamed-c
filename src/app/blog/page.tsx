import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Блог | Альтамед-с',
  description: 'Медицинские статьи и новости от специалистов Альтамед-с',
};

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: 'Как укрепить иммунитет в осенне-зимний период',
      excerpt: 'Практические советы и рекомендации по укреплению иммунной системы в сезон простуд и гриппа от наших специалистов.',
      image: 'https://placehold.co/800x500/EAECFF/333?text=Статья+1',
      date: '15 октября 2023',
      author: 'Иванов И.И., терапевт',
    },
    {
      id: 2,
      title: 'Профилактика сердечно-сосудистых заболеваний',
      excerpt: 'Кардиолог Петрова Е.С. рассказывает о факторах риска и профилактике заболеваний сердечно-сосудистой системы.',
      image: 'https://placehold.co/800x500/EAECFF/333?text=Статья+2',
      date: '2 ноября 2023',
      author: 'Петрова Е.С., кардиолог',
    },
    {
      id: 3,
      title: 'Здоровый сон: как наладить режим и улучшить качество сна',
      excerpt: 'Полноценный сон - ключевой фактор хорошего самочувствия и работоспособности. Наш невролог делится рекомендациями для здорового сна.',
      image: 'https://placehold.co/800x500/EAECFF/333?text=Статья+3',
      date: '20 ноября 2023',
      author: 'Сидоров А.П., невролог',
    },
    {
      id: 4,
      title: 'Детское питание: основные принципы и распространенные ошибки',
      excerpt: 'Педиатр Козлова М.Д. рассказывает о правильном питании детей разных возрастных групп и типичных ошибках родителей.',
      image: 'https://placehold.co/800x500/EAECFF/333?text=Статья+4',
      date: '5 декабря 2023',
      author: 'Козлова М.Д., педиатр',
    },
    {
      id: 5,
      title: 'Весенняя аллергия: симптомы, профилактика и лечение',
      excerpt: 'С приходом весны многие сталкиваются с сезонной аллергией. Как распознать симптомы и справиться с аллергической реакцией.',
      image: 'https://placehold.co/800x500/EAECFF/333?text=Статья+5',
      date: '10 марта 2024',
      author: 'Морозова А.П., дерматолог',
    },
    {
      id: 6,
      title: 'Диспансеризация: что это и зачем она нужна',
      excerpt: 'Рассказываем о важности регулярного медицинского обследования и о том, что входит в программу диспансеризации.',
      image: 'https://placehold.co/800x500/EAECFF/333?text=Статья+6',
      date: '25 января 2024',
      author: 'Иванов И.И., терапевт',
    },
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Медицинский блог</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полезные статьи, советы и рекомендации от наших врачей для поддержания вашего здоровья
            </p>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="relative h-48 w-full">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{article.date} | {article.author}</div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link href={`/blog/${article.id}`} className="text-blue-600 font-medium hover:text-blue-700 transition">
                    Читать полностью →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Категории статей</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ознакомьтесь со статьями по различным медицинским направлениям
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/blog/category/prevention" className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition text-center">
              <h3 className="text-lg font-semibold text-gray-900">Профилактика</h3>
              <p className="text-gray-600 text-sm">12 статей</p>
            </Link>
            <Link href="/blog/category/children" className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition text-center">
              <h3 className="text-lg font-semibold text-gray-900">Детское здоровье</h3>
              <p className="text-gray-600 text-sm">8 статей</p>
            </Link>
            <Link href="/blog/category/nutrition" className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition text-center">
              <h3 className="text-lg font-semibold text-gray-900">Питание</h3>
              <p className="text-gray-600 text-sm">10 статей</p>
            </Link>
            <Link href="/blog/category/seasonal" className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition text-center">
              <h3 className="text-lg font-semibold text-gray-900">Сезонные заболевания</h3>
              <p className="text-gray-600 text-sm">6 статей</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Подпишитесь на нашу рассылку</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Получайте свежие статьи и полезные советы от наших специалистов прямо на вашу электронную почту
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="px-4 py-3 rounded-md text-gray-900 flex-1"
                />
                <button type="submit" className="bg-blue-800 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-900 transition whitespace-nowrap">
                  Подписаться
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 