import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// In a real application, this would come from the database
const articles = [
  {
    id: 1,
    title: 'Как укрепить иммунитет в осенне-зимний период',
    content: `
      <p>С наступлением холодного времени года возрастает риск заболеть простудой или гриппом. Именно поэтому так важно заранее позаботиться об укреплении иммунитета.</p>
      
      <h3>Правильное питание</h3>
      <p>Основа крепкого иммунитета — это сбалансированное питание. Включите в свой рацион больше свежих овощей и фруктов, особенно богатых витамином C: цитрусовые, киви, болгарский перец, квашеная капуста. Полезны также продукты, содержащие цинк и селен: орехи, морепродукты, злаки.</p>
      
      <h3>Физическая активность</h3>
      <p>Умеренные физические нагрузки стимулируют работу иммунной системы. Ежедневные прогулки на свежем воздухе, зарядка по утрам, плавание в бассейне — все это поможет организму противостоять инфекциям.</p>
      
      <h3>Полноценный сон</h3>
      <p>Недостаток сна негативно влияет на иммунную систему. Старайтесь спать не менее 7-8 часов в сутки и ложиться в одно и то же время.</p>
      
      <h3>Минимизация стресса</h3>
      <p>Хронический стресс ослабляет защитные силы организма. Осваивайте техники релаксации, находите время для хобби и общения с близкими людьми.</p>
      
      <h3>Закаливание</h3>
      <p>Постепенное закаливание организма помогает адаптироваться к перепадам температур и укрепляет иммунитет. Начните с обтираний прохладной водой, постепенно снижая температуру.</p>
      
      <h3>Витаминная поддержка</h3>
      <p>В осенне-зимний период может потребоваться дополнительный прием витаминов и минералов. Однако перед началом приема любых добавок необходимо проконсультироваться с врачом.</p>
    `,
    image: 'https://placehold.co/800x500/EAECFF/333?text=Статья+1',
    date: '15 октября 2023',
    author: 'Иванов И.И., терапевт',
    category: 'Профилактика',
  },
  {
    id: 2,
    title: 'Профилактика сердечно-сосудистых заболеваний',
    content: `
      <p>Сердечно-сосудистые заболевания остаются ведущей причиной смертности во всем мире. Однако большинство из них можно предотвратить, изменив образ жизни и следуя простым рекомендациям.</p>
      
      <h3>Здоровое питание</h3>
      <p>Отдавайте предпочтение пище, богатой овощами, фруктами, цельнозерновыми продуктами, нежирными источниками белка. Ограничьте потребление соли, сахара и трансжиров.</p>
      
      <h3>Регулярная физическая активность</h3>
      <p>Старайтесь уделять физическим упражнениям не менее 150 минут в неделю. Это может быть быстрая ходьба, плавание, езда на велосипеде или любая другая активность, которая вам нравится.</p>
      
      <h3>Контроль веса</h3>
      <p>Лишний вес увеличивает нагрузку на сердце и повышает риск развития сердечно-сосудистых заболеваний. Поддержание нормального веса — важный фактор здоровья сердца.</p>
      
      <h3>Отказ от вредных привычек</h3>
      <p>Курение и злоупотребление алкоголем негативно влияют на состояние сердечно-сосудистой системы. Полный отказ от курения и умеренное потребление алкоголя значительно снижают риски.</p>
      
      <h3>Регулярные медицинские обследования</h3>
      <p>Контролируйте уровень артериального давления, холестерина и сахара в крови. Регулярные профилактические осмотры помогут выявить проблемы на ранней стадии.</p>
      
      <h3>Управление стрессом</h3>
      <p>Хронический стресс может привести к повышению артериального давления и другим проблемам с сердцем. Найдите способы расслабления и снятия напряжения, которые подходят именно вам.</p>
    `,
    image: 'https://placehold.co/800x500/EAECFF/333?text=Статья+2',
    date: '2 ноября 2023',
    author: 'Петрова Е.С., кардиолог',
    category: 'Профилактика',
  },
];

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