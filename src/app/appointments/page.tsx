import AppointmentForm from './AppointmentForm';

export const metadata = {
  title: 'Запись на прием | Альтамед-с',
  description: 'Запишитесь на прием к врачу в медицинском центре Альтамед-с онлайн',
};

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Запись на прием</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Заполните форму ниже, и мы свяжемся с вами для подтверждения записи.
              Вы также можете записаться на прием, позвонив по телефону.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden p-8">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">График работы</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Понедельник - Пятница:</span>
                  <span className="font-medium">08:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Суббота:</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Воскресенье:</span>
                  <span className="font-medium">Выходной</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Контакты</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Телефон:</span>
                  <a href="tel:+74951234567" className="hover:text-blue-600 transition">+7 (495) 123-45-67</a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Email:</span>
                  <a href="mailto:info@altamed-s.ru" className="hover:text-blue-600 transition">info@altamed-s.ru</a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Адрес:</span>
                  <span>г. Москва, ул. Медицинская, 123</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Важная информация</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  При посещении клиники обязательно возьмите с собой паспорт
                </li>
                <li>
                  Для ребенка необходимо свидетельство о рождении и паспорт родителя
                </li>
                <li>
                  В случае невозможности прийти на прием, пожалуйста, предупредите нас заранее
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 