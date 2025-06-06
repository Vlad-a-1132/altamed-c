"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function DentistryPage() {
  // State for tracking current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  // State for tracking current promotion slide (mobile)
  const [currentPromoSlide, setCurrentPromoSlide] = useState(0);
  // State for tracking active service category
  const [activeCategory, setActiveCategory] = useState(0);
  
  // Ref for doctors slider
  const doctorsSliderRef = useRef<HTMLDivElement>(null);
  
  // Services data with categories
  const servicesData = [
    {
      title: "Лечение зубов",
      services: [
        { name: "Консультация стоматолога", price: "От 1 500 руб." },
        { name: "Пломбирование зубов", price: "От 5 000 руб." },
        { name: "Лечение кариеса", price: "От 5 000 руб." },
        { name: "Лечение острой зубной боли", price: "От 10 000 руб." },
        { name: "Лечение пульпита", price: "От 5 200 руб." },
        { name: "Лечение периодонтита", price: "От 10 000 руб." },
        { name: "Лечение корневых каналов", price: "От 10 000 руб." },
        { name: "Лечение зубов под микроскопом", price: "От 3 000 руб." },
        { name: "Лечение кариеса системой ICON", price: "От 5 000 руб." },
        { name: "Лечение передних зубов", price: "От 7 950 руб." },
        { name: "Лечение пульпита трехканального зуба", price: "От 20 000 руб." },
        { name: "Удаление нерва зуба", price: "От 6 880 руб." }
      ]
    },
    {
      title: "Профессиональная гигиена",
      services: [
        { name: "Профессиональная чистка зубов", price: "От 6 860 руб." },
        { name: "Чистка зубов Air Flow", price: "От 3 000 руб." },
        { name: "Удаление зубного камня", price: "От 230 руб." },
        { name: "Ультразвуковая чистка зубов", price: "От 230 руб." },
        { name: "Фторирование зубов", price: "Уточнить цену" }
      ]
    },
    {
      title: "Эстетическая стоматология",
      services: [
        { name: "Отбеливание зубов системой Zoom 4", price: "От 38 000 руб." },
        { name: "Удаление зубного налета", price: "От 1 700 руб." },
        { name: "Реставрация зубов", price: "От 6 800 руб." },
        { name: "Моделирование улыбки", price: "От 18 000 руб." },
        { name: "Керамические виниры", price: "От 37 500 руб." },
        { name: "Композитная реставрация зубов", price: "От 12 000 руб." },
        { name: "Композитные виниры", price: "От 8 700 руб." },
        { name: "Накладки на зубы", price: "От 1 500 руб." },
        { name: "Наращивание зубов", price: "От 2 000 руб." },
        { name: "Реставрация передних зубов", price: "От 4 550 руб." },
        { name: "Художественная реставрация зубов", price: "От 7 950 руб." }
      ]
    },
    {
      title: "Пародонтология",
      services: [
        { name: "Консультация стоматолога-пародонтолога", price: "От 2 000 руб." },
        { name: "Компьютерная диагностика состояния пародонта", price: "От 1 600 руб." },
        { name: "Лазерное лечение заболеваний пародонта", price: "От 750 руб." },
        { name: "Вектор терапия", price: "От 700 руб." },
        { name: "Лоскутные операции", price: "От 4 500 руб." },
        { name: "Закрытие рецессии десны", price: "От 10 000 руб." },
        { name: "Кюретаж десен", price: "От 900 руб." },
        { name: "Лечение пародонтоза", price: "От 1 500 руб." },
        { name: "Пластика десны", price: "От 1 500 руб." },
        { name: "Шинирование зубов", price: "От 3 000 руб." }
      ]
    },
    {
      title: "Хирургическая стоматология",
      services: [
        { name: "Консультация стоматолога-хирурга", price: "От 2 000 руб." },
        { name: "Удаление зубов мудрости", price: "От 10 000 руб." },
        { name: "Удаление зубов", price: "От 2 500 руб." },
        { name: "Удаление новообразований", price: "От 5 000 руб." },
        { name: "Удаление кисты зуба", price: "От 4 560 руб." },
        { name: "Пластика уздечки губ", price: "От 6 000 руб." },
        { name: "Пластика уздечки языка", price: "От 6 000 руб." },
        { name: "Ампутация корня зуба", price: "От 15 000 руб." },
        { name: "Вестибулопластика", price: "От 14 000 руб." },
        { name: "Гемисекция зуба", price: "От 3 500 руб." },
        { name: "Резекция верхушки корня зуба", price: "От 15 000 руб." },
        { name: "Ретроградное пломбирование корневых каналов", price: "От 5 000 руб." },
        { name: "Сложное удаление зуба", price: "От 10 000 руб." },
        { name: "Удаление верхнего зуба мудрости", price: "От 8 000 руб." },
        { name: "Удаление дистопированного зуба", price: "От 8 000 руб." },
        { name: "Удаление импланта зуба", price: "От 30 000 руб." },
        { name: "Удаление капюшона зуба", price: "От 11 500 руб." },
        { name: "Удаление нижнего зуба мудрости", price: "От 8 000 руб." },
        { name: "Цистэктомия", price: "От 17 000 руб." }
      ]
    },
    {
      title: "Имплантация зубов",
      services: [
        { name: "Консультация стоматолога-имплантолога", price: "От 2 000 руб." },
        { name: "Одноэтапная имплантация зубов", price: "От 55 000 руб." },
        { name: "Двухэтапная (классическая) имплантация зубов", price: "От 55 000 руб." },
        { name: "Имплантация зубов за один день", price: "От 55 000 руб." },
        { name: "Одномоментная имплантация зубов", price: "От 55 000 руб." },
        { name: "Экспресс-имплантация зубов", price: "От 55 000 руб." },
        { name: "Имплантация передних зубов", price: "От 55 000 руб." },
        { name: "Имплантация жевательных зубов", price: "От 55 000 руб." },
        { name: "Имплантация нижних зубов", price: "От 55 000 руб." },
        { name: "Имплантация верхних зубов", price: "От 55 000 руб." },
        { name: "Полная имплантация зубов", price: "От 55 000 руб." },
        { name: "Имплантация зубов под ключ", price: "От 55 000 руб." },
        { name: "Имплантация одного зуба", price: "От 55 000 руб." },
        { name: "Имплантация зубов ALL-ON-4", price: "От 55 000 руб." },
        { name: "Имплантация зубов ALL-ON-6", price: "От 55 000 руб." },
        { name: "Костная пластика", price: "От 30 000 руб." },
        { name: "Синус-лифтинг", price: "От 35 000 руб." },
        { name: "Импланты Dentium", price: "От 55 000 руб." },
        { name: "Импланты Straumann", price: "От 72 400 руб." },
        { name: "Импланты Astra Tech", price: "От 69 900 руб." }
      ]
    },
    {
      title: "Протезирование зубов",
      services: [
        { name: "Бюгельные протезы", price: "От 48 000 руб." },
        { name: "Консультация стоматолога ортопеда", price: "От 2 000 руб." },
        { name: "Пластиночные протезы", price: "От 34 500 руб." },
        { name: "Покрывные протезы", price: "От 160 000 руб." },
        { name: "Протезы акри-фри", price: "От 40 000 руб." },
        { name: "Акриловые протезы", price: "От 30 000 руб." },
        { name: "Нейлоновые протезы", price: "От 60 000 руб." },
        { name: "Протезирование на имплантах", price: "От 160 000 руб." },
        { name: "Безметалловые коронки", price: "От 28 000 руб." },
        { name: "Керамические коронки", price: "От 28 500 руб." },
        { name: "Коронки E-Max", price: "От 32 000 руб." },
        { name: "Металлические коронки", price: "От 7 800 руб." },
        { name: "Металлопластиковые коронки", price: "От 10 000 руб." },
        { name: "Пластмассовые коронки", price: "От 1 800 руб." },
        { name: "Установка коронки на зуб", price: "От 1 800 руб." },
        { name: "Цельнолитые коронки", price: "От 7 800 руб." },
        { name: "Циркониевые коронки", price: "От 28 700 руб." },
        { name: "Бюгельные протезы на аттачменах (замках)", price: "От 98 000 руб." },
        { name: "Бюгельные протезы на кламмерах", price: "От 45 600 руб." },
        { name: "Восстановительные вкладки", price: "От 25 000 руб." },
        { name: "Восстановление зубов вкладками", price: "От 20 000 руб." },
        { name: "Временные коронки", price: "От 1 800 руб." },
        { name: "Зубной протез «бабочка»", price: "От 10 000 руб." },
        { name: "Композитные коронки", price: "От 9 000 руб." },
        { name: "Культевые вкладки", price: "От 8 500 руб." },
        { name: "Металлокерамические коронки", price: "От 18 600 руб." },
        { name: "Мостовидные протезы", price: "От 1 800 руб." },
        { name: "Протезирование передних зубов", price: "От 1 300 руб." }
      ]
    },
    {
      title: "Исправление прикуса",
      services: [
        { name: "Консультация стоматолога-ортодонта", price: "От 1 500 руб." },
        { name: "Вестибулярные многопетлевые брекеты", price: "От 24 600 руб." },
        { name: "Лигатурные брекеты", price: "От 70 000 руб." },
        { name: "Металлические брекеты", price: "От 350 000 руб." },
        { name: "Ортодонтические микроимпланты", price: "От 12 500 руб." },
        { name: "Самолигирующие брекеты", price: "От 300 000 руб." },
        { name: "3D-технологии в ортодонтии", price: "От 16 000 руб." },
        { name: "Установка брекетов", price: "От 29 000 руб." },
        { name: "Безлигатурные брекеты", price: "От 7 100 руб." },
        { name: "Брекеты Damon", price: "От 350 000 руб." },
        { name: "Брекеты взрослым", price: "От 29 100 руб." },
        { name: "Брекеты на одну челюсть", price: "От 22 770 руб." },
        { name: "Брекеты под ключ", price: "От 7 100 руб." },
        { name: "Выравнивание зубов", price: "От 31 000 руб." },
        { name: "Капы 3D Smile", price: "От 100 000 руб." },
        { name: "Керамические брекеты", price: "От 32 400 руб." },
        { name: "Снятие брекетов", price: "От 24 600 руб." },
        { name: "Установка ретейнеров", price: "От 500 руб." }
      ]
    },
    {
      title: "Детская стоматология",
      services: [
        { name: "Лечение зубов ребенка под общим наркозом", price: "От 23 000 руб." },
        { name: "Консультация детского ортодонта", price: "От 1 500 руб." },
        { name: "Лечение молочных зубов у детей", price: "От 5 000 руб." },
        { name: "Удаление зубов у детей", price: "От 2 500 руб." },
        { name: "Герметизация фиссур", price: "От 2 900 руб." },
        { name: "Профессиональная чистка зубов детям", price: "От 3 640 руб." },
        { name: "Фторирование зубов у детей", price: "От 1 730 руб." },
        { name: "Исправление прикуса у детей", price: "От 1 500 руб." },
        { name: "Коронки на детские зубы", price: "От 6 000 руб." },
        { name: "Лечение стоматита у детей", price: "От 1 500 руб." },
        { name: "Пластика уздечки у детей", price: "От 6 000 руб." },
        { name: "Аппарат Хааса", price: "От 33 000 руб." },
        { name: "Лечение кариеса у детей", price: "От 5 000 руб." },
        { name: "Пластины для выравнивания зубов ребенка", price: "От 23 000 руб." },
        { name: "Установка брекетов детям", price: "От 121 500 руб." },
        { name: "Лечение пульпита у детей", price: "От 7 900 руб." },
        { name: "Лечение периодонтита у детей", price: "От 7 900 руб." },
        { name: "Пломбирование зубов у детей", price: "От 5 000 руб." },
        { name: "Лечение зубов под седацией у детей", price: "От 4 500 руб." }
      ]
    },
    {
      title: "Лечение без боли",
      services: [
        { name: "Лечение зубов под общим наркозом", price: "От 23 000 руб." },
        { name: "Лечение зубов ребенка под общим наркозом", price: "От 23 000 руб." },
        { name: "Удаление зубов под наркозом", price: "От 12 000 руб." },
        { name: "Удаление зубов мудрости под наркозом", price: "От 12 000 руб." },
        { name: "Лечение зубов под седацией", price: "От 4 500 руб." },
        { name: "Лечение зубов под седацией взрослым", price: "От 4 500 руб." },
        { name: "Лечение зубов под седацией у детей", price: "От 4 500 руб." },
        { name: "Лечение зубов с анестезией", price: "От 7 600 руб." }
      ]
    },
    {
      title: "Диагностика",
      services: [
        { name: "Профилактический осмотр стоматолога", price: "От 1 500 руб." },
        { name: "Рентген зубов", price: "От 1 300 руб." },
        { name: "Прицельный снимок", price: "От 1 300 руб." },
        { name: "Панорамный снимок зубов (Ортопантомограмма, ОПТГ)", price: "От 2 200 руб." },
        { name: "Дентальная компьютерная томография (КТ)", price: "От 1 950 руб." },
        { name: "Диагностика окклюзии", price: "От 7 500 руб." }
      ]
    }
  ];

  // Slides data for dentistry
  const slides = [
    {
      title: "Современная стоматология",
      buttonText: "Записаться",
      buttonLink: "/appointments",
      buttonColor: "#13AB7B",
      image: "/images/baner/banner.webp"
    },
    {
      title: "Безболезненное лечение",
      buttonText: "Узнать больше",
      buttonLink: "/services/dentistry/painless",
      buttonColor: "#10B981",
      image: "/images/baner/PROMOKT2.png"
    },
    {
      title: "Имплантация зубов",
      buttonText: "Консультация",
      buttonLink: "/services/dentistry/implants",
      buttonColor: "#3B82F6",
      image: "/images/baner/banner2.webp"
    },
    {
      title: "Эстетическая стоматология",
      buttonText: "Записаться",
      buttonLink: "/services/dentistry/aesthetic",
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
    setCurrentPromoSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevPromoSlide = () => {
    setCurrentPromoSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const goToPromoSlide = (index: number) => {
    setCurrentPromoSlide(index);
  };

  // Автоматическое переключение слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Меняем слайд каждые 5 секунд

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, [slides.length]);

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
              Стоматология «<span className="italic">Альтамед-с</span>»
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center mx-auto px-4 md:px-0">
            {/* Левая колонка с слайдером */}
            <div className="w-full md:w-[548px] h-[300px] md:h-[445px] flex flex-col rounded-[20px] overflow-hidden shadow-md flex-shrink-0 mx-auto md:mx-0">
              {/* Слайдер */}
              <div className="h-[220px] md:h-[358px] bg-emerald-500 relative overflow-hidden">
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
                
                {/* Навигационные стрелки */}
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
                
                {/* Прогресс-бар */}
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

              {/* Нижняя часть */}
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

            {/* Правая колонка с услугами стоматологии */}
            {/* Мобильная версия */}
            <div className="md:hidden grid grid-cols-2 gap-3 w-full max-w-sm mx-auto">
              <Link href="/services/dentistry/expert-opinion" className="bg-[#E8F4FD] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Экспертное мнение врача</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/dentistry/treatment" className="bg-[#FFE8E1] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Лечение зубов</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/dentistry/hygiene" className="bg-[#E8F5E8] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Профессиональная гигиена</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/dentistry/aesthetic" className="bg-[#FFF8E1] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Эстетическая стоматология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/dentistry/periodontics" className="bg-[#E8F4FD] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Пародонтология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/dentistry/surgery" className="bg-[#FFE8F0] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Хирургическая стоматология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/dentistry/implants" className="bg-[#FFE8E1] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Имплантация зубов</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/dentistry/prosthetics" className="bg-[#F0E8FF] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Протезирование зубов</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services/dentistry/orthodontics" className="bg-[#F2F6D6] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Исправление прикуса</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services/dentistry/pediatric" className="bg-[#E2F5F0] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Детская стоматология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services/dentistry/painless" className="bg-[#EEE0EE] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Лечение без боли</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services/dentistry/diagnostics" className="bg-[#DFDBF0] p-3 rounded-[20px] flex items-center justify-between h-[80px]">
                <span className="font-medium text-sm text-gray-800">Диагностика</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Кнопка "Все услуги" для мобильной версии */}
            <div className="md:hidden mt-4 flex justify-center w-full max-w-sm mx-auto">
              <Link 
                href="/services/dentistry" 
                className="bg-emerald-500 text-white rounded-full px-8 py-3 flex items-center justify-center font-medium text-sm hover:bg-emerald-600 transition-colors w-full"
              >
                Все услуги стоматологии
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Десктопная версия */}
            <div className="hidden md:flex flex-col space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/dentistry/expert-opinion" className="bg-[#EDF8F4] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Экспертное мнение врача</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/dentistry/treatment" className="bg-[#FFDCC7] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Лечение зубов</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/dentistry/hygiene" className="bg-[#F6F8F7] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Профессиональная гигиена</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/dentistry/aesthetic" className="bg-[#F2F6D6] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Эстетическая стоматология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/dentistry/periodontics" className="bg-[#E2F5F0] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Пародонтология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/dentistry/surgery" className="bg-[#FDE3E2] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Хирургическая стоматология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/dentistry/implants" className="bg-[#EBD8C9] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Имплантация зубов</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/dentistry/prosthetics" className="bg-[#EEE0EE] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Протезирование зубов</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/dentistry/orthodontics" className="bg-[#DBF0E9] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Исправление прикуса</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/dentistry/pediatric" className="bg-[#DBF0E1] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Детская стоматология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/dentistry/painless" className="bg-[#DBE5F0] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Лечение без боли</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/dentistry/diagnostics" className="bg-[#DFDBF0] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px]">
                  <span className="font-medium text-sm md:text-base">Диагностика</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Кнопка "Все услуги стоматологии" для десктопа */}
              <div className="flex justify-center">
                <Link 
                  href="/services/dentistry" 
                  className="bg-emerald-500 text-white rounded-full py-3 flex items-center justify-center font-medium text-sm hover:bg-emerald-600 transition-colors"
                  style={{ paddingLeft: '8rem', paddingRight: '8rem' }}
                >
                  Все услуги стоматологии
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <span className="text-sm text-gray-600 mb-2">Опытные стоматологи всех направлений</span>
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
                  <div>
                    <span className="text-lg font-semibold">Диагностика</span>
                    <p className="text-xs text-gray-600 mt-1">Рентген, КТ, 3D-диагностика</p>
                  </div>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-[20px] p-3 h-[125px] flex flex-col justify-between w-full">
                  <div>
                    <span className="text-lg font-semibold">Анализы</span>
                    <p className="text-xs text-gray-600 mt-1">Анализы перед лечением</p>
                  </div>
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
                  <div>
                    <span className="text-lg font-semibold">Заболевания</span>
                    <p className="text-xs text-gray-600 mt-1">Болезни зубов и десен</p>
                  </div>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-[20px] p-3 h-[125px] flex flex-col justify-between w-full">
                  <div>
                    <span className="text-lg font-semibold">Симптомы</span>
                    <p className="text-xs text-gray-600 mt-1">Боль, кровоточивость, отеки</p>
                  </div>
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
              <div className="w-full h-[250px] rounded-[20px] overflow-hidden mb-4 bg-gradient-to-br from-emerald-50 to-emerald-100 flex flex-col justify-center items-center p-6 border border-emerald-200">
                <div className="text-center mb-4">
                  <svg className="w-12 h-12 text-emerald-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Наши адреса</h3>
                </div>
                <div className="space-y-3 text-center">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-semibold text-emerald-600">📍 Основная клиника</p>
                    <p className="text-xs text-gray-700">Можайское ш., 141, Одинцово</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-semibold text-emerald-600">📍 Пристройка</p>
                    <p className="text-xs text-gray-700">бул. Маршала Крылова, 23, Одинцово</p>
                  </div>
                </div>
              </div>
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
                    Опытные стоматологи всех направлений
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
                    <p className="text-gray-600 text-sm md:text-base">Рентген, КТ, 3D-диагностика</p>
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
                    <p className="text-gray-600 text-sm md:text-base">Анализы перед лечением</p>
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
                    <p className="text-gray-600 text-sm md:text-base">Болезни зубов и десен</p>
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
                    <p className="text-gray-600 text-sm md:text-base">Боль, кровоточивость, отеки</p>
                  <div className="absolute right-4 bottom-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

         
            </div>

            {/* Правая колонка */}
              <div className="flex flex-col w-full lg:w-[715px] flex-shrink-0 mx-auto lg:mx-[15px] px-4 lg:px-0">
              {/* Яндекс карта */}
                <div className="w-full h-[300px] md:h-[404px] rounded-[20px] overflow-hidden mb-8">
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?ll=37.298%2C55.676&z=14&l=map&pt=37.291%2C55.679%2Cpmwtl1~37.306%2C55.669%2Cpmwtl2" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    title="Карта медицинских центров Альтамед-С"
                  ></iframe>
                </div>

       
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Популярные услуги стоматологии */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center ml-0 md:ml-4 lg:ml-8">
            Популярные услуги стоматологии
          </h2>
          
          <div className="bg-white rounded-[20px] shadow-lg overflow-hidden mx-4 md:mx-0">
            <div className="flex flex-col md:flex-row min-h-[600px]">
              {/* Левая навигационная панель */}
              <div className="w-full md:w-1/3 bg-slate-700">
                <div className="p-6">
                  <div className="space-y-2">
                    {servicesData.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(index)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                          activeCategory === index
                            ? 'bg-emerald-500 text-white'
                            : 'text-gray-300 hover:bg-slate-600 hover:text-white'
                        }`}
                      >
                        <span className="font-medium">{category.title}</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activeCategory === index ? 'rotate-90' : ''
                          }`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Правая панель с услугами */}
              <div className="w-full md:w-2/3 p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {servicesData[activeCategory].title}
                  </h3>
                  <div className="h-1 bg-emerald-500 w-16 rounded"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {servicesData[activeCategory].services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium text-sm md:text-base leading-tight">
                          {service.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
                        <span className="font-semibold text-emerald-600 text-sm md:text-base whitespace-nowrap">
                          {service.price}
                        </span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors">
                    Записаться на консультацию
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества клиники */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 text-center ml-0 md:ml-4 lg:ml-8">
          Сеть медицинских центров 
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-black mb-8 text-center ml-0 md:ml-4 lg:ml-8">
          «Альтамед-с»
          </h3>
          
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Прозрачные цены */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12  rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/icons/цены.svg"
                    alt="Цены"
                    width={132}
                    height={32}
                    className="w-18 h-18"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Прозрачные цены</h4>
                  <p className="text-gray-600 text-sm">Составление предварительного финансового плана лечения</p>
                </div>
              </div>

              {/* Ваш комфорт */}
              <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12  rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/icons/stool.svg"
                    alt="Цены"
                    width={132}
                    height={32}
                    className="w-18 h-18"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Ваш комфорт — наш приоритет</h4>
                  <p className="text-gray-600 text-sm">Используем современные методики обезболивания: анестезию, наркоз или седацию</p>
                </div>
              </div>

              {/* Передовые технологии */}
              <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12  rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/icons/texnj2.svg"
                    alt="Цены"
                    width={132}
                    height={32}
                    className="w-18 h-18"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Передовые технологии</h4>
                  <p className="text-gray-600 text-sm">Применяем в работе современное стоматологическое и диагностическое оборудование экспертного уровня</p>
                </div>
              </div>

              {/* Опыт и репутация */}
              <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12  rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/icons/oput.svg"
                    alt="Цены"
                    width={132}
                    height={32}
                    className="w-18 h-18"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Опыт и репутация</h4>
                  <p className="text-gray-600 text-sm">С 2002 года оказываем полный спектр стоматологических услуг для всей семьи</p>
                </div>
              </div>

              {/* Команда профессионалов */}
              <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12  rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/icons/com.svg"
                    alt="Цены"
                    width={132}
                    height={32}
                    className="w-18 h-18"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Команда профессионалов</h4>
                  <p className="text-gray-600 text-sm">К вашим услугам более 100 специалистов, включая кандидатов наук и врачей с международными сертификатами</p>
                </div>
              </div>

              {/* Развитая сеть клиник */}
              <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12  rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/icons/ste.svg"
                    alt="Цены"
                    width={132}
                    height={32}
                    className="w-18 h-18"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Развитая сеть клиник</h4>
                  <p className="text-gray-600 text-sm">Принимаем пациентов в 9 стоматологических отделениях в разных районах Москвы</p>
                </div>
              </div>

              {/* Довольные клиенты */}
              <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12  rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/icons/teans.svg"
                    alt="Цены"
                    width={132}
                    height={32}
                    className="w-18 h-18"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Более 10 000 довольных клиентов</h4>
                  <p className="text-gray-600 text-sm">Заботимся о красоте улыбок взрослых и самых маленьких пациентов</p>
                </div>
              </div>

              {/* Собственная лаборатория */}
              <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12  rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/icons/lab.svg"
                    alt="Цены"
                    width={132}
                    height={32}
                    className="w-18 h-18"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Собственная зуботехническая лаборатория</h4>
                  <p className="text-gray-600 text-sm">Изготавливаем разнообразные зубные конструкции, в том числе повышенной сложности</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
          Звезды медицины
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
        
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 