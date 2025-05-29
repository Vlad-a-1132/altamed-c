import Link from 'next/link';

export default function DoctorsNotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Врач не найден</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md text-center">
        К сожалению, информация о запрашиваемом враче не найдена или была удалена.
      </p>
      <div className="flex space-x-4">
        <Link href="/doctors" className="bg-blue-600 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 transition">
          Все врачи
        </Link>
        <Link href="/" className="border border-gray-300 text-gray-700 py-2 px-6 rounded-md font-medium hover:bg-gray-50 transition">
          На главную
        </Link>
      </div>
    </div>
  );
} 