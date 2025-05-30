import Link from 'next/link';
import Image from 'next/image';
import prisma from '@/lib/db';

export const metadata = {
  title: 'Врачи | Альтамед-с',
  description: 'Наши высококвалифицированные специалисты в медицинском центре Альтамед-с',
};

// Define doctor type
type Doctor = {
  id: number;
  name: string;
  specialization: string;
  experience: number | null;
  photo: string | null;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
};

// Use server component to fetch doctors
async function getDoctors(): Promise<Doctor[]> {
  try {
    const doctors = await prisma.doctor.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    return doctors;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return [];
  }
}

export default async function DoctorsPage() {
  const doctors = await getDoctors();

  const whyChooseUs = [
    {
      title: 'Высокая квалификация',
      description: 'Все наши врачи имеют высшее медицинское образование, сертификаты специалистов и регулярно проходят курсы повышения квалификации.',
      icon: (
        <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Многолетний опыт',
      description: 'Наши специалисты имеют богатый опыт работы, что позволяет им эффективно диагностировать и лечить различные заболевания.',
      icon: (
        <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Индивидуальный подход',
      description: 'Мы уделяем внимание каждому пациенту и разрабатываем индивидуальные программы диагностики и лечения.',
      icon: (
        <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Наши специалисты</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              В медицинском центре «Альтамед-с» работают высококвалифицированные врачи с многолетним опытом работы.
              Наши специалисты постоянно совершенствуют свои навыки и применяют современные методики лечения.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {doctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor: Doctor) => (
                <div key={doctor.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100">
                  <div className="relative h-80 w-full">
                    <Image 
                      src={doctor.photo || 'https://placehold.co/400x600/EAECFF/333?text=Доктор'} 
                      alt={`Доктор ${doctor.name}`} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h2>
                    <p className="text-blue-600 mb-4">{doctor.specialization}</p>
                    <p className="text-gray-600 mb-4">Опыт работы: {doctor.experience || 0} лет</p>
                    <Link href={`/doctors/${doctor.id}`} className="text-blue-600 font-medium hover:text-blue-700 transition">
                      Подробнее →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Специалисты в данный момент не найдены</h3>
              <p className="text-gray-600">Информация о врачах будет добавлена в ближайшее время.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают наших врачей</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Наши специалисты сочетают профессионализм, опыт и заботу о каждом пациенте
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Запишитесь на прием к специалисту</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Получите профессиональную консультацию и качественное лечение у наших врачей
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