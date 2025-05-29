import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'О нас | Альтамед-с',
  description: 'О медицинском центре Альтамед-с - наша история, врачи и ценности',
};

export default function AboutPage() {
  const stats = [
    { label: 'лет опыта', value: '15+' },
    { label: 'квалифицированных врачей', value: '45+' },
    { label: 'довольных пациентов', value: '10000+' },
    { label: 'медицинских услуг', value: '150+' },
  ];

  const values = [
    {
      title: 'Профессионализм',
      description: 'Мы постоянно развиваем свои навыки и следим за инновациями в медицине.',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Забота о пациенте',
      description: 'Индивидуальный подход и внимание к каждому пациенту - наш приоритет.',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Инновации',
      description: 'Мы используем современное оборудование и новейшие методики лечения.',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Ответственность',
      description: 'Мы несем ответственность за каждое решение и действие.',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">О нас</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Медицинский центр «Альтамед-с» — это команда профессионалов, современное оборудование и индивидуальный подход к каждому пациенту.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Медицинский центр «Альтамед-с» был основан в 2008 году группой врачей, объединенных общей идеей — создать современную клинику, где пациенты получат высококачественную медицинскую помощь с использованием новейших технологий и методик лечения.
                </p>
                <p>
                  За 15 лет работы мы выросли из небольшой клиники в сеть медицинских центров, заслужили доверие более 10 000 пациентов и собрали команду из лучших специалистов различных медицинских направлений.
                </p>
                <p>
                  Сегодня «Альтамед-с» — это современный многопрофильный медицинский центр, где каждый пациент может получить полный спектр медицинских услуг: от диагностики и профилактики до лечения и реабилитации.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-96 w-full rounded-xl overflow-hidden">
                <Image 
                  src="https://placehold.co/800x600/EAECFF/333?text=Медицинский+центр" 
                  alt="История медицинского центра Альтамед-с" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Мы руководствуемся ключевыми принципами, которые помогают нам обеспечивать высокое качество медицинской помощи
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              В нашем центре работают высококвалифицированные специалисты с многолетним опытом работы
            </p>
          </div>
          
          <div className="text-center">
            <Link href="/doctors" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition">
              Познакомиться с нашими врачами
            </Link>
          </div>
        </div>
      </section>

      {/* Licenses and Certificates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Лицензии и сертификаты</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Наш медицинский центр имеет все необходимые лицензии и сертификаты, подтверждающие высокое качество предоставляемых услуг
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                <div className="relative h-40 w-full overflow-hidden rounded-lg">
                  <Image 
                    src={`https://placehold.co/400x300/EAECFF/333?text=Лицензия ${index + 1}`}
                    alt={`Лицензия ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Доверьте свое здоровье профессионалам</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Записывайтесь на прием к нашим специалистам и получите качественную медицинскую помощь
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/appointments" className="bg-white text-blue-600 py-3 px-6 rounded-md font-medium hover:bg-gray-100 transition text-center">
                Записаться на прием
              </Link>
              <Link href="/contacts" className="border border-white text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition text-center">
                Контакты
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 