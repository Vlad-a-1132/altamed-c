"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Компонент для интерактивного сравнения изображений
const BeforeAfterSlider = ({ beforeImage, afterImage, title }: { 
  beforeImage: string, 
  afterImage: string, 
  title: string 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  // Обработчики для touch событий
  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchend', handleGlobalTouchEnd);
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-64 overflow-hidden rounded-[20px] cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Изображение "После" (фон) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={`После - ${title}`}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-emerald-500 text-white px-2 py-1 rounded text-xs z-10">
          После
        </div>
      </div>
      
      {/* Изображение "До" (перекрывающее) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={`До - ${title}`}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded text-xs z-10">
          До
        </div>
      </div>
      
      {/* Вертикальная линия с кнопкой */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white z-20 cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-col-resize"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function TreatmentPage() {
  // State for tracking current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Ref for doctors slider
  const doctorsSliderRef = useRef<HTMLDivElement>(null);

  // Slides data for treatment
  const slides = [
    {
      title: "Лечение зубов",
      subtitle: "Современные методы безболезненного лечения",
      buttonText: "Записаться на консультацию",
      buttonLink: "/appointments",
      buttonColor: "#13AB7B",
      image: "/images/baner/banner.webp"
    },
    {
      title: "Лечение под микроскопом",
      subtitle: "Высочайшая точность лечения",
      buttonText: "Узнать больше",
      buttonLink: "/services/dentistry/microscope",
      buttonColor: "#10B981",
      image: "/images/baner/PROMOKT2.png"
    },
    {
      title: "Безболезненное лечение",
      subtitle: "Современная анестезия",
      buttonText: "Консультация",
      buttonLink: "/services/dentistry/painless",
      buttonColor: "#3B82F6",
      image: "/images/baner/banner2.webp"
    }
  ];

  // Treatment services data
  const treatmentServices = [
    {
      id: 1,
      name: "Консультация стоматолога",
      price: "от 1 500 руб.",
      image: "/images/dentisrty/Консультация стоматолога.jpg",
      description: "Профессиональный осмотр и диагностика состояния зубов"
    },
    {
      id: 2,
      name: "Пломбирование зубов",
      price: "от 5 000 руб.",
      image: "/images/dentisrty/Пломбирование зубов.jpg",
      description: "Качественные пломбы с использованием современных материалов"
    },
    {
      id: 3,
      name: "Лечение кариеса",
      price: "от 5 000 руб.",
      image: "/images/dentisrty/Лечение кариеса.jpg",
      description: "Эффективное лечение кариеса на любой стадии"
    },
    {
      id: 4,
      name: "Лечение острой зубной боли",
      price: "от 10 000 руб.",
      image: "/images/dentisrty/острая зубная боль.jpg",
      description: "Экстренная помощь при острой зубной боли"
    },
    {
      id: 5,
      name: "Лечение пульпита",
      price: "от 5 200 руб.",
      image: "/images/dentisrty/пильпит.jpg",
      description: "Современные методы лечения воспаления пульпы"
    },
    {
      id: 6,
      name: "Лечение периодонтита",
      price: "от 10 000 руб.",
      image: "/images/dentisrty/переодонтит.jpg",
      description: "Комплексное лечение воспаления околозубных тканей"
    },
    {
      id: 7,
      name: "Лечение корневых каналов",
      price: "от 10 000 руб.",
      image: "/images/dentisrty/каналы.jpg",
      description: "Эндодонтическое лечение с использованием микроскопа"
    },
    {
      id: 8,
      name: "Лечение зубов под микроскопом",
      price: "от 3 000 руб.",
      image: "/images/dentisrty/микроскоп.jpg",
      description: "Высокоточное лечение с увеличением"
    },
    {
      id: 9,
      name: "Лечение кариеса системой ICON",
      price: "от 5 000 руб.",
      image: "/images/dentisrty/icon.jpg",
      description: "Инновационное лечение кариеса без сверления"
    },
    {
      id: 10,
      name: "Лечение передних зубов",
      price: "от 7 950 руб.",
      image: "/images/dentisrty/передние зубы.jpg",
      description: "Эстетическое лечение передней группы зубов"
    },
    {
      id: 11,
      name: "Лечение пульпита трехканального зуба",
      price: "от 20 000 руб.",
      image: "/images/dentisrty/3к.jpg",
      description: "Сложное эндодонтическое лечение"
    },
    {
      id: 12,
      name: "Удаление нерва зуба",
      price: "от 6 880 руб.",
      image: "/images/dentisrty/нерв.jpg",
      description: "Депульпация зуба с последующим пломбированием"
    }
  ];

  // Before/After cases data
  const beforeAfterCases = [
    {
      id: 1,
      title: "Отбеливание зубов системой Flash",
      description: "Услуги: Отбеливание зубов системой Flash",
      beforeImage: "/images/dentisrty/до.webp",
      afterImage: "/images/dentisrty/после.webp",
      doctor: "Макаров Лев Александрович"
    },
    {
      id: 2,
      title: "Керамические коронки и виниры Emax",
      description: "Мужчина 50 лет. Обратился в клинику с жалобами на эстетический дефект.",
      beforeImage: "/images/dentisrty/керамика до.webp",
      afterImage: "/images/dentisrty/керамика после.webp",
      doctor: "Арзуманян Гарик Арамаисович"
    },
    {
      id: 3,
      title: "Коррекция положения и скученности зубных рядов",
      description: "Лечение на брекет-системе 1,5 года.",
      beforeImage: "/images/dentisrty/Коррекция до.webp",
      afterImage: "/images/dentisrty/Коррекция после.webp",
      doctor: "Строчек (Таракина) Дарья Сергеевна"
    },
    {
      id: 4,
      title: "Перелом эмали зуба. Эстетическая реставрация зубов",
      description: "",
      beforeImage: "/images/dentisrty/перелом до.webp",
      afterImage: "/images/dentisrty/перелом после.webp",
      doctor: "Шамсутдинова Алия Минифаритовна"
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

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
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
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav className="flex text-sm text-gray-600 ml-0 md:ml-4 lg:ml-8">
            <Link href="/" className="hover:text-emerald-500">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-emerald-500">Услуги</Link>
            <span className="mx-2">/</span>
            <Link href="/services/dentistry" className="hover:text-emerald-500">Стоматология</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Лечение зубов</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and slider */}
      <section className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Лечение зубов в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Современные технологии и безболезненные методы лечения зубов любой сложности
            </p>
          </div>

          {/* Slider */}
          <div className="w-full mx-auto px-4 md:px-0" style={{ maxWidth: '83rem' }}>
            <div className="h-[300px] md:h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-white">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">{slides[currentSlide].title}</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">{slides[currentSlide].subtitle}</p>
                <Link 
                  href={slides[currentSlide].buttonLink} 
                  className="bg-emerald-500 text-white rounded-full px-8 py-3 font-medium hover:bg-emerald-600 transition-colors"
                >
                  {slides[currentSlide].buttonText}
                </Link>
              </div>
              
              {/* Navigation arrows */}
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
              
              {/* Progress dots */}
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
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center ml-0 md:ml-4 lg:ml-8">
            Услуги лечения зубов
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {treatmentServices.map((service) => (
              <Link
                key={service.id}
                href={service.id === 2 ? "/services/dentistry/filling" : 
                      service.id === 1 ? "/services/dentistry/consultation" :
                      service.id === 3 ? "/services/dentistry/caries" :
                      service.id === 4 ? "/services/dentistry/acute-pain" :
                      service.id === 5 ? "/services/dentistry/pulpitis" :
                      service.id === 6 ? "/services/dentistry/periodontitis" :
                      service.id === 7 ? "/services/dentistry/root-canals" : "#"}
                className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="h-48 relative">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-500">{service.price}</span>
                    <span className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors">
                      Записаться
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Information blocks */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-4 md:mx-0">
            {/* First info block */}
            <div className="bg-gray-50 rounded-[20px] p-6 md:p-8">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                Своевременный визит к стоматологу – крайне важное мероприятие. Оно поможет вам избежать многих серьезных осложнений, 
                таких как пульпит, периодонтит и даже потеря зуба. Кроме того, нужно помнить, что предупредить развитие серьезных 
                стоматологических патологий намного проще и дешевле, чем проходить впоследствии длительные курсы лечения.
              </p>
              
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                На современном этапе развития стоматологии доказано, что для профилактики заболеваний зубов и полости рта необходимы:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">
                    <Link href="/services/dentistry/hygiene" className="text-emerald-600 hover:text-emerald-700 underline">
                      профессиональная гигиена
                    </Link> полости рта не менее 2 раз в год;
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">
                    тщательная ежедневная гигиена ротовой полости;
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">
                    использование принципов рационального питания.
                  </span>
                </li>
              </ul>
              
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-6">
                На приеме у <Link href="/doctors" className="text-emerald-600 hover:text-emerald-700 underline">специалистов нашей клиники</Link> вы 
                получите исчерпывающие консультации. Врачи помогут подобрать оптимальный уход за полостью рта, определить периодичность посещения стоматолога.
              </p>
            </div>

            {/* Second info block */}
            <div className="bg-gray-50 rounded-[20px] p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                Когда нужно посетить врача-стоматолога?
              </h3>
              
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                Немедленного лечения требуют заболевания зубов, которые сопровождаются болью, отеком, кровоточивостью, появлением образований 
                на слизистой оболочке полости рта. Однако поводом для визита к стоматологу должны быть и такие симптомы, как:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">наличие полостей в зубе;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">любые сколы, повреждения эмали;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">возникновение шероховатости на эмали;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">появление пятен на поверхностях зуба;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">появление неприятного запаха изо рта;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">
                    повышение чувствительности зубов при воздействии сладких, кислых, холодных или горячих продуктов.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Cases */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 text-center">
            Выполненные работы
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Результаты лечения наших пациентов
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-0">
            {beforeAfterCases.map((case_item) => (
              <div key={case_item.id} className="bg-white rounded-[20px] shadow-lg overflow-hidden">
                <BeforeAfterSlider 
                  beforeImage={case_item.beforeImage}
                  afterImage={case_item.afterImage}
                  title={case_item.title}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 text-center uppercase">
                    {case_item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 text-center">{case_item.description}</p>
                  <p className="text-gray-700 text-sm text-center">
                    <strong>Врач:</strong> {case_item.doctor}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors">
              Посмотреть все работы
            </button>
          </div>
        </div>
      </section>

      {/* Doctors section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
            Наши специалисты по лечению зубов
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
                {/* Врач 1 - Прикуле Елена Юрьевна */}
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image 
                      src="/images/doctors/prikule-elena-yurevna Альтамед-с Одинцово.png" 
                      alt="Прикуле Елена Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={210} 
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Прикуле Елена Юрьевна</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2002 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Стоматолог-терапевт</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>
                
                {/* Врач 2 - Ярулова Вероника Юрьевна */}
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Ярулова Вероника Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50.webp" 
                      alt="Ярулова Вероника Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Ярулова Вероника Юрьевна</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2002 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Стоматолог-терапевт</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>
                
                {/* Врач 3 - Крошкин Александр Дмитриевич */}
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Крошкин-Александр-Дмитриевич-Стоматолог-Альтамед-с-Одинцово-записаться-на-примем-8-_495_-255-44-50.webp" 
                      alt="Крошкин Александр Дмитриевич Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Крошкин Александр Дмитриевич</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2006 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Стоматолог-ортопед</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>
                
                {/* Врач 4 - Рубцов Роман Владимирович */}
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Рубцов-Роман-Владимирович Альтамед-с Одинцово.webp" 
                      alt="Рубцов Роман Владимирович Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Рубцов Роман Владимирович</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2000 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Стоматолог-ортопед</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>

                {/* Врач 5 - Рубцова Ольга Юрьевна */}
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Рубцова-Ольга-Юрьевна_-Стоматолог-хирург-—-Медицинский-центр-Альтамед-С.webp" 
                      alt="Рубцова Ольга Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Рубцова Ольга Юрьевна</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2001 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Стоматолог-хирург, стоматолог-терапевт</p>
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

      {/* Contact form section */}
      <section className="py-6 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="relative overflow-hidden rounded-[30px]" style={{
            background: 'linear-gradient(135deg, #4A9B8E 0%, #3A8D7F 25%, #2E7A6D 50%, #25685C 75%, #1A5247 100%)',
            backgroundImage: `url('/images/dentisrty/фон.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}>
            {/* Абстрактные декоративные элементы */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-emerald-400/15 rounded-full blur-2xl"></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
              {/* Левая часть с формой */}
              <div className="w-full lg:w-3/4 p-6 lg:p-8 z-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Записаться на прием
                </h2>
                <p className="text-white/90 mb-6 text-sm lg:text-base">
                  поля, отмеченные * необходимы к заполнению
                </p>
                
                <form className="mb-4 max-w-2xl">
                  <div className="flex gap-4 mb-4 items-end">
                    <div className="flex-1">
                      <label className="block text-white text-sm font-medium mb-2">Имя</label>
                      <input 
                        type="text" 
                        placeholder="Имя"
                        className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-white text-sm font-medium mb-2">Телефон *</label>
                      <input 
                        type="tel" 
                        placeholder="+7 (___) ____"
                        className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14"
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg h-14 flex-shrink-0"
                    >
                      Заказать звонок
                    </button>
                  </div>
                  
                  <p className="text-white/80 text-xs italic mb-2">
                    Нажимая на кнопку, вы даете согласие на{' '}
                    <span className="underline cursor-pointer hover:text-white">
                      обработку своих персональных данных
                    </span>
                  </p>
                </form>

                <div className="text-white/85 text-sm space-y-1">
                  <p>
                    Запись через сайт является предварительной. Наш сотрудник свяжется с Вами для подтверждения записи к специалисту.
                  </p>
                  <p>
                    Мы гарантируем неразглашение персональных данных и отсутствие рекламных рассылок по указанному вами телефону. Ваши данные необходимы для обеспечения обратной связи и организации записи к специалисту клиники.
                  </p>
                </div>
              </div>
              
              {/* Изображение врача внизу справа */}
              <div className="absolute bottom-0 right-0 lg:right-8 z-10">
                {/* Белый округлый фон для врача */}
                <div className="absolute bottom-0 right-0">
                  <div 
                    className="w-80 h-96 bg-white/20 backdrop-blur-sm rounded-t-[140px] rounded-b-[40px]"
                    style={{
                      clipPath: 'ellipse(160px 200px at 50% 60%)'
                    }}
                  ></div>
                </div>
                
                {/* Изображение врача */}
                <div className="relative z-10">
                  <Image
                    src="/images/dentisrty/врач ф.png"
                    alt="Врач стоматолог"
                    width={350}
                    height={420}
                    className="object-contain max-h-[400px] lg:max-h-[420px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
} 