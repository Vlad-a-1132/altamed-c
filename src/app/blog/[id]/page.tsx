import Image from 'next/image';
import Link from 'next/link';

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

export function generateMetadata({ params }: { params: { id: string } }) {
  const article = articles.find(article => article.id === parseInt(params.id));
  
  return {
    title: article ? `${article.title} | Альтамед-с` : 'Статья | Альтамед-с',
    description: article ? article.title : 'Медицинская статья от специалистов Альтамед-с',
  };
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const articleId = parseInt(params.id);
  const article = articles.find(article => article.id === articleId);
  
  if (!article) {
    return (
      <div className="flex flex-col min-h-full items-center justify-center py-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Статья не найдена</h1>
        <p className="text-lg text-gray-600 mb-8">
          К сожалению, запрашиваемая статья не существует или была удалена.
        </p>
        <Link href="/blog" className="bg-blue-600 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 transition">
          Вернуться к блогу
        </Link>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-sm text-blue-600 font-medium mb-4">{article.category}</div>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">{article.title}</h1>
            <div className="text-gray-600 mb-8">{article.date} | {article.author}</div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden">
            <Image 
              src={article.image} 
              alt={article.title} 
              fill
              className="object-cover"
            />
          </div>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div className="mb-4 sm:mb-0">
                <span className="text-gray-600">Категория: </span>
                <Link href={`/blog/category/${article.category.toLowerCase()}`} className="text-blue-600 hover:text-blue-700 transition">
                  {article.category}
                </Link>
              </div>
              <div className="flex space-x-4">
                <span className="text-gray-600">Поделиться: </span>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Похожие статьи</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Вам также может быть интересно
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles
              .filter(a => a.id !== article.id)
              .slice(0, 3)
              .map((relatedArticle) => (
                <div key={relatedArticle.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100">
                  <div className="relative h-48 w-full">
                    <Image 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{relatedArticle.date}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{relatedArticle.title}</h3>
                    <Link href={`/blog/${relatedArticle.id}`} className="text-blue-600 font-medium hover:text-blue-700 transition">
                      Читать полностью →
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-block bg-white text-blue-600 border border-blue-600 font-medium py-3 px-6 rounded-md hover:bg-blue-50 transition">
              Все статьи
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 