"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function PulpitisPage() {
  // Ref for doctors slider
  const doctorsSliderRef = useRef<HTMLDivElement>(null);
  
  // State for price categories
  const [activePriceCategory, setActivePriceCategory] = useState(0);

  // Price categories data for pulpitis
  const priceCategories = [
    {
      title: "Диагностика",
      services: [
        { name: "Дентальный рентгеновский снимок зуба", price: "1 300 руб." },
        { name: "Панорамный рентгеновский снимок зубов", price: "2 200 руб." },
        { name: "Панорамный снимок на аппарате \"Galileos\" (печать на бумаге, без описания)", price: "2 200 руб." }
      ]
    },
    {
      title: "Услуги",
      services: [
        { name: "Анестезия (аппликационная, инъекционная (инфильтрационная, интралигаментарная), проводниковая)", price: "от 550 руб." },
        { name: "Изоляция полости рта OptraGate / постановка коффердама", price: "610 руб." },
        { name: "Проведение пульпотомии постоянного зуба с использованием материалов на основе МТА", price: "5 000 руб." },
        { name: "Лечение необратимого пульпита одноканального временного зуба в одно посещение (изоляция полости рта, механическая и медикаментозная обработка корневых каналов, постоянное пломбирование каналов, изоляция устьев, без учета стоимости пломбы/коронки)", price: "5 200 руб." },
        { name: "Лечение необратимого пульпита временного многокорневого зуба в одно посещение (изоляция полости рта, механическая и медикаментозная обработка корневых каналов, постоянное пломбирование каналов, изоляция устьев, без учета стоимости пломбы/коронки)", price: "6 400 руб." },
        { name: "Лечение острого пульпита / периодонтита или обострения хронического двухканального постоянного зуба (изоляция рабочего поля, механическая, медикаментозная, ультразвуковая обработка, временное или постоянное пломбирование, изоляция устьев, временная пломба)", price: "9 550 руб." },
        { name: "Лечение острого пульпита / периодонтита или обострения хронического одноканального постоянного зуба (изоляция рабочего поля, механическая, медикаментозная, ультразвуковая обработка, временное или постоянное пломбирование, изоляция устьев, временная пломба)", price: "6 500 руб." },
        { name: "Лечение острого пульпита / периодонтита или обострения хронического / одноканального временного зуба (изоляция полости рта, механическая и медикаментозная обработка корневых каналов, временное или постоянное пломбирование, изоляция, временная пломба)", price: "3 000 руб." }
      ]
    }
  ];

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
            <span className="text-gray-800">Лечение пульпита</span>
          </nav>
        </div>
      </section>

      {/* Header section */}
      <section className="py-4 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4 lg:mb-0">
              Лечение пульпита
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

      {/* Main content block with teal background and pulpitis treatment image */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-[20px] p-8 mx-4 md:mx-0 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 text-white mb-6 lg:mb-0">
                <p className="text-lg leading-relaxed">
                  Пульпит зуба – воспалительный процесс, который затрагивает зубной нерв (пульпу). Появление признаков заболевания указывает на необходимость стоматологической помощи, в противном случае воспаление может спровоцировать возникновение периодонтита, пародонтита или пародонтоза.
                </p>
              </div>
              
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <div className="w-80 h-60 rounded-[20px] overflow-hidden bg-white">
                  <Image
                    src="/images/dentisrty/пильпит.jpg"
                    alt="Лечение пульпита"
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

      {/* Показания и противопоказания */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Показания и противопоказания к процедуре
            </h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Симптомы заболевания:</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">самопроизвольная пульсирующая боль, чаще беспокоящая в ночное время;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">глубокая кариозная полость в зубе;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">боль при контакте с температурными раздражителями (горячие и холодные напитки/продукты).</span>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-700">
              Лечение пульпита не проводят при трещинах или переломе зубного корня. В таком случае показано{' '}
              <Link href="/services/dentistry/tooth-extraction" className="text-emerald-600 hover:text-emerald-700 underline">
                удаление зуба
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Виды пульпитов */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Какие виды пульпитов мы лечим?
            </h2>
            
            <p className="text-gray-700 mb-6">
              В нашей стоматологической клинике проводится лечение всех разновидностей пульпитов:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-800">острый пульпит</strong>
                  <span className="text-gray-700"> – лечение ограничивают с учетом характера поражения – очагового или диффузного;</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-800">хронический пульпит</strong>
                  <span className="text-gray-700"> – лечебная методика заключается в проведении хирургической операции по удалению нервно-сосудистой ткани (пульпы) под местной анестезией.</span>
                </div>
              </li>
            </ul>
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
              
              {/* Изображение врача внизу справа - скрыто на мобильных */}
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

      {/* Как проходит лечение пульпита */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Как проходит лечение пульпита в «Альтамед-с»?
            </h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-700">
                  <strong>1) Диагностика.</strong> На этом этапе врач-стоматолог осматривает пациента на рентген –{' '}
                  <Link href="/services/dentistry/diagnostics" className="text-emerald-600 hover:text-emerald-700 underline">
                    прицельный
                  </Link>,{' '}
                  <Link href="/services/dentistry/diagnostics/panoramic" className="text-emerald-600 hover:text-emerald-700 underline">
                    панорамный снимок
                  </Link>{' '}
                  или{' '}
                  <Link href="/services/dentistry/diagnostics/ct" className="text-emerald-600 hover:text-emerald-700 underline">
                    КТ
                  </Link>. На базе полученных сведений стоматолог определяет диагноз, обосновывает причины проблемы.
                </p>
              </div>
              
              <div>
                <p className="text-gray-700">
                  <strong>2) Подготовка к процедуре лечения.</strong> Больной зуб изолируется от попадания слюны и веществ с ротовой полости – одеваются изолирующая система.
                </p>
              </div>
              
              <div>
                <p className="text-gray-700">
                  <strong>3) Анестезия.</strong> Все лечебные манипуляции проходят с обезболиванием. Препарат и дозировка подбираются персонально для каждого пациента.
                </p>
              </div>
              
              <div>
                <p className="text-gray-700">
                  <strong>4) В зависимости от формы заболевания применяются следующие методики лечения:</strong>
                </p>
              </div>
              
              <div className="ml-6 space-y-4">
                <div>
                  <p className="text-gray-700">
                    <strong>• Биологический способ.</strong> Сохранение пульпы пациента путем обработки и закладывания в зубную полость, прилегающую к области воспаления, в{' '}
                    <Link href="/services/dentistry/fillings" className="text-emerald-600 hover:text-emerald-700 underline">
                      пломбировании
                    </Link>. Во время второго визита в случае отсутствия проблем производится окончательная{' '}
                    <Link href="/services/dentistry/restoration" className="text-emerald-600 hover:text-emerald-700 underline">
                      пломбировка
                    </Link> и при необходимости процедура мерителей проводится у других зубов в соседних зубов. Стоматолог расширяет только часть нерва. Стоматологи расширяют{' '}
                    <Link href="/services/dentistry/endodontics" className="text-emerald-600 hover:text-emerald-700 underline">
                      устьи и при необходимых результатах не требуют постановка сливных
                    </Link>.
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-700">
                    <strong>• Частичная ампутация.</strong> При такой реставрации в случае ее обнаружения поражения показан двухэтапный экстракт. В этом случае на первом этапе врач делает а зубную полость и с него полость. При хронической форме заболевания показан зачистить двухэтапный этап в зубную полость и закрыть воздействием хронической рабочего экстракта, а затем уделить стоматолога пломбированием. Основная характеристика касается способы пост-характер составов составы в пост сформированном составленные корневом тканим корневом составить составами лечения.
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-700">
                    <strong>• Полное удаление пульпы и его последующая.</strong> При полном показании нерва врач проводит витальный экстракт. Данные для удаления нервов, корневая система полости витыс по окончания воследуют заполнением. Стоматолог назначает на два специальности. На первом этапе врач удаляется специальных составов и очистка стоматологических стоматологических корневые сформированного канали стола сложение корневого, а также уделяет нерв и его окончания. При корневой форме заболевания показан двухэтапный подход. В этом случае на первом этапе осложненного операции специалист окончание происходить стоматологический и закладывает в зубную полость и очистка корневых каналов, пост временного пломбирование материалами.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Вопрос-ответ */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Вопрос-ответ
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Чем опасно заболевание?</h3>
                <p className="text-gray-700">
                  В запущенных случаях пульпит приводит к возникновению острого или хронического периодонтита, при котором воспалению затрагивает{' '}
                  <Link href="/services/dentistry/periodontics" className="text-emerald-600 hover:text-emerald-700 underline">
                    пародонтальные ткани
                  </Link>. При отсутствии лечения заболевания также возможно возникновение периостита и пародонтита.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Почему появляется пульпит?</h3>
                <p className="text-gray-700">
                  Пульпит развивается при проникновении инфекции в пульпу зуба. Чаще всего это происходит при запущенном кариесе. В числе прочих провоцирующих факторов выделяют:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">травмы зубов;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">хирургические операции на деснах;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">развитие кариеса под коронкой в результате нарушенного её установки;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">некачественные пломбы и действия:{' '}
                      <Link href="/services/dentistry/dental-care" className="text-emerald-600 hover:text-emerald-700 underline">
                        стоматологические манипуляции
                      </Link>.
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Больно ли лечить/удалять?</h3>
                <p className="text-gray-700">
                  Больно ли лечить пульпит зуба? Ответ и стоматологов клиники «Альтамед-с» - одного нетрудно: мы используем безопасные типы обезболивания. Лечение проходит комфортно и анестезия действует также как оказания действующих до в результате безболезненный. При таком обезболивании препарат внедряется под определённую область пациента. Ещё более безболезненный способ -{' '}
                  <Link href="/services/dentistry/anesthesia" className="text-emerald-600 hover:text-emerald-700 underline">
                    компьютерная анестезия
                  </Link>.{' '}
                  При такой анестезии введение препарата под контролем компьютера. При таком метода анестезии достаточно всего контроля порции корней зубов как мелких тканей любой доли препарата.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Сколько времени требуется на лечение?</h3>
                <p className="text-gray-700">
                  Лечение начальной стадии заболевания займет 1-2 визита, для более сложных случаев потребуется совершить 3-4 похода к врачу.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Существуют ли профилактические меры?</h3>
                <p className="text-gray-700">
                  Самой важной профилактической мерой в случае с пульпитом – это современное лечение кариеса зубов. Избежать возникновения заболевания можно с помощью:{' '}
                  <Link href="/services/dentistry/hygiene" className="text-emerald-600 hover:text-emerald-700 underline">
                    систематической гигиены полости рта
                  </Link>{' '}
                  с использованием на составу их других качестве основе из просветлённых компонентов качестве хорошего{' '}
                  <Link href="/services/dentistry/prevention" className="text-emerald-600 hover:text-emerald-700 underline">
                    сбалансированного питания
                  </Link>.
                </p>
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

      {/* Pricing section */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center md:text-left mx-4 md:mx-0">
            Цены на лечение пульпита в Одинцово
          </h2>
          
          <div className="bg-white rounded-[20px] shadow-lg overflow-hidden mx-4 md:mx-0">
            <div className="flex flex-col md:flex-row min-h-[600px]">
              {/* Левая навигационная панель */}
              <div className="w-full md:w-1/3 bg-slate-700">
                <div className="p-6">
                  <div className="space-y-2">
                    {priceCategories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => setActivePriceCategory(index)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                          activePriceCategory === index
                            ? 'bg-emerald-500 text-white'
                            : 'text-gray-300 hover:bg-slate-600 hover:text-white'
                        }`}
                      >
                        <span className="font-medium">{category.title}</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activePriceCategory === index ? 'rotate-90' : ''
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

              {/* Правая панель с ценами */}
              <div className="w-full md:w-2/3 p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {priceCategories[activePriceCategory].title}
                  </h3>
                  <div className="h-1 bg-emerald-500 w-16 rounded"></div>
                </div>

                <div className="space-y-4">
                  {priceCategories[activePriceCategory].services.map((service, serviceIndex) => (
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

          <p className="text-sm text-gray-600 mt-4 mx-4 md:mx-0">
            С полным прайс-листом можно ознакомиться в регистратуре или{' '}
            <Link href="/prices" className="text-emerald-600 hover:text-emerald-700 underline">
              задать вопрос по телефону
            </Link>{' '}
            +8 (495) 255-44-50
          </p>

          <p className="text-xs text-gray-500 mt-2 mx-4 md:mx-0">
            * Администрация клиники принимает все меры по своевременному обновлению размещенного на сайте прайс-листа, однако во избежание возможных недоразумений, советуем уточнять стоимость услуг в регистратуре или в контакт-центре по телефону +8 (495) 255-44-50.
          </p>

          <p className="text-xs text-gray-500 mt-2 mx-4 md:mx-0">
            Размещенный прайс не является офертой. Медицинские услуги оказываются на основании договора.
          </p>
        </div>
      </section>
    </div>
  );
} 