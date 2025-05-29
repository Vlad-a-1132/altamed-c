import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Услуги | Альтамед-с',
  description: 'Медицинские услуги клиники Альтамед-с для взрослых и детей',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'diagnostics',
      title: 'Диагностика',
      description: 'Современные методы диагностики заболеваний',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      services: [
        { name: 'УЗИ', price: 1500 },
        { name: 'ЭКГ', price: 1200 },
        { name: 'МРТ', price: 5000 },
        { name: 'КТ', price: 4500 },
        { name: 'Рентген', price: 1800 },
        { name: 'Лабораторные анализы', price: 800 },
      ],
    },
    {
      id: 'therapy',
      title: 'Терапия',
      description: 'Профессиональное лечение и профилактика заболеваний',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      services: [
        { name: 'Прием терапевта', price: 1800 },
        { name: 'Прием кардиолога', price: 2200 },
        { name: 'Прием невролога', price: 2000 },
        { name: 'Прием гастроэнтеролога', price: 2100 },
        { name: 'Прием эндокринолога', price: 2200 },
        { name: 'Прием дерматолога', price: 1900 },
      ],
    },
    {
      id: 'surgery',
      title: 'Хирургия',
      description: 'Хирургические вмешательства любой сложности',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5m0 0l9-5-9-5-9 5 9 5m0 0v6" />
        </svg>
      ),
      services: [
        { name: 'Консультация хирурга', price: 2000 },
        { name: 'Малые хирургические вмешательства', price: 5000 },
        { name: 'Лапароскопические операции', price: 25000 },
        { name: 'Удаление новообразований', price: 7000 },
        { name: 'Пластическая хирургия', price: 30000 },
        { name: 'Послеоперационное наблюдение', price: 3000 },
      ],
    },
    {
      id: 'pediatrics',
      title: 'Педиатрия',
      description: 'Забота о здоровье детей с самого рождения',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      services: [
        { name: 'Прием педиатра', price: 1800 },
        { name: 'Вакцинация', price: 1500 },
        { name: 'Профилактический осмотр', price: 2000 },
        { name: 'Лечение детских заболеваний', price: 2500 },
        { name: 'Консультация детского невролога', price: 2200 },
        { name: 'Консультация детского хирурга', price: 2300 },
      ],
    },
    {
      id: 'prevention',
      title: 'Профилактика',
      description: 'Программы профилактики и раннего выявления заболеваний',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      services: [
        { name: 'Общий осмотр', price: 2000 },
        { name: 'Комплексное обследование', price: 8000 },
        { name: 'Скрининг на онкозаболевания', price: 5000 },
        { name: 'Профилактика сердечно-сосудистых заболеваний', price: 4500 },
        { name: 'Вакцинация', price: 1500 },
        { name: 'Диспансеризация', price: 7000 },
      ],
    },
    {
      id: 'dental',
      title: 'Стоматология',
      description: 'Профессиональный уход за зубами и лечение стоматологических заболеваний',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      services: [
        { name: 'Консультация стоматолога', price: 1000 },
        { name: 'Лечение кариеса', price: 3000 },
        { name: 'Профессиональная чистка', price: 4000 },
        { name: 'Отбеливание зубов', price: 8000 },
        { name: 'Имплантация', price: 25000 },
        { name: 'Протезирование', price: 15000 },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Наши услуги</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Мы предлагаем широкий спектр медицинских услуг для взрослых и детей. 
              Наши специалисты используют современное оборудование и инновационные методики.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((category) => (
              <div key={category.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="mb-4">{category.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2" id={category.id}>{category.title}</h2>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <a href={`#${category.id}-details`} className="text-blue-600 font-medium hover:text-blue-700 transition">
                  Подробнее →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Categories */}
      {services.map((category) => (
        <section key={category.id} id={`${category.id}-details`} className="py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
              <p className="text-lg text-gray-600">{category.description}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Услуга
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Стоимость (₽)
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Запись
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {category.services.map((service, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {service.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                        {service.price.toLocaleString('ru-RU')} ₽
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href="/appointments" className="text-blue-600 hover:text-blue-900">
                          Записаться
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Если у вас остались вопросы или вы хотите получить более подробную информацию о наших услугах, свяжитесь с нами
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