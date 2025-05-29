"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Add TypeScript declaration for Yandex Maps
declare global {
  interface Window {
    ymaps: any;
  }
}

export default function Home() {
  // State for tracking current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Ref for doctors slider
  const doctorsSliderRef = useRef<HTMLDivElement>(null);
  
  // Slides data
  const slides = [
    {
      title: "Для взрослых и детей",
      buttonText: "Найти врача",
      buttonLink: "/doctors",
      buttonColor: "#13AB7B",
      image: "/images/baner/banner2.webp"
    },
    {
      title: "КТ диагностика",
      buttonText: "Записаться на КТ",
      buttonLink: "/services/ct-scan",
      buttonColor: "#10B981",
      image: "/images/baner/PROMOKT2.png"
    },
    {
      title: "Семейная медицина",
      buttonText: "Наши услуги",
      buttonLink: "/services",
      buttonColor: "#3B82F6",
      image: "/images/baner/banner2.webp"
    },
    {
      title: "Диагностика и лечение",
      buttonText: "Записаться",
      buttonLink: "/appointments",
      buttonColor: "#EF4444",
      image: "/images/baner/banner2.webp"
    }
  ];

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Function to go to specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  // Массив услуг для правой колонки
  const services = [
    { title: "Хирургия", link: "/services/surgery" },
    { title: "Детский терапевт", link: "/services/pediatric-therapist" },
    { title: "Стоматология", link: "/services/dentistry" },
    { title: "Диагностика", link: "/services/diagnostics" },
    { title: "Рентгенология", link: "/services/radiology" },
    { title: "УЗИ", link: "/services/ultrasound" },
    { title: "Педиатрия", link: "/services/pediatrics" },
    { title: "Отоларингология", link: "/services/otolaryngology" },
    { title: "Услуги на дому", link: "/services/home-services" },
  ];

  // Интересы для нижней секции
  const interests = [
    { title: "Специалисты", icon: "👨‍⚕️", link: "/doctors" },
    { title: "Анализы", icon: "🧪", link: "/analyses" },
    { title: "Заболевания", icon: "🩺", link: "/diseases" },
    { title: "Симптомы", icon: "🤒", link: "/symptoms" },
  ];

  useEffect(() => {
    // Load Yandex Maps API script
    if (!mapLoaded) {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш_API_ключ&lang=ru_RU';
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
      setMapLoaded(true);
    }
  }, [mapLoaded]);

  // Initialize map
  const initMap = () => {
    if (window.ymaps && mapRef.current) {
      window.ymaps.ready(() => {
        // Create map instance
        const map = new window.ymaps.Map(mapRef.current, {
          center: [55.687756, 37.299865], // Coordinates from the provided link
          zoom: 13,
          controls: ['zoomControl', 'fullscreenControl']
        });

        // Add markers for Altamed-S locations
        const marker1 = new window.ymaps.Placemark(
          [55.687756, 37.299865], // Coordinates for Маршала Крылова
          {
            balloonContent: '<strong>Альтамед-С</strong><br>г. Одинцово, Маршала Крылова, д. 23',
            hintContent: 'Альтамед-С ⭐ 4.7'
          },
          {
            preset: 'islands#greenMedicalIcon'
          }
        );

        const marker2 = new window.ymaps.Placemark(
          [55.679408, 37.281685], // Approximate coordinates for Можайское шоссе
          {
            balloonContent: '<strong>Альтамед-С</strong><br>г. Одинцово, Можайское шоссе, д. 141',
            hintContent: 'Альтамед-С ⭐ 4.7'
          },
          {
            preset: 'islands#greenMedicalIcon'
          }
        );

        // Add markers to the map
        map.geoObjects.add(marker1);
        map.geoObjects.add(marker2);
      });
    }
  };

  // Function to scroll doctors slider left
  const scrollDoctorsLeft = () => {
    if (doctorsSliderRef.current) {
      doctorsSliderRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };
  
  // Function to scroll doctors slider right
  const scrollDoctorsRight = () => {
    if (doctorsSliderRef.current) {
      doctorsSliderRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  // CSS for hiding scrollbars
  useEffect(() => {
    // Add CSS to head to hide scrollbars globally on the slider
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Основной раздел с заголовком */}
      <section className="py-3">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Сеть медицинских центров «<span className="italic">Альтамед-с</span>»
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center mx-auto px-4 md:px-0">
            {/* Левая колонка с семейной картинкой и блоком для взрослых и детей - теперь слайдер */}
            <div className="w-full md:w-[548px] h-[300px] md:h-[445px] flex flex-col rounded-[20px] overflow-hidden shadow-md flex-shrink-0 mx-auto md:mx-0">
              {/* Слайдер */}
              <div className="h-[220px] md:h-[358px] bg-emerald-500 relative overflow-hidden">
                {/* Контент для текущего слайда остается тем же */}
                <div className="w-full h-full relative">
        <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    fill
                    className=""
          priority
        />
                </div>
                
                {/* Навигационные стрелки - скрываем на мобильных */}
                <button 
                  onClick={prevSlide} 
                  className="hidden md:block absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide} 
                  className="hidden md:block absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Прогресс-бар в виде точек */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentSlide === index ? "bg-white" : "bg-white/50"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Нижняя часть - белый блок с текстом и кнопкой, меняется в зависимости от текущего слайда */}
              <div className="bg-white p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0">
                <div className="text-black font-medium text-sm md:text-base">{slides[currentSlide].title}</div>
                <Link 
                  href={slides[currentSlide].buttonLink} 
                  className={`bg-[${slides[currentSlide].buttonColor}] text-white rounded-full flex items-center justify-center w-full md:w-[185px] h-[46px] text-sm md:text-base`}
                  style={{ backgroundColor: slides[currentSlide].buttonColor }}
                >
                  {slides[currentSlide].buttonText}
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Правая колонка с услугами */}
            {/* Мобильная версия - цветные блоки 2x4 */}
            <div className="md:hidden grid grid-cols-2 gap-3 w-full max-w-sm mx-auto">
              <Link href="/services/surgery" className="bg-[#E8F4FD] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Центры хирургии</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/pediatric" className="bg-[#FFE8E1] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Детские клиники</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/dentistry" className="bg-[#E8F5E8] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Стоматология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/eco" className="bg-[#FFF8E1] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">ЭКО</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/oncology" className="bg-[#E8F4FD] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Онкология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/emergency" className="bg-[#FFE8F0] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Скорая помощь</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/cosmetology" className="bg-[#FFE8E1] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Косметология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/plastic" className="bg-[#F0E8FF] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Пластика</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Десктопная версия - оригинальные серые блоки */}
            <div className="hidden md:flex flex-col space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/surgery" className="bg-gray-50 p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Хирургия</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/pediatric-therapist" className="bg-gray-50 p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Детский терапевт</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/dentistry" className="bg-gray-50 p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Стоматология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/diagnostics" className="bg-gray-50 p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Диагностика</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/radiology" className="bg-gray-50 p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Рентгенология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/ultrasound" className="bg-gray-50 p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">УЗИ</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/pediatrics" className="bg-gray-50 p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Педиатрия</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/otolaryngology" className="bg-gray-50 p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Отоларингология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/home-services" className="bg-gray-50 p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Услуги на дому</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Блок с отзывами */}
              <div className="bg-gray-50 rounded-[20px] p-3 w-full md:w-[715px] mt-2">
                <h2 className="text-lg font-bold text-black mb-2">
                  Что о нас пишут люди
                </h2>
                
                <div className="bg-white rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-base font-semibold">229 отзывов</div>
                    <div className="text-blue-500 flex items-center text-xs">
                      По умолчанию
                      <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-1 mb-2">
                    <div className="bg-gray-50 p-1 rounded-lg">
                      <div className="flex items-center justify-between text-xs">
                        <span>Персонал</span>
                        <span className="text-green-500 flex items-center">80% <span className="ml-1">👍</span></span>
                      </div>
                      <div className="text-gray-500 text-[10px]">182 отзыва</div>
                    </div>
                    
                    <div className="bg-gray-50 p-1 rounded-lg">
                      <div className="flex items-center justify-between text-xs">
                        <span>Качество</span>
                        <span className="text-green-500 flex items-center">75% <span className="ml-1">👍</span></span>
                      </div>
                      <div className="text-gray-500 text-[10px]">61 отзыв</div>
                    </div>
                    
                    <div className="bg-gray-50 p-1 rounded-lg">
                      <div className="flex items-center justify-between text-xs">
                        <span>Время</span>
                        <span className="text-green-500 flex items-center">58% <span className="ml-1">👍</span></span>
                      </div>
                      <div className="text-gray-500 text-[10px]">25 отзывов</div>
                    </div>
                    
                    <div className="bg-gray-50 p-1 rounded-lg">
                      <div className="flex items-center justify-between text-xs">
                        <span>Чистота</span>
                        <span className="text-green-500 flex items-center">100% <span className="ml-1">👍</span></span>
                      </div>
                      <div className="text-gray-500 text-[10px]">12 отзывов</div>
                    </div>
                    
                    <div className="bg-gray-50 p-1 rounded-lg">
                      <div className="flex items-center justify-between text-xs">
                        <span>УЗИ</span>
                        <span className="text-green-500 flex items-center">60% <span className="ml-1">👍</span></span>
                      </div>
                      <div className="text-gray-500 text-[10px]">12 отзывов</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link
                      href="/reviews"
                      className="bg-white text-black border border-gray-300 rounded-full px-4 py-1 text-xs font-medium"
                    >
                      Читать отзывы
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Что Вас интересует с картой */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
            Что Вас интересует?
          </h2>

          <div className="flex flex-col lg:flex-row w-full justify-center gap-6 lg:gap-0">
            {/* Мобильная версия - блоки как на дизайне */}
            <div className="md:hidden flex flex-col gap-6 w-full max-w-[370px] mx-auto px-4 pr-8">
              {/* Блок Специалисты с изображением врача - w-370 h-125 */}
              <div className="bg-gray-50 rounded-[20px] p-4 w-[360px] h-[125px] flex relative overflow-hidden">
                <div className="flex flex-col justify-start pr-16">
                  <span className="text-2xl font-bold mb-3">Специалисты</span>
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-[130px] h-[130px] overflow-hidden rounded-lg">
                    <Image
                      src="/images/doctors/doc.png"
                      alt="Доктор"
                      width={130}
                      height={130}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Блоки Диагностика и Анализы в ряд - каждый w-177 h-125 */}
              <div className="grid grid-cols-2 gap-14">
                <div className="bg-gray-50 rounded-[20px] p-3 w-[164px] h-[125px] flex flex-col justify-between">
                  <span className="text-lg font-semibold">Диагностика</span>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-[20px] p-3 w-[164px] h-[125px] flex flex-col justify-between">
                  <span className="text-lg font-semibold">Анализы</span>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Блоки Заболевания и Симптомы в ряд - каждый w-177 h-125 */}
              <div className="grid grid-cols-2 gap-14">
                <div className="bg-gray-50 rounded-[20px] p-3 w-[164px] h-[125px] flex flex-col justify-between">
                  <span className="text-lg font-semibold">Заболевания</span>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-[20px] p-3 w-[164px] h-[125px] flex flex-col justify-between">
                  <span className="text-lg font-semibold">Симптомы</span>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Мобильная карта */}
            <div className="md:hidden w-full mx-auto px-4 mt-6">
              <div className="w-full h-[250px] rounded-[20px] overflow-hidden mb-4 relative bg-gradient-to-br from-green-100 to-blue-100">
                <div className="w-full h-full flex flex-col items-center justify-center relative">
                  <div className="text-center z-10">
                    <p className="font-medium text-base mb-2">г. Одинцово,</p>
                    <p className="font-medium text-base mb-4">Маршала Крылова, д. 23</p>
                    <p className="font-medium text-base mb-2">г. Одинцово,</p>
                    <p className="font-medium text-base">Можайское шоссе, д. 141</p>
                  </div>
                  <div className="absolute right-4 top-4 bg-white rounded-full p-2 text-xs shadow-sm">
                    Альтамед-С ⭐ 4.7
                  </div>
                  
                  {/* Добавляем иконки локации */}
                  <div className="absolute left-6 top-16 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute right-8 bottom-20 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Кнопка "Найти клинику" */}
              <button className="w-full bg-emerald-500 text-white py-3 rounded-full flex items-center justify-center font-medium text-sm">
                Найти клинику
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Десктопная версия - оригинальные блоки */}
            <div className="hidden lg:flex flex-col lg:flex-row w-full justify-center gap-6 lg:gap-0">
            {/* Левая колонка с блоками */}
              <div className="flex flex-col gap-[15px] w-full lg:w-[574px] flex-shrink-0 mx-auto lg:mx-0 px-4 lg:px-0">
              {/* Блок Специалисты */}
              <div className="bg-gray-50 rounded-[20px] p-4 w-full h-[140px] flex items-center relative overflow-hidden">
                <div className="flex flex-col max-w-[60%] z-10">
                    <div className="text-lg md:text-xl font-semibold mb-2">Специалисты</div>
                    <p className="text-gray-600 text-sm md:text-base">
                    Найдите подходящего врача в нашей клинике
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full ml-2">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </p>
                </div>
                <div className="absolute right-4 top-0 h-[140px] overflow-hidden">
                  <Image
                    src="/images/doctors/doc.png"
                    alt="Доктор"
                    width={150}
                    height={140}
                    style={{ objectFit: "cover", height: "100%" }}
                    priority
                  />
                </div>
              </div>

              {/* Два блока в ряд: Диагностика и Анализы */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-gray-50 rounded-[20px] p-4 w-full md:w-[279px] h-[116px] relative">
                    <div className="text-lg md:text-xl font-semibold mb-2">Диагностика</div>
                    <p className="text-gray-600 text-sm md:text-base">Современное оборудование</p>
                  <div className="absolute right-4 bottom-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                  <div className="bg-gray-50 rounded-[20px] p-4 w-full md:w-[279px] h-[116px] relative">
                    <div className="text-lg md:text-xl font-semibold mb-2">Анализы</div>
                    <p className="text-gray-600 text-sm md:text-base">Быстро и точно</p>
                  <div className="absolute right-4 bottom-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Два блока в ряд: Заболевания и Симптомы */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-gray-50 rounded-[20px] p-4 w-full md:w-[279px] h-[116px] relative">
                    <div className="text-lg md:text-xl font-semibold mb-2">Заболевания</div>
                    <p className="text-gray-600 text-sm md:text-base">Информация и лечение</p>
                  <div className="absolute right-4 bottom-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                  <div className="bg-gray-50 rounded-[20px] p-4 w-full md:w-[279px] h-[116px] relative">
                    <div className="text-lg md:text-xl font-semibold mb-2">Симптомы</div>
                    <p className="text-gray-600 text-sm md:text-base">Правильная диагностика</p>
                  <div className="absolute right-4 bottom-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Статистика - добавляем под блоками интересов */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 mx-auto w-full place-items-center justify-center">
                  <div className="bg-gray-50 p-4 rounded-[20px] w-full md:w-[271px] h-[116px] overflow-hidden">
                    <div className="text-2xl md:text-3xl font-bold text-black mb-1 overflow-hidden text-ellipsis">135 000+</div>
                  <div className="text-gray-600 text-sm overflow-hidden text-ellipsis">пациентов в год</div>
                </div>
                
                  <div className="bg-gray-50 p-4 rounded-[20px] w-full md:w-[271px] h-[116px] overflow-hidden">
                    <div className="text-2xl md:text-3xl font-bold text-black mb-1 overflow-hidden text-ellipsis">50+</div>
                  <div className="text-gray-600 text-sm overflow-hidden text-ellipsis">квалифицированных врачей</div>
                </div>
                
                  <div className="bg-gray-50 p-4 rounded-[20px] w-full md:w-[271px] h-[116px] overflow-hidden">
                    <div className="text-2xl md:text-3xl font-bold text-black mb-1 overflow-hidden text-ellipsis">несколько</div>
                  <div className="text-gray-600 text-sm overflow-hidden text-ellipsis">клиник для взрослых и детей</div>
                </div>
                
                  <div className="bg-gray-50 p-4 rounded-[20px] w-full md:w-[271px] h-[116px] overflow-hidden">
                    <div className="text-2xl md:text-3xl font-medium text-black mb-1 overflow-hidden text-ellipsis">Работаем с 1997</div>
                  <div className="text-gray-600 text-sm overflow-hidden text-ellipsis">Индивидуальный подход к каждому посетителю</div>
                </div>
              </div>
            </div>

            {/* Правая колонка */}
              <div className="flex flex-col w-full lg:w-[715px] flex-shrink-0 mx-auto lg:mx-[15px] px-4 lg:px-0">
              {/* Яндекс карта */}
                <div className="w-full h-[300px] md:h-[404px] rounded-[20px] overflow-hidden mb-8">
                <div ref={mapRef} className="w-full h-full">
                  {/* Fallback content while map is loading */}
                  {!mapLoaded && (
                    <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center">
                      <div className="text-center">
                        <p className="font-medium text-lg mb-2">г. Одинцово,</p>
                        <p className="font-medium text-lg mb-4">Маршала Крылова, д. 23</p>
                        <p className="font-medium text-lg mb-2">г. Одинцово,</p>
                        <p className="font-medium text-lg">Можайское шоссе, д. 141</p>
                      </div>
                      <div className="absolute right-4 top-4 bg-white rounded-full p-1 text-sm">
                        Альтамед-С ⭐ 4.7
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Контейнер для блока приложения */}
              <div className="flex" style={{ overflow: 'visible' }}>
                {/* Блок с приложением */}
                  <div className="bg-[#ebf7f4] p-4 md:p-6 rounded-[20px] h-auto md:h-[252px] w-full flex flex-col" style={{ overflow: 'visible' }}>
                    <div className="flex flex-col md:flex-row items-start justify-between" style={{ overflow: 'visible' }}>
                      <div className="flex-1 mr-0 md:mr-4 mb-4 md:mb-0">
                        <div className="text-lg md:text-xl font-bold mb-2">Альтамед-С» — твой надёжный помощник в заботе о здоровье</div>
                      <div className="text-gray-600 text-sm mb-4">
                        Не пропускай скидки и важные новости! Подпишись на рассылку и экономь на заботе о здоровье
                      </div>
                        <button className="bg-[#13AB7B] text-white rounded-full px-8 py-3 mt-2 w-full md:w-auto">
                        Подписаться
                      </button>
                    </div>
                      <div className="hidden md:block flex-shrink-0 w-1/3 promo-image-container" style={{ overflow: 'visible', position: 'relative', zIndex: 10, transform: 'scale(1.55) translateX(30px) translateY(20px)', transformOrigin: 'bottom right' }}>
                      <Image
                        src="/images/icons/banersoc.png" 
                        alt="Мобильное приложение Альтамед-С" 
                        width={1600} 
                        height={2200}
                        className="object-contain"
                        style={{ width: '100%', height: '357px' }}
                      />
                    </div>
                  </div>
              
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Акции и специальные предложения */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left px-4 md:px-0 max-w-full overflow-hidden text-ellipsis">
            Акции и специальные предложения
          </h2>
          
          {/* Контейнер для акций */}
          {/* Мобильная версия - вертикальные блоки */}
          <div className="md:hidden flex flex-col gap-4 px-4">
            {/* Блок "Бесплатная консультация врача" */}
            <div className="bg-[#E8F4FD] rounded-[20px] p-4 h-[140px] flex relative overflow-hidden">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2">Бесплатная консультация врача</h3>
                  <p className="text-sm text-gray-600 mb-1">по поводу операций для взрослых и детей</p>
                  <p className="text-sm text-gray-600">с 1 по 31 мая</p>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute right-4 top-4 w-16 h-16">
              
              </div>
            </div>

            {/* Блоки в ряд */}
            <div className="grid grid-cols-2 gap-4">
              {/* Блок "Время заботы о себе" */}
              <div className="bg-[#FFE8F0] rounded-[20px] p-4 h-[140px] flex flex-col justify-between relative overflow-hidden">
                <div>
                  <h3 className="text-sm font-semibold mb-1">Время заботы о себе</h3>
                  <p className="text-xs">Пройдите чек-ап!</p>
                </div>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              
              </div>

              {/* Блок справа */}
              <div className="bg-[#F0E8FF] rounded-[20px] p-4 h-[140px] flex flex-col justify-between relative overflow-hidden">
                <div>
                  <h3 className="text-sm font-semibold mb-1">Пластика век</h3>
                  <p className="text-xs">Специальные цены</p>
                </div>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              
              </div>
            </div>

            {/* Кнопка "Все акции и спецпредложения" для мобильной версии */}
            <button className="w-full bg-white border border-gray-200 text-black rounded-[20px] h-[46px] shadow-sm flex items-center justify-center font-medium text-sm mt-4">
              Все акции и спецпредложения &gt;
            </button>
          </div>

          {/* Десктопная версия - оригинальные блоки */}
          <div className="hidden md:flex flex-col lg:flex-row gap-6 justify-center max-w-[1300px] mx-auto px-4 lg:px-0">
            {/* Левый большой блок */}
            <div className="bg-[#DAF2FF] rounded-[20px] w-full lg:w-[593px] h-[300px] md:h-[374px] flex flex-shrink-0 relative overflow-hidden">
              <div className="p-6 md:p-8 flex flex-col justify-between z-10 w-full lg:w-[60%]">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Скидки на анализы!</h3>
                  <div className="text-black text-sm md:text-base">
                    <p>Понедельник, среда, пятница - 10%</p>
                    <p>Воскресенье - 15%</p>
                  </div>
                </div>
                
                <button className="bg-white text-black rounded-full px-8 py-2 w-fit">
                  Подробнее
                </button>
              </div>
              
              <div className="hidden lg:block absolute bottom-0 right-0 h-full w-[40%]">
                <Image 
                  src="/images/doctors/Альтамед врачи.png" 
                  alt="Альтамед врачи" 
                  width={450} 
                  height={650}
                  className="object-contain absolute bottom-0 right-4"
                />
              </div>
            </div>
            
            {/* Правая колонка с 4 блоками */}
            <div className="flex flex-col gap-4 md:gap-6 flex-1">
              {/* Верхний ряд */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Блок 1 */}
                <div className="bg-[#FFD9E0] rounded-[20px] w-full md:w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden">
                  <div>
                    <h3 className="text-sm md:text-base font-semibold mb-1 overflow-hidden text-ellipsis">Время заботы о себе</h3>
                    <p className="text-xs md:text-sm">Пройдите чек-ап!</p>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm">
                    Подробнее
                  </button>
                  
                  <div className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2">
                    <Image 
                      src="/images/icons/one.png" 
                      alt="Медицинский чек-ап" 
                      width={140} 
                      height={140}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Блок 2 */}
                <div className="bg-[#FADFFF] rounded-[20px] w-full md:w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden">
                  <div>
                    <h3 className="text-sm md:text-base font-semibold mb-1 overflow-hidden text-ellipsis">Скидки пенсионерам</h3>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm">
                    Подробнее
                  </button>
                  
                  <div className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2">
                    {/* <Image 
                      src="/images/icons/3icn.png" 
                      alt="Пластика век" 
                      width={180} 
                      height={180}
                      className="object-contain"
                    /> */}
                  </div>
                </div>
              </div>
              
              {/* Нижний ряд */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Блок 3 */}
                <div className="bg-[#DBF0E9] rounded-[20px] w-full md:w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden">
                  <div>
                    <h3 className="text-sm md:text-base font-semibold mb-1 overflow-hidden text-ellipsis">Скидка 20% на гастроскопию и колоноскопию</h3>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm">
                    Подробнее
                  </button>
                  
                  <div className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2">
                    {/* <Image 
                      src="/images/icons/stomach.png" 
                      alt="Гастроскопия" 
                      width={80} 
                      height={80}
                      className="object-contain"
                    /> */}
                  </div>
                </div>
                
                {/* Блок 4 */}
                <div className="bg-[#FFF6C1] rounded-[20px] w-full md:w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden">
                  <div>
                    <h3 className="text-sm md:text-base font-semibold mb-1 overflow-hidden text-ellipsis">
                      Скидка 30% на КТ<br />для взрослых и<br /> детей
                    </h3>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm">
                    Подробнее
                  </button>
                  
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
                    <Image
                      src="/images/icons/promoKT.png" 
                      alt="КТ сканирование" 
                      width={180} 
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Кнопка "Все акции и спецпредложения" */}
          <div className="hidden md:flex mt-6 justify-center md:justify-start px-4 md:px-0">
            <button className="bg-white border border-gray-200 text-black rounded-[40px] w-full md:w-[316.63px] h-[46px] shadow-sm flex items-center justify-center font-medium text-sm md:text-base">
              Все акции и спецпредложения&gt;
            </button>
          </div>
        </div>
      </section>

      {/* Специалисты слайдер */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
            Наши специалисты
          </h2>
          
          {/* Контейнер с врачами - единый слайдер для всех устройств */}
          <div className="relative mx-auto">
            {/* Горизонтальный слайдер для всех устройств */}
            <div className="relative overflow-hidden">
              <div 
                className="flex gap-4 md:gap-6 pb-6 md:pb-10 w-full overflow-x-auto scrollbar-hide" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                ref={doctorsSliderRef}
              >
                {/* Врач 1 - Добротюк Альбина Витальевна */}
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image 
                      src="/images/doctors/Альбина.png" 
                      alt="Добротюк Альбина Витальевна" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Добротюк Альбина Витальевна</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: 11 лет</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Педиатр</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>
                
                {/* Врач 2 - Дмитриев Алексей Олегович */}
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/doc2.png" 
                      alt="Дмитриев Алексей Олегович" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Дмитриев Алексей Олегович</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: 22 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Невролог, мануальный терапевт, рефлексотерапевт</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>
                
                {/* Врач 3 - Ютанин Сергей Николаевич */}
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/doc3.png" 
                      alt="Ютанин Сергей Николаевич" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Ютанин Сергей Николаевич</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: 49 лет</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Специальность — хирург, маммолог</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>
                
                {/* Врач 4 - Лория Ольга Викторовна */}
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/doc4.png" 
                      alt="Лория Ольга Викторовна" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Лория Ольга Викторовна</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: 20 лет</p>
                      <p className="text-sm text-gray-700 leading-relaxed">УЗИ-диагност</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>

      

                {/* Врач 6 - Дополнительный врач */}
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Альбина.png" 
                      alt="Иванова Марина Сергеевна" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Иванова Марина Сергеевна</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: 15 лет</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Кардиолог, терапевт</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Навигационные кнопки для слайдера */}
            <button 
              onClick={scrollDoctorsLeft} 
              className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-50"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollDoctorsRight} 
              className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-50"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Индикаторы слайдера для мобильных */}
            <div className="md:hidden flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          
          {/* Кнопка "Все врачи" */}
          <div className="mt-6 flex justify-center">
            <button className="bg-gray-100 text-black py-2 px-6 rounded-full flex items-center text-sm md:text-base hover:bg-gray-200">
              Все врачи
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Пресс-центр */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-black mb-6 self-start max-w-full overflow-hidden text-ellipsis">
            Пресс-центр
          </h2>
          
          {/* Навигационные табы */}
          <div className="flex space-x-3 mb-6">
            <button className="bg-emerald-500 text-white py-2 px-6 rounded-full">
              Новости
            </button>
            <button className="bg-gray-100 text-black py-2 px-6 rounded-full">
              Статьи
            </button>
            <button className="bg-gray-100 text-black py-2 px-6 rounded-full">
              СМИ
            </button>
          </div>
          
          {/* Карточки новостей */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {/* Новость 1 */}
            <div className="bg-gray-50 rounded-[20px] overflow-hidden">
              <div className="relative">
                <div className="w-full h-[180px] bg-pink-100 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center">
                    <svg className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm">
                  06.05.2025
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">День донора в «СМ-Клиника»: один шаг — несколько спасенных жизней</h3>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                  23 мая 2025 года в «СМ-Клиника» пройдет очередной День донора — социально значимая акция, направленная на поддержку и помощь тем, кто особенно нуждается в донорской крови.
                </p>
                <button className="text-black font-medium">
                  Подробнее
                </button>
              </div>
            </div>
            
            {/* Новость 2 */}
            <div className="bg-gray-50 rounded-[20px] overflow-hidden">
              <div className="relative">
                <div className="w-full h-[180px] bg-blue-100 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm">
                  06.05.2025
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">Международная конференция «Научная весна 2025»</h3>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                  16 мая 2025 года стартует II Всероссийская научно-практическая конференция с международным участием «Научная весна 2025».
                </p>
                <button className="text-black font-medium">
                  Подробнее
                </button>
              </div>
            </div>
            
            {/* Новость 3 */}
            <div className="bg-gray-50 rounded-[20px] overflow-hidden">
              <div className="relative">
                <div className="w-full h-[180px] bg-yellow-100 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm">
                  30.04.2025
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">День рождения «СМ-Клиника» в Марьиной Роще: забота о здоровье, проверенная временем</h3>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                  30 апреля «СМ-Клиника» в Марьиной Роще отмечает день рождения — шесть лет со дня открытия. За это время медицинский центр посетили многие семьи с детьми, получив квалифицированную медицинскую помощь и поддержку специалистов.
                </p>
                <button className="text-black font-medium">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
          
          {/* Кнопка "Смотреть все" */}
          <div className="mt-6">
            <button className="bg-gray-100 text-black py-2 px-6 rounded-full flex items-center">
              Смотреть все
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Мы готовы вам помочь */}
      <section className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="bg-[#e9f5f0] rounded-[20px] p-4 md:p-6 lg:p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
                  Мы готовы вам помочь
                </h2>
                <p className="text-gray-700 mb-6 text-sm md:text-base">
                  Оставьте свой телефон и мы вам перезвоним и проконсультируем по вашим вопросам
                </p>
                
                <form className="mb-6 max-w-md">
                  <div className="mb-4">
                    <input 
                      type="text" 
                      placeholder="Имя" 
                      className="w-full p-3 rounded-md border border-gray-200"
                    />
                  </div>
                  <div className="mb-4">
                    <input 
                      type="tel" 
                      placeholder="Телефон*" 
                      className="w-full p-3 rounded-md border border-gray-200"
                    />
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm mb-4">
                    Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
                  </p>
                  <button type="submit" className="bg-[#FF7F50] text-white px-8 py-3 rounded-full hover:bg-orange-500 transition w-full md:w-auto">
                    Отправить
                  </button>
                </form>
              </div>
              
              <div className="hidden md:block w-1/2 relative">
                <div className="relative h-full">
                  {/* Vector background image */}
                  <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-end">
                    <Image
                      src="/images/icons/Vector.png"
                      alt="Фон"
                      width={350}
                      height={250}
                      className="object-contain"
                      style={{ zIndex: 1 }}
                    />
                  </div>
                  {/* Doctor image */}
                  <div className="absolute bottom-0 right-0 w-56 h-72 flex items-end justify-end" style={{ zIndex: 2 }}>
                    <Image
                      src="/images/icons/icons6.png"
                      alt="Доктор"
                      width={200}
                      height={250}
                      className="object-contain"
                    />
                  </div>
                  {/* Green corner decoration */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500 rounded-tl-[100px] -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Лицензии */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left max-w-full overflow-hidden text-ellipsis">
            Лицензии
          </h2>
          
          <div className="bg-[#e9f5f0] rounded-[20px] p-4 md:p-6 lg:p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="w-full md:w-1/5 mb-6 md:mb-0">
                <div className="bg-white p-4 rounded-md shadow-sm w-32 h-40 flex items-center justify-center mx-auto">
                  {/* License document placeholder */}
                  <div className="w-24 h-32 bg-gray-100 flex flex-col justify-start p-2">
                    <div className="border-b border-gray-400 w-full mb-2"></div>
                    <div className="border-b border-gray-400 w-full mb-2"></div>
                    <div className="border-b border-gray-400 w-full mb-2"></div>
                    <div className="border-b border-gray-400 w-1/2 mb-2"></div>
                    <div className="mt-4 flex flex-col gap-1">
                      <div className="h-2 bg-gray-300 w-full"></div>
                      <div className="h-2 bg-gray-300 w-full"></div>
                      <div className="h-2 bg-gray-300 w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-3/5 px-0 md:px-4 text-center md:text-left">
                <p className="text-gray-700 mb-6 max-w-xl text-sm md:text-base">
                  Мы осуществляем деятельность на основании медицинских лицензий в соответствии с рекомендациями Минздрава
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="bg-emerald-500 text-white px-6 py-3 rounded-md hover:bg-emerald-600 transition text-sm md:text-base">
                    Посмотреть лицензии
                  </button>
                  <button className="bg-emerald-500 text-white px-6 py-3 rounded-md hover:bg-emerald-600 transition text-sm md:text-base">
                    Правовая информация
                  </button>
                </div>
              </div>
              
              <div className="hidden md:block w-1/5 relative">
                <div className="h-48 relative">
                  {/* Placeholder doctor image with CSS */}
                  <div className="absolute bottom-0 right-0 w-40 h-48">
                    <div className="w-32 h-32 bg-white absolute bottom-0 right-4"></div>
                    <div className="w-16 h-16 bg-[#ffe0bd] rounded-full absolute top-4 right-14"></div>
                    <div className="w-14 h-3 bg-green-500 absolute top-20 right-16"></div>
                    <div className="w-5 h-1 bg-black absolute top-26 right-20"></div>
                    <div className="w-14 h-3 bg-[#7a5c40] absolute top-14 right-16 rounded-b-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap justify-between">
            {/* Column 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/5 mb-8">
              <h3 className="text-black font-medium mb-4">СМ-Клиника</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Специальные предложения</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Услуги</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Врачи</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Диагностика</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Анализы</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Отзывы</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Контакты</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Карта сайта</a></li>
              </ul>
            </div>
            
            {/* Column 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/5 mb-8">
              <h3 className="text-black font-medium mb-4">Популярное</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Детские клиники</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Центр хирургии</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Пластическая хирургия</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Стоматология</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Центр ЭКО</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Онкологический центр</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Косметология</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Скорая помощь</a></li>
              </ul>
            </div>
            
            {/* Column 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/5 mb-8">
              <h3 className="text-black font-medium mb-4">Наши клиники</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Детские клиники</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Центр хирургии</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Пластическая хирургия</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Стоматология</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Центр ЭКО</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Онкологический центр</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Косметология</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Скорая помощь</a></li>
              </ul>
            </div>
            
            {/* Column 4 */}
            <div className="w-full sm:w-1/2 lg:w-1/5 mb-8">
              <h3 className="text-black font-medium mb-4">Информация</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Пациентам</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Правовая информация</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Лицензии клиник</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Политика обработки персональных данных</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Вакансии</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">О холдинге</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 text-sm">Новости</a></li>
              </ul>
            </div>
            
            {/* Column 5 - Contact */}
            <div className="w-full sm:w-1/2 lg:w-1/5 mb-8">
              <div className="mb-4">
                <h3 className="text-black font-medium">Круглосуточная запись</h3>
                <p className="text-gray-500 text-sm">по телефону:</p>
              </div>
              
              <a href="tel:+74951275103" className="text-xl font-bold text-black block mb-6">
                +7 (495) 127-51-03
              </a>
              
              <div className="flex space-x-2">
                <a href="#" className="bg-emerald-500 text-white p-2 rounded-full hover:bg-emerald-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h.003c.247 0 .449-.2.449-.447v-2.948c0-.247-.202-.448-.449-.448l-.536.01c-1.524 0-2.517-.73-3.484-1.696-1.948-1.94-1.577-2.977.305-4.856.56-.565 1.84-1.652 2.254-2.261.856-1.233.089-1.816-.853-1.816h-3.24c-.853 0-1.15.373-1.59 1.162-.744 1.303-1.996 2.81-2.831 2.81-.577 0-.751-.266-.751-.717V5.093c0-1.052-.233-1.219-1.736-1.219h-1.958c-.608 0-.687.165-.687.405 0 .696.956.87 1.045 2.895.013.275.119 1.463-.928 1.463-.799 0-2.058-1.266-3.076-2.913-.645-1.045-.916-1.639-1.04-2.072C.791 3.276.611 3 0 3h-1.5C-1.083 3-1.5 3.414-1.5 4c0 .625.53 3.596 3.365 7.531C4.15 14.345 6.27 16 9.5 16c1.463 0 1.564-.349 1.564-1.059 0-1.285-.033-1.39.767-1.39.559 0 1.516.285 3.001 1.942.856.856 1.33 1.342 1.33 2.428 0 .812.232.926 1 .926h3.517z" />
                  </svg>
                </a>
                <a href="#" className="bg-emerald-500 text-white p-2 rounded-full hover:bg-emerald-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                  </svg>
                </a>
                <a href="#" className="bg-emerald-500 text-white p-2 rounded-full hover:bg-emerald-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </a>
                <a href="#" className="bg-emerald-500 text-white p-2 rounded-full hover:bg-emerald-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}