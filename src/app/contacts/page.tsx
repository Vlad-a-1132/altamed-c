import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Контакты | Альтамед-с',
  description: 'Контактная информация медицинского центра Альтамед-с',
};

export default function ContactsPage() {
  const contactPoints = [
    {
      title: 'Адрес',
      details: 'г. Москва, ул. Медицинская, 123',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Телефон',
      details: '+7 (495) 123-45-67',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: 'Email',
      details: 'info@altamed-s.ru',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const workingHours = [
    { day: 'Понедельник', hours: '08:00 - 20:00' },
    { day: 'Вторник', hours: '08:00 - 20:00' },
    { day: 'Среда', hours: '08:00 - 20:00' },
    { day: 'Четверг', hours: '08:00 - 20:00' },
    { day: 'Пятница', hours: '08:00 - 20:00' },
    { day: 'Суббота', hours: '09:00 - 18:00' },
    { day: 'Воскресенье', hours: 'Выходной' },
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Контакты</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Вы можете связаться с нами любым удобным для вас способом. 
              Мы всегда готовы ответить на ваши вопросы и помочь вам.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactPoints.map((contact, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
                <div className="mb-4">{contact.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Working Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Как нас найти</h2>
              <div className="relative h-80 w-full mb-4 overflow-hidden rounded-lg">
                <Image 
                  src="https://placehold.co/800x600/EAECFF/333?text=Карта" 
                  alt="Карта расположения клиники" 
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Наш медицинский центр расположен в центре города, рядом с метро Медицинская.
                Вы можете добраться до нас на общественном транспорте или личном автомобиле.
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Проезд на общественном транспорте:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Метро &ldquo;Медицинская&rdquo; - выход №3, далее 5 минут пешком</li>
                  <li>Автобусы №123, 456 - остановка &ldquo;Медицинская улица&rdquo;</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">На автомобиле:</h3>
                <p className="text-gray-600">
                  Рядом с нашим центром есть бесплатная парковка для посетителей.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">График работы</h2>
              <div className="space-y-4">
                <div className="flex items-center mb-6">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-600">
                    Медицинский центр &ldquo;Альтамед-с&rdquo; работает для вас ежедневно, кроме воскресенья.
                  </p>
                </div>
                
                <table className="min-w-full">
                  <tbody>
                    {workingHours.map((item, index) => (
                      <tr key={index} className={`${item.day === 'Воскресенье' ? 'text-red-500' : 'text-gray-600'}`}>
                        <td className="py-2 font-medium">{item.day}</td>
                        <td className="py-2 text-right">{item.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Обратите внимание</h3>
                  <p className="text-gray-600 mb-4">
                    В праздничные дни график работы может быть изменен. 
                    Актуальную информацию уточняйте по телефону.
                  </p>
                  <Link href="/appointments" className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition inline-block">
                    Записаться на прием
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Остались вопросы?</h2>
            <p className="text-lg text-gray-600">
              Если у вас остались вопросы или предложения, вы можете заполнить форму ниже, и мы свяжемся с вами в ближайшее время.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Имя <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ваше имя"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Тема <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Тема вашего сообщения"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ваше сообщение"
                ></textarea>
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  Поля, отмеченные <span className="text-red-500">*</span>, обязательны для заполнения
                </p>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
                >
                  Отправить сообщение
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 