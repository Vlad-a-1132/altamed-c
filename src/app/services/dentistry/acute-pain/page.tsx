"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function AcutePainPage() {
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
            <span className="text-gray-800">Лечение острой зубной боли</span>
          </nav>
        </div>
      </section>

      {/* Header section */}
      <section className="py-4 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4 lg:mb-0">
              Лечение острой зубной боли
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
        </div>
      </section>

      {/* Main content block with teal background and woman with tooth pain */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-[20px] p-8 mx-4 md:mx-0 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 text-white mb-6 lg:mb-0">
                <p className="text-lg leading-relaxed">
                  Стоматолог-терапевт – один из первых врачей, к которому обращаются за консультацией с зубной болью или во время первичного визита в стоматологическую клинику.
                </p>
              </div>
              
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <div className="w-80 h-60 rounded-[20px] overflow-hidden bg-white">
                  <Image
                    src="/images/dentisrty/острая зубная боль.jpg"
                    alt="Лечение острой зубной боли"
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

      {/* About dental pain - from screenshot 1 */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Боль – это всегда сигнал о каких-либо нарушениях в человеческом организме. Зубная боль не является исключением. В большинстве случаев причиной острой боли служит кариес, трещины зубов или повреждения зубной эмали. При отсутствии лечения болевой синдром усиливается пульпит или же чувствительность зуба. Кроме того очаг инфекции в ротовой полости (тот кариеса) может стать причиной серьезных респираторных заболеваний - бронхита, синусита, гайморита и др.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Для того, чтобы не запустить проблему, при возникновении зубной боли необходимо своевременно обращаться к врачу-стоматологу. В «Альтамед-с» лечение острой боли проводится квалифицированными стоматологами с многолетним опытом работы. Для наибольшего комфорта пациентов, все манипуляции выполняются под{' '}
              <Link href="/services/dentistry/anesthesia" className="text-emerald-600 hover:text-emerald-700 underline">
                местной анестезией
              </Link>
              {' '}или{' '}
              <Link href="/services/dentistry/sedation" className="text-emerald-600 hover:text-emerald-700 underline">
                общим наркозом
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* When to seek help - from screenshot 1 */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Когда необходимо обращаться за помощью?
            </h2>
            
            <p className="text-gray-700 mb-4">
              Обратиться за консультацией стоматолога необходимо в следующих случаях:
            </p>
            
            <ul className="space-y-3 mb-4">
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
                <span className="text-gray-700">
                  для{' '}
                  <Link href="/services/dentistry/tartar-removal" className="text-emerald-600 hover:text-emerald-700 underline">
                    удаления зубного камня
                  </Link>
                  {' '}и проведения комплексной гигиены полости рта;
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">для профилактики стоматологических заболеваний, планового осмотра (один-два раза в год) и получения профессиональных рекомендаций по уходу за зубами и полостью рта в домашних условиях.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What primary consultation provides - from screenshot 1 */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Что дает первичная консультация?
            </h2>
            
            <p className="text-gray-700 mb-4">
              Проведение консультации позволяет провести детальный осмотр полости рта и обнаружить многие патологии на самых ранних этапах. Это особенно важно, так как жалобы пациента не всегда являются объективной картиной.
            </p>
            
            <p className="text-gray-700 mb-4">
              После этого стоматолог-терапевт может не только предложить решение вопроса, с которым пациент обратился, но и оценить состояние всех зубов и окружающих тканей, в том числе:
            </p>
            
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">степень повреждения зубов (какие зубы поражены кариесом, требуют лечения, удаления, протезирования или замены пломбы);</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">состояние десен (есть ли участки с нарушенной целостностью десны, отмечаются ли при открывании рта щелчки или изменения в движениях нижней челюсти);</span>
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
            
            <p className="text-gray-700">
              Если имеется такая возможность, непосредственно во время приема в «Альтамед-с» может быть приглашен ортодонт, ортопед, хирург или пародонтолог. По итогам осмотра составляется предварительный план лечения и при необходимости выдается направление на дополнительное обследование или к врачам-стоматологам других специализаций.
            </p>
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
                  Заказать обратный звонок
                </h2>
                <p className="text-white/90 mb-6 text-sm lg:text-base">
                  поля, отмеченные * необходимы к заполнению
                </p>
                
                <form className="mb-4 max-w-2xl">
                  {/* Desktop layout - horizontal */}
                  <div className="hidden lg:flex gap-4 mb-4 items-end">
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

                  {/* Mobile layout - vertical */}
                  <div className="lg:hidden space-y-4 mb-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Имя</label>
                      <input 
                        type="text" 
                        placeholder="Имя"
                        className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Телефон *</label>
                      <input 
                        type="tel" 
                        placeholder="+7 (___) ____"
                        className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14"
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg h-14"
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
              <div className="hidden lg:block absolute bottom-0 right-0 lg:right-8 z-10">
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

      {/* Diagnostic methods - from screenshot 2 */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Какая диагностика проводится во время и после осмотра?
            </h2>
            
            <p className="text-gray-700 mb-4">
              Во время первичного осмотра выполняется{' '}
              <Link href="/services/dentistry/diagnostics/visual-examination" className="text-emerald-600 hover:text-emerald-700 underline">
                прицельный снимок зуба
              </Link>, на который имеется жалоба, или{' '}
              <Link href="/services/dentistry/diagnostics/ct" className="text-emerald-600 hover:text-emerald-700 underline">
                компьютерная томография
              </Link>{' '}
              всей полости рта, чтобы обнаружить или исключить внутренние заболевания, скрытые образования и кисты.
            </p>
            
            <p className="text-gray-700 mb-4">
              Лабораторная диагностика назначается, как правило, в редких случаях. Например, может потребоваться соскоб, если на слизистой обнаружены повреждения, папилломы или язвы. При выявлении пародонтита пациентам рекомендуется сделать посев на агрессивную флору кармана, чтобы назначить подходящую противовоспалительную терапию.
            </p>
            
            <p className="text-gray-700">
              Подготовка к стоматологическим хирургическим операциям потребует сдачи общего анализа крови, крови на инфекционную группу, определения скорости свертывания, показателей иммуноглобулина Е, сахара и кальция.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages of treatment - from screenshot 2 */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Преимущества лечения зубной боли в «Альтамед-с»
            </h2>
            
            <ul className="space-y-4">
              <li>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-800">Профессионализм врачей.</strong>
                    <p className="text-gray-700 mt-1">
                      Стоматологи клиники имеют высокую квалификацию и большой опыт работы в лечении зубов и десен. Все услуги оказываются на высоком профессиональном уровне с соответствии с международными стандартами.
                    </p>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-800">Высокотехнологичное оборудование.</strong>
                    <p className="text-gray-700 mt-1">
                      Стоматологические манипуляции проводятся на современном оборудовании лучших мировых производителей. Высокоточные рентгенские аппараты, а также микроскопы 3D-томографы работают на самых ранних стадиях, эффективность лечения при этом - максимальная.
                    </p>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-800">Современные материалы.</strong>
                    <p className="text-gray-700 mt-1">
                      При пломбировании врачи используют исключительно качественные материалы последнего поколения. Это позволяет сделать реставрацию зубов максимально прочной и долговечной.
                    </p>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-800">Использование обезболивания.</strong>
                    <p className="text-gray-700 mt-1">
                      Пациентам «Альтамед-с» доступно эффективное лечение и удаление зуба с острой болью без каких-либо неприятных ощущений. Метод и дозировка обезболивания подбирается в зависимости от индивидуальных особенностей организма пациента, а также сложности проводимого лечения.
                    </p>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-800">Возможности экстренной стоматологической помощи.</strong>
                    <p className="text-gray-700 mt-1">
                      При экстренной зубной боли пациенту не нужно длительное время стоять в очередях или ждаться своей записи. Стоматологическая помощь оказывается в течение часа после обращения в клинику.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Causes of dental pain - from screenshot 3 */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Причины зубной боли
            </h2>
            
            <p className="text-gray-700 mb-6">
              Зубная боль может сигнализировать о различных заболеваниях ротовой полости. Наиболее частые причины возникновения:
            </p>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-start mb-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <Link href="/services/dentistry/caries" className="text-emerald-600 hover:text-emerald-700 underline font-semibold">
                    Кариес
                  </Link>
                </div>
                <p className="text-gray-700 ml-5">
                  Кариозное поражение – самая частая причина развития болевого синдрома в зубах. Под кариесом понимается разрушение эмалевого слоя зуба вследствие деятельности патогенных бактерий. При отсутствии своевременного лечения болезнь может привести к полному разрушению и, соответственно, потере одного или нескольких зубов.
                </p>
              </div>
              
              <div>
                <div className="flex items-start mb-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <Link href="/services/dentistry/pulpitis" className="text-emerald-600 hover:text-emerald-700 underline font-semibold">
                    Пульпит
                  </Link>
                </div>
                <p className="text-gray-700 ml-5">
                  Пульпитом называется воспаление пульпы (внутренней ткани зуба). Заболевание можно заподозрить по наличию интенсивной боли, усиливающейся в ночное время суток. Значительная выраженность боли связана с наличием в пульпе сосудисто-нервных образований. При воспалении нерва боль становится нестерпимой.
                </p>
              </div>
              
              <div>
                <div className="flex items-start mb-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <Link href="/services/dentistry/periodontitis" className="text-emerald-600 hover:text-emerald-700 underline font-semibold">
                    Периодонтит
                  </Link>
                </div>
                <p className="text-gray-700 ml-5">
                  При периодонтите воспалительный процесс возникает в корне зуба и рядом лежащих мягких тканях. Заболевание проявляется резкой болью в области поражения, усиливающейся при надавливании, а также отечностью и патологической подвижностью зуба.
                </p>
              </div>
              
              <div>
                <div className="flex items-start mb-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <Link href="/services/dentistry/periodontitis" className="text-emerald-600 hover:text-emerald-700 underline font-semibold">
                    Пародонтит
                  </Link>
                </div>
                <p className="text-gray-700 ml-5">
                  Болезненность пародонта (мягких тканей, окружающих зубы) приводит к ослаблению связочного аппарата зуба, в результате чего возникает патологическая сдвигаемость и расшатываемость зубов. Эти симптомы часто сопровождаются болезненностью, особенно при пережевывании пищи.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnosis of dental pain - from screenshot 3 */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Диагностика зубной боли
            </h2>
            
            <p className="text-gray-700 mb-6">
              Диагностика стоматологических заболеваний, сопровождающихся зубной болью, начинается на этапе визуального и инструментального осмотра врача-стоматолога. Поставить точный диагноз специалистам «Альтамед-с» помогают такие исследования, как:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">рентгенография;</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">радиовизиография;</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">компьютерная ортопантомография;</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">компьютерная томография зуба.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Treatment of dental pain - from screenshot 4 */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Лечение зубной боли в «Альтамед-с»
            </h2>
            
            <p className="text-gray-700 mb-6">
              Методы лечения острой зубной боли зависят от заболевания, вызвавшего данный синдром. Так, при боли, спровоцированной кариесом, стоматолог производит удаление пораженных зубов с последующим восстановлением зуба пломбировочным материалом. При пульпите необходимо воспалительную пульпу зуба удалить, запломбировать каналы корня зуба.
            </p>
            
            <p className="text-gray-700 mb-6">
              Для лечения периодонтита врачи в первую очередь удаляют гной и экссудат. Место воспаления обрабатывается антисептическим раствором, после чего наносится лекарство, способствующее скорейшему процессу заживления раны. Постоянная пломба ставится после стого завершения противовоспалительного лечения.
            </p>
            
            <p className="text-gray-700 mb-6">
              При существенных формах стоматологических заболеваний может потребоваться экстренное удаление зуба. Удаление зуба с острой болью проводится под адекватным обезболиванием, исключающим болевые ощущения полностью. После удаления пациент получает детальные рекомендации по уходу.
            </p>
            
            <p className="text-gray-700">
              Наиболее часто стоматологи нашей клиники сталкиваются с удалением зуба мудрости (в зубе). Связано это с тем, что у многих пациентов зуб мудрости болит вследствие неправильного роста, когда принимает атипичное положение, приводящее к повреждению рядом расположенных зубов и тканей. Специалисты «Альтамед-с» оказывают как плановую, так и экстренную (срочную) зубную помощь при любых, даже самых сложных, стоматологических заболеваниях. Профессиональный и безжалостный стаж врача, современное оснащение клиники и уютная обстановка делают лечение заболеваний зубов максимально комфортным для пациентов.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] border border-gray-200 shadow-sm mx-4 md:mx-0">
            <div className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">
                Цены на лечение острой зубной боли в Одинцово
              </h2>
              
              <div className="bg-emerald-50 rounded-[15px] p-6 mb-6">
                <h3 className="text-lg font-bold text-emerald-800 mb-4">
                  Консультации
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-emerald-200 last:border-b-0">
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">
                        Прием (осмотр, консультация) врача-стоматолога-терапевта/пародонтолога первичный
                      </p>
                    </div>
                    <div className="ml-4 text-right">
                      <span className="text-xl font-bold text-emerald-600">2 000 руб.</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-emerald-200 last:border-b-0">
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">
                        Прием (осмотр, консультация) врача-стоматолога-терапевта/пародонтолога повторный
                      </p>
                    </div>
                    <div className="ml-4 text-right">
                      <span className="text-xl font-bold text-emerald-600">1 500 руб.</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-4">
                  Точная стоимость лечения определяется после консультации и диагностики
                </p>
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all">
                  Записаться на консультацию
                </button>
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