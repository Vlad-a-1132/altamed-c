"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Add TypeScript declaration for Yandex Maps
declare global {
  interface Window {
    ymaps: {
      ready: (callback: () => void) => void;
      Map: new (container: HTMLElement, options: {
        center: [number, number];
        zoom: number;
        controls: string[];
      }) => {
        geoObjects: {
          add: (marker: unknown) => void;
        };
      };
      Placemark: new (
        coordinates: [number, number],
        properties: {
          balloonContent: string;
          hintContent: string;
        },
        options: {
          preset: string;
        }
      ) => unknown;
    };
  }
}

export default function Home() {
  // State for tracking current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  // State for tracking current promotion slide (mobile)
  const [currentPromoSlide, setCurrentPromoSlide] = useState(0);
  const mapRef = useRef(null);
  const mobileMapRef = useRef(null); // Добавляем ref для мобильной карты
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
      image: "/images/baner/banner.webp"
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
      image: "/images/baner/PROMOKT2.png"
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

  // Functions for promotion slider
  const nextPromoSlide = () => {
    setCurrentPromoSlide((prev) => (prev === 2 ? 0 : prev + 1)); // 3 slides total
  };

  const prevPromoSlide = () => {
    setCurrentPromoSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const goToPromoSlide = (index: number) => {
    setCurrentPromoSlide(index);
  };
  
  // Массив услуг для правой колонки
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const services = [
    { title: "Хирургия", link: "/services/surgery" },
    { title: "Детский терапевт", link: "/services/pediatric-therapist" },
    { title: "Стоматология", link: "/services/dentistry" },
    { title: "Диагностика", link: "/services/diagnostics" },
    { title: "Рентгенология", link: "/services/radiology" },
    { title: "УЗИ", link: "/services/ultrasound" },
    { title: "Педиатрия", link: "/services/pediatrics" },
    { title: "Отоларингология", link: "/services/otolaryngology" },
    { title: "Гинекология", link: "/services/gynecology" },
  ];

  // Интересы для нижней секции
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  // Автоматическое переключение слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Меняем слайд каждые 5 секунд

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, [slides.length]);

  // Initialize map
  const initMap = () => {
    if (window.ymaps) {
      window.ymaps.ready(() => {
        // Desktop map
        if (mapRef.current) {
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
        }

        // Mobile map
        if (mobileMapRef.current) {
          const mobileMap = new window.ymaps.Map(mobileMapRef.current, {
            center: [55.687756, 37.299865],
            zoom: 12,
            controls: ['zoomControl']
          });

          // Add markers for mobile map
          const mobileMarker1 = new window.ymaps.Placemark(
            [55.687756, 37.299865],
            {
              balloonContent: '<strong>Альтамед-С</strong><br>г. Одинцово, Маршала Крылова, д. 23<br>⭐ 4.7',
              hintContent: 'Альтамед-С ⭐ 4.7'
            },
            {
              preset: 'islands#greenMedicalIcon'
            }
          );

          const mobileMarker2 = new window.ymaps.Placemark(
            [55.679408, 37.281685],
            {
              balloonContent: '<strong>Альтамед-С</strong><br>г. Одинцово, Можайское шоссе, д. 141<br>⭐ 4.7',
              hintContent: 'Альтамед-С ⭐ 4.7'
            },
            {
              preset: 'islands#greenMedicalIcon'
            }
          );

          mobileMap.geoObjects.add(mobileMarker1);
          mobileMap.geoObjects.add(mobileMarker2);
        }
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
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
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
                    unoptimized
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
            {/* Мобильная версия - цветные блоки 2x6 */}
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

              <Link href="/services/diagnostics" className="bg-[#F2F6D6] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Диагностика</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services/ultrasound" className="bg-[#E2F5F0] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">УЗИ</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services/otolaryngology" className="bg-[#EEE0EE] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Отоларингология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services/ct" className="bg-[#DFDBF0] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">КТ</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Кнопка "Все услуги" для мобильной версии */}
            <div className="md:hidden mt-4 flex justify-center w-full max-w-sm mx-auto">
              <Link 
                href="/services" 
                className="bg-emerald-500 text-white rounded-full px-8 py-3 flex items-center justify-center font-medium text-sm hover:bg-emerald-600 transition-colors w-full"
              >
                Все услуги
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Десктопная версия - оригинальные серые блоки */}
            <div className="hidden md:flex flex-col space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/surgery" className="bg-[#EDF8F4] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Педиатрия</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/pediatric-therapist" className="bg-[#FFDCC7] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Детский терапевт</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/dentistry" className="bg-[#F6F8F7] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Стоматология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/diagnostics" className="bg-[#F2F6D6] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Диагностика</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/radiology" className="bg-[#E2F5F0] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Рентгенология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/ultrasound" className="bg-[#FDE3E2] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">УЗИ</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/pediatrics" className="bg-[#EBD8C9] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Педиатрия</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/otolaryngology" className="bg-[#EEE0EE] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Отоларингология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/home-services" className="bg-[#DBF0E9] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Гинекология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/pediatrics" className="bg-[#DBF0E1] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Педиатрия</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/otolaryngology" className="bg-[#DBE5F0] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Отоларингология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/home-services" className="bg-[#DFDBF0] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">КТ</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Кнопка "Все услуги" для десктопа */}
              <div className="flex justify-center">
                <Link 
                  href="/services" 
                  className="bg-emerald-500 text-white rounded-full py-3 flex items-center justify-center font-medium text-sm hover:bg-emerald-600 transition-colors"
                  style={{ paddingLeft: '8rem', paddingRight: '8rem' }}
                >
                  Все услуги
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
             
            </div>
          </div>
        </div>
      </section>

      {/* Что Вас интересует с картой */}
      <section className="pt-0 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
            Что Вас интересует?
          </h2>

          <div className="flex flex-col lg:flex-row w-full justify-center gap-6">
            {/* Мобильная версия - блоки как на дизайне */}
            <div className="md:hidden flex flex-col gap-6 w-full px-4">
              {/* Блок Специалисты с изображением врача */}
              <div className="bg-gray-50 rounded-[20px] p-4 h-[125px] flex relative overflow-hidden w-full">
                <div className="flex flex-col justify-start flex-1 pr-4">
                  <span className="text-2xl font-bold mb-3">Специалисты</span>
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute transform -translate-y-1/2" style={{ top: '58%', right: '2px' }}>
                  <div className="w-[100px] h-[100px] overflow-hidden rounded-lg">
                    <Image
                      src="/images/doctors/doc.png"
                      alt="Доктор"
                      width={100}
                      height={100}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Блоки Диагностика и Анализы в ряд */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-[20px] p-3 h-[125px] flex flex-col justify-between w-full">
                  <span className="text-lg font-semibold">Диагностика</span>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-[20px] p-3 h-[125px] flex flex-col justify-between w-full">
                  <span className="text-lg font-semibold">Анализы</span>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Блоки Заболевания и Симптомы в ряд */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-[20px] p-3 h-[125px] flex flex-col justify-between w-full">
                  <span className="text-lg font-semibold">Заболевания</span>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-[20px] p-3 h-[125px] flex flex-col justify-between w-full">
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
            <div className="md:hidden w-full px-4 mt-6">
              <div className="w-full h-[250px] rounded-[20px] overflow-hidden mb-4 relative">
                <div ref={mobileMapRef} className="w-full h-full">
                  {/* Fallback content while map is loading */}
                  {!mapLoaded && (
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex flex-col items-center justify-center relative">
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
                  )}
                </div>
              </div>
              
              {/* Кнопка "Найти клинику" */}
              <button 
                className="w-full bg-emerald-500 text-white py-3 rounded-full flex items-center justify-center font-medium text-sm hover:bg-emerald-600 transition-colors"
                onClick={() => {
                  // Открываем Яндекс карты с маршрутом
                  window.open('https://yandex.ru/maps/org/altamed_s/1076393023/', '_blank');
                }}
              >
                Найти клинику
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Десктопная версия - оригинальные блоки */}
            <div className="hidden lg:flex flex-col lg:flex-row w-full justify-center gap-6">
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
          <div className="md:hidden px-4">
            {/* Слайдер контейнер */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentPromoSlide * 100}%)` }}
              >
                {/* Слайд 1 */}
                <div className="w-full flex-shrink-0 flex flex-col gap-4">
                  {/* Блок "Скидки на анализы!" */}
                  <div className="bg-[#DAF2FF] rounded-[20px] p-4 h-[180px] flex relative overflow-hidden">
                    <div className="flex-1 flex flex-col justify-between z-10">
                      <div>
                        <h3 className="text-lg font-bold mb-2">Скидки на анализы!</h3>
                        <p className="text-sm text-gray-600 mb-1">Понедельник, среда, пятница - 10%</p>
                        <p className="text-sm text-gray-600">Воскресенье - 15%</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute right-0 bottom-0 w-[120px] h-[125px] overflow-hidden">
                      <Image 
                        src="/images/doctors/Альтамед врачи.png" 
                        alt="Альтамед врачи" 
                        width={120} 
                        height={160}
                        className="object-contain h-full"
                      />
                    </div>
                  </div>

                  {/* Блоки в ряд */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Блок "Время заботы о себе" */}
                    <div className="bg-[#FFD9E0] rounded-[20px] p-3 h-[140px] flex flex-col justify-between relative overflow-hidden">
                      <div>
                        <h3 className="text-sm font-semibold mb-1">Время заботы о себе</h3>
                        <p className="text-xs">Пройдите чек-ап!</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-[60px] h-[60px]">
                        <Image 
                          src="/images/icons/one.png" 
                          alt="Медицинский чек-ап" 
                          width={60} 
                          height={60}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Блок "Скидки пенсионерам" */}
                    <div className="bg-[#FADFFF] rounded-[20px] p-3 h-[140px] flex flex-col justify-between relative overflow-hidden">
                      <div>
                        <h3 className="text-sm font-semibold mb-1">Скидки пенсионерам</h3>
                        <p className="text-xs">Специальные условия</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[70px] h-[40px]">
                        <Image 
                          src="/images/icons/promo-5.png" 
                          alt="Скидки пенсионерам" 
                          width={70} 
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Слайд 2 */}
                <div className="w-full flex-shrink-0 flex flex-col gap-4">
                  {/* Блок "Гастроскопия и колоноскопия" */}
                  <div className="bg-[#DBF0E9] rounded-[20px] p-4 h-[180px] flex relative overflow-hidden">
                    <div className="flex-1 flex flex-col justify-between z-10">
                      <div>
                        <h3 className="text-lg font-bold mb-2">Скидка 20% на гастроскопию</h3>
                        <p className="text-sm text-gray-600 mb-1">и колоноскопию</p>
                        <p className="text-sm text-gray-600">Качественная диагностика</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[80px] h-[60px]">
                      <Image 
                        src="/images/icons/promo-6.png" 
                        alt="Гастроскопия" 
                        width={80} 
                        height={60}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Блоки в ряд */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Блок "КТ диагностика" */}
                    <div className="bg-[#FFF6C1] rounded-[20px] p-3 h-[140px] flex flex-col justify-between relative overflow-hidden">
                      <div>
                        <h3 className="text-sm font-semibold mb-1">Скидка 30% на КТ</h3>
                        <p className="text-xs">для взрослых и детей</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[60px] h-[30px]">
                        <Image
                          src="/images/icons/promoKT.png" 
                          alt="КТ сканирование" 
                          width={60} 
                          height={30}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Дополнительный блок */}
                    <div className="bg-[#E8F4FD] rounded-[20px] p-3 h-[140px] flex flex-col justify-between relative overflow-hidden">
                      <div>
                        <h3 className="text-sm font-semibold mb-1">Бесплатная консультация</h3>
                        <p className="text-xs">при первом обращении</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Слайд 3 */}
                <div className="w-full flex-shrink-0 flex flex-col gap-4">
                  {/* Блок "Семейное здоровье" */}
                  <div className="bg-[#E8F5E8] rounded-[20px] p-4 h-[180px] flex relative overflow-hidden">
                    <div className="flex-1 flex flex-col justify-between z-10">
                      <div>
                        <h3 className="text-lg font-bold mb-2">Семейное здоровье</h3>
                        <p className="text-sm text-gray-600 mb-1">Комплексные программы</p>
                        <p className="text-sm text-gray-600">для всей семьи</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Блоки в ряд */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Блок "Профилактика" */}
                    <div className="bg-[#FFE8E1] rounded-[20px] p-3 h-[140px] flex flex-col justify-between relative overflow-hidden">
                      <div>
                        <h3 className="text-sm font-semibold mb-1">Профилактические осмотры</h3>
                        <p className="text-xs">По доступным ценам</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Блок "Детское здоровье" */}
                    <div className="bg-[#F0E8FF] rounded-[20px] p-3 h-[140px] flex flex-col justify-between relative overflow-hidden">
                      <div>
                        <h3 className="text-sm font-semibold mb-1">Детское здоровье</h3>
                        <p className="text-xs">Специальные цены</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Навигационные стрелки */}
              <button 
                onClick={prevPromoSlide} 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white z-10"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextPromoSlide} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white z-10"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Индикаторы слайдов */}
              <div className="flex justify-center mt-4 space-x-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => goToPromoSlide(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentPromoSlide === index ? "bg-emerald-500" : "bg-gray-300"
                    }`}
                  ></button>
                ))}
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
                  
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
                    <Image 
                      src="/images/icons/promo-5.png" 
                      alt="Пластика век" 
                      width={250} 
                      height={120}
                      className="object-contain"
                    />
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
                    <Image 
                      src="/images/icons/promo-6.png" 
                      alt="Гастроскопия" 
                      width={120} 
                      height={80}
                      className="object-contain"
                    />
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
                <div className="w-full h-[180px] overflow-hidden">
                  <Image
                    src="/images/news/sert-ivanova-1200x831.jpg"
                    alt="День донора в СМ-Клиника"
                    width={400}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm">
                  06.05.2025
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">Иванова Ольга Юрьевна посетила XXVI Конгресс педиатров России</h3>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                ВРАЧ СУРДОЛОГ – ОТОРИНОЛАРИНГОЛОГ
Участвовала в научной программе XXVI Конгресса педиатров России с международным участием
«Актуальные проблемы педиатрии»

                </p>
                <button className="text-black font-medium">
                  Подробнее
                </button>
              </div>
            </div>
            
            {/* Новость 2 */}
            <div className="bg-gray-50 rounded-[20px] overflow-hidden">
              <div className="relative">
                <div className="w-full h-[180px] overflow-hidden">
                  <Image
                    src="/images/news/Интервью с Еленой Будко.webp"
                    alt="Интервью с Еленой Будко"
                    width={400}
                    height={180}
                    className="w-full object-cover"
                    style={{ height: '341px' }}
                  />
                </div>
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm">
                  06.05.2025
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">Интервью с Еленой Будко</h3>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                Прежде всего, профессия врача – это большая ответственность за здоровье и жизнь другого человека. Грамотный врач должен непрерывно развиваться и расширять свои знания в различных областях медицины
                </p>
                <button className="text-black font-medium">
                  Подробнее
                </button>
              </div>
            </div>
            
            {/* Новость 3 */}
            <div className="bg-gray-50 rounded-[20px] overflow-hidden">
              <div className="relative">
                <div className="w-full h-[180px] overflow-hidden">
                  <Image
                    src="/images/news/11222-1-1.webp"
                    alt="Интервью с Еленой Будко"
                    width={400}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm">
                  30.04.2025
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">Высокоинтенсивная магнитотерапия (SIS)</h3>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                Высокоинтенсивная магнитотерапия (SIS) — это супериндуктивная система, которая состоит из блока управления и специальной катушки. Аппарат создает магнитное поле частотой до 150 Гц. Это запатентованная и уже проверенная в США и западных странах процедура, которая сегодня нашла применение в медицине, реабилитации и спорте. Высокоинтенсивная магнитотерапия помогает облегчить боль, улучшает подвижность суставов, стимулирует заживление переломов костей, вызывает мышечные сокращения и миорелаксацию. Во время процедуры происходят повторяющиеся сокращения мышечных волокон, которые:
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

   
    </div>
  );
}