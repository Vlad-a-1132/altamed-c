"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function ConsultationPage() {
  const [activeTab, setActiveTab] = useState(0);
  
  // Ref for doctors slider
  const doctorsSliderRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { name: "Лечение", href: "/services/dentistry/treatment" },
    { name: "Наши врачи", href: "/doctors" },
    { name: "Цены", href: "/prices" },
    { name: "Заболевания", href: "/services/dentistry/diseases" }
  ];

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
            <span className="text-gray-800">Консультация стоматолога</span>
          </nav>
        </div>
      </section>

      {/* Header section */}
      <section className="py-4 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4 lg:mb-0">
              Консультация стоматолога
            </h1>
            
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all">
                Задать вопрос
              </button>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all">
                Записаться на прием
              </button>
            </div>
          </div>

          {/* Navigation tabs */}
          <div className="flex gap-4 mb-8 ml-0 md:ml-4 lg:ml-8 overflow-x-auto">
            {tabs.map((tab, index) => (
              <Link
                key={index}
                href={tab.href}
                className={`px-6 py-3 rounded-full border whitespace-nowrap transition-colors ${
                  index === 0 
                    ? 'border-emerald-500 text-emerald-600 bg-emerald-50' 
                    : 'border-gray-300 text-gray-600 hover:border-emerald-500 hover:text-emerald-600'
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>

          {/* Main content block */}
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-[20px] p-8 mx-4 md:mx-0 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 text-white mb-6 lg:mb-0">
                <p className="text-lg leading-relaxed">
                  Стоматолог-терапевт — один из первых врачей, к которому обращаются за консультацией с зубной болью или во время первичного визита в стоматологическую клинику.
                </p>
              </div>
              
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <div className="w-80 h-60 rounded-[20px] overflow-hidden bg-white">
                  <Image
                    src="/images/dentisrty/Консультация стоматолога.jpg"
                    alt="Консультация стоматолога"
                    width={320}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information blocks */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="space-y-8 mx-4 md:mx-0">
            {/* First info block */}
            <div className="bg-gray-50 rounded-[20px] p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                Когда необходимо обращаться за помощью к стоматологу?
              </h2>
              
              <p className="text-gray-700 mb-4">
                Обратиться за консультацией стоматолога необходимо в следующих случаях:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">при появлении зубной боли;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">при обнаружении скола, открытой полости внутри зуба, выпадении или деформации пломбы;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">если часто ощущается неприятный запах изо рта;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">для удаления зубного камня и проведения комплексной гигиены полости рта;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">для профилактики стоматологических заболеваний, планового осмотра (один-два раза в год) и получения профессиональных рекомендаций по уходу за зубами и полостью рта в домашних условиях.</span>
                </li>
              </ul>
            </div>

            {/* Second info block */}
            <div className="bg-gray-50 rounded-[20px] p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                Что дает первичная консультация врача-стоматолога?
              </h2>
              
              <p className="text-gray-700 mb-4">
                Проведение консультации позволяет провести детальный осмотр полости рта и обнаружить многие патологии на самых ранних этапах. Это особенно важно, так как жалобы пациента не всегда совпадают с объективной картиной.
              </p>
              
              <p className="text-gray-700 mb-4">
                После этого стоматолог-терапевт может не только предложить решение вопроса, с которым пациент обратился, но и оценить состояние всех зубов и окружающих тканей, в том числе:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">степень повреждения зубов (какие зубы поражены кариесом, требуют лечения, удаления, протезирования или замены пломбы);</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">состояние десен (есть ли участки с нарушением целостности десны, отмечаются ли при открывании рта щелчки или изменения в движениях нижней челюсти);</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">мышечный тонус (симметричность закрывания рта, правильность развития и функционирования мышц, прикус);</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">слюноотделение (обильное или слабое, цвет слюны);</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">качество гигиены полости рта (имеется ли очаги формирования зубного камня).</span>
                </li>
              </ul>
              
              <p className="text-gray-700 mt-6">
                Если имеется такая возможность, непосредственно во время приема в «Альтамед-с» может быть приглашен ортодонт, ортопед, хирург или пародонтолог. По итогам осмотра составляется предварительный план лечения и при необходимости выдается направление на дополнительное обследование или к врачам-стоматологам других специализаций.
              </p>
            </div>
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

      {/* Diagnostics section */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="space-y-8 mx-4 md:mx-0">
            {/* Diagnostics block */}
            <div className="bg-gray-50 rounded-[20px] p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                Какая диагностика проводится во время и после осмотра?
              </h2>
              
              <p className="text-gray-700 mb-4">
                Во время первичного осмотра выполняется прицельный снимок зуба, на который имеется жалоба, или компьютерная томография всей полости рта, чтобы обнаружить или исключить внутренние воспаления, опухолевые образования и кисты.
              </p>
              
              <p className="text-gray-700 mb-4">
                Лабораторная диагностика назначается, как правило, в редких случаях. Например, может потребоваться соскоб, если на слизистой обнаружены повреждения, папилломы или язвы. При выявлении пародонтита пациентам рекомендуется сделать посев на агрессивную флору кармана, чтобы назначить подходящую противовоспалительную терапию.
              </p>
              
              <p className="text-gray-700 mb-4">
                Подготовка к стоматологическим хирургическим операциям потребует сдачи общего анализа крови, крови на инфекционную группу, определения скорости свертывания, показателей иммуноглобулина Е, сахара и кальция.
              </p>
              
              <p className="text-gray-700 mb-4">
                Специалисты «Альтамед-с» консультируют пациентов по наиболее частым жалобам, а также занимаются:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <Link href="/services/dentistry/treatment" className="text-emerald-600 hover:text-emerald-700 underline">лечением кариеса</Link>, 
                    <Link href="/services/dentistry/treatment" className="text-emerald-600 hover:text-emerald-700 underline"> пульпита</Link>, 
                    <Link href="/services/dentistry/treatment" className="text-emerald-600 hover:text-emerald-700 underline"> периодонтита</Link>, 
                    различных <Link href="/services/dentistry/treatment" className="text-emerald-600 hover:text-emerald-700 underline">стоматитов</Link> и других заболеваний полости рта;
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <Link href="/services/dentistry/hygiene" className="text-emerald-600 hover:text-emerald-700 underline">профессиональной гигиеной полости рта</Link>;
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    осветлением и <Link href="/services/dentistry/aesthetic" className="text-emerald-600 hover:text-emerald-700 underline">отбеливанием зубов</Link>, другими вопросами эстетики зубов.
                  </span>
                </li>
              </ul>
              
              <p className="text-gray-700">
                Кроме того, стоматолог-терапевт диагностирует заболевания, которые относятся к компетенции других специалистов, и при необходимости может направить пациента к ортодонту, ортопеду, пародонтологу или хирургу.
              </p>
            </div>

            {/* Appointment booking info */}
            <div className="bg-gray-50 rounded-[20px] p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                Запись на первичную консультацию врача стоматолога
              </h2>
              
              <p className="text-gray-700">
                Узнать подробнее об услуге и записаться на прием можно по телефону или заполнив форму обратной связи. Стоимость данной услуги в «Альтамед-с» можно узнать на вкладке «Цены». Мы работаем для вас с 09:00 до 21:30 по будням и с 09:00 до 21:00 по субботам и воскресеньям без перерывов и выходных.
              </p>
            </div>

            {/* Advantages block */}
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-[20px] p-6 md:p-8 relative overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 text-white">
                  <h2 className="text-xl md:text-2xl font-bold mb-6">
                    Преимущества консультации стоматолога в «Альтамед-с»
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Широкий спектр услуг.</strong><br />
                      Стоматологические отделения для взрослых и детей открыты на базе крупнейших медицинских центров «Альтамед-с», представлена пародонтология, больше возможностей, чем в других стоматологических клиниках. В день визита можно посетить не только стоматолога, но и врачей любых медицинских специальностей (более 30 направлений), пройти компьютерную диагностику и необходимые лабораторные обследования.
                    </p>
                    
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Современное оборудование и материалы.</strong><br />
                      Отделения располагают современным лечебным и диагностическим оборудованием, есть возможность выполнять лечение под микроскопом, с использованием премедикации и под внутривенной седацией (во сне).
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative">
                    {/* Decorative background shapes */}
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-pink-400 rounded-[30px] opacity-80"></div>
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-400 rounded-[20px] opacity-60"></div>
                    <div className="absolute top-1/2 -right-8 w-16 h-16 bg-blue-300 rounded-full opacity-70"></div>
                    
                    {/* Main image container */}
                    <div className="relative z-10 w-80 h-64 md:w-96 md:h-80 rounded-[30px] overflow-hidden bg-white">
                      <Image
                        src="/images/dentisrty/advantage1.png"
                        alt="Стоматологический кабинет Альтамед-с"
                        width={400}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors slider section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
            Наши врачи стоматологи
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
                      className="w-full h-full"
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
                      className="w-full h-full"
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
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Крошкин Александр Дмитриевич</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2006 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Специальность — Стоматолог-ортопед</p>
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
                      className="w-full h-full"
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
                      className="w-full h-full"
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
    </div>
  );
} 