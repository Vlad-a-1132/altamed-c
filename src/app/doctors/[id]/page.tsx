import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import prisma from '@/lib/db';

// Server component - can directly fetch from the database
async function getDoctor(id: number) {
  try {
    const doctor = await prisma.doctor.findUnique({
      where: { id },
    });
    return doctor;
  } catch (error) {
    console.error('Error fetching doctor:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doctor = await getDoctor(parseInt(id));
  
  if (!doctor) {
    return {
      title: 'Врач не найден | Альтамед-с',
      description: 'Информация о враче не найдена',
    };
  }
  
  return {
    title: `${doctor.name} - ${doctor.specialization} | Альтамед-с`,
    description: `${doctor.name} - ${doctor.specialization} в медицинском центре Альтамед-с. ${doctor.description?.slice(0, 150)}...`,
  };
}

export default async function DoctorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doctor = await getDoctor(parseInt(id));
  
  if (!doctor) {
    notFound();
  }
  
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="relative h-96 w-full rounded-xl overflow-hidden">
                <Image 
                  src={doctor.photo || 'https://placehold.co/400x600/EAECFF/333?text=Доктор'} 
                  alt={doctor.name} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{doctor.name}</h1>
              <div className="text-xl text-blue-600 mb-6">{doctor.specialization}</div>
              
              <div className="flex items-center mb-6">
                <div className="mr-8">
                  <span className="text-sm text-gray-500 block mb-1">Опыт работы</span>
                  <span className="text-lg font-medium">{doctor.experience} лет</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block mb-1">Пациентов принято</span>
                  <span className="text-lg font-medium">1000+</span>
                </div>
              </div>
              
              <Link href="/appointments" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition inline-block">
                Записаться на прием
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">О враче</h2>
              <div className="prose prose-lg max-w-none">
                <p>{doctor.description || 'Информация о враче скоро появится.'}</p>
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Образование и квалификация</h2>
                <ul className="space-y-4">
                  <li className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-medium">Высшее медицинское образование</div>
                    <div className="text-gray-600">Специализация: {doctor.specialization}</div>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-medium">Интернатура</div>
                    <div className="text-gray-600">Специализация: {doctor.specialization}, {2024 - (doctor.experience || 0) - 6}</div>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-medium">Повышение квалификации</div>
                    <div className="text-gray-600">Современные методы диагностики и лечения, 2020</div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Специализация</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Диагностика и лечение</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Профилактика заболеваний</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Консультации</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">График работы</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-medium">Понедельник</td>
                      <td className="py-2 text-right">9:00 - 17:00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-medium">Среда</td>
                      <td className="py-2 text-right">9:00 - 17:00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-medium">Пятница</td>
                      <td className="py-2 text-right">12:00 - 20:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6">
                <Link href="/appointments" className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
                  Записаться на прием
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Doctors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Другие специалисты</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Познакомьтесь с другими врачами нашего медицинского центра
            </p>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/doctors" className="inline-block bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition">
              Все специалисты
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 