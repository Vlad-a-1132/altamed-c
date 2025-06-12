"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function PeriodontitisPage() {
  // Ref for doctors slider
  const doctorsSliderRef = useRef<HTMLDivElement>(null);
  
  // State for price categories
  const [activePriceCategory, setActivePriceCategory] = useState(0);

  // Price categories data for periodontitis
  const priceCategories = [
    {
      title: "Консультации",
      services: [
        { name: "Прием (осмотр, консультация) врача-стоматолога-терапевта/пародонтолога первичный", price: "2 000 руб." },
        { name: "Прием (осмотр, консультация) врача-стоматолога-терапевта/пародонтолога повторный", price: "1 500 руб." },
        { name: "Прием (осмотр, консультация) врача-стоматолога-терапевта/пародонтолога, к.м.н. первичный, амбулаторный", price: "3 700 руб." },
        { name: "Прием (осмотр, консультация) врача-стоматолога-терапевта/пародонтолога, к.м.н. повторный, амбулаторный", price: "3 500 руб." }
      ]
    },
    {
      title: "Диагностика",
      services: [
        { name: "Дентальный рентгеновский снимок зуба", price: "1 300 руб." },
        { name: "Панорамный рентгеновский снимок зубов", price: "2 200 руб." },
        { name: "Панорамный снимок на аппарате \"Galileos\" (печать на бумаге, без описания)", price: "2 200 руб." },
        { name: "Компьютерная томография челюсти", price: "5 100 руб." }
      ]
    },
    {
      title: "Услуги",
      services: [
        { name: "Анестезия (аппликационная, инъекционная (инфильтрационная, интралигаментарная), проводниковая)", price: "от 550 руб." },
        { name: "Изоляция полости рта OptraGate / постановка коффердама", price: "610 руб." },
        { name: "Лечение обострения генерализованного хронического гингивита / пародонтита (изоляция полости рта, снятие твердых зубных отложений, медикаментозная обработка десны/пародонтальных карманов)", price: "7 000 руб." },
        { name: "Лечение обострения локализованного хронического гингивита / пародонтита (изоляция полости рта, снятие твердых зубных отложений - 1 сегмент, медикаментознеая обработка десны/пародонтальных карманов - 1 сегмент)", price: "2 300 руб." },
        { name: "Лечение острого пульпита / периодонтита или обострения хронического двухканального постоянного зуба (изоляция рабочего поля, механическая, медикаментозная, ультразвуковая обработка, временное или постоянное пломбирование, изоляция устьев, временная пломба", price: "9 550 руб." },
        { name: "Лечение острого пульпита / периодонтита или обострения хронического одноканального постоянного зуба (изоляция рабочего поля, механическая, медикаментозная, ультразвуковая обработка, временное или постоянное пломбирование, изоляция устьев, временная пломба", price: "6 500 руб." },
        { name: "Лечение острого пульпита / периодонтита или обострения хронического / временного многокорневого зуба в одно посещение (изоляция полости рта, механическая и медикаментозная обработка, временное или постоянное пломбирование, изоляция, временная пломба)", price: "4 500 руб." },
        { name: "Лечение острого/обострения хронического генерализованного пародонтита (изоляция полости рта, снятие твердых зубных отложений, кюретаж, медикаментозная обработка, пародонтальная повязка)", price: "14 000 руб." }
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
            <span className="text-gray-800">Лечение периодонтита</span>
          </nav>
        </div>
      </section>

      {/* Header section */}
      <section className="py-4 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4 lg:mb-0">
              Лечение периодонтита
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

      {/* Main content block with teal background and periodontitis image */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-[20px] p-8 mx-4 md:mx-0 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 text-white mb-6 lg:mb-0">
                <p className="text-lg leading-relaxed">
                  Периодонтит - это воспаление соединительнотканной прослойки, которая находится между цементом корня зуба и костной тканью.
                </p>
              </div>
              
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <div className="w-80 h-60 rounded-[20px] overflow-hidden bg-white">
                  <Image
                    src="/images/dentisrty/переодонтит.jpg"
                    alt="Лечение периодонтита"
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

      {/* Что такое периодонтит section */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Что такое периодонтит?
            </h2>
            
            <p className="text-gray-700 mb-6">
              За фиксацию зубов и поддержания их функционального состояния отвечает пародонт. Это комплекс тканей, окружающих зуб, который включает:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">цемент, покрывающий корень зуба;</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">десну — мягкие ткани, защищающие зубной ряд и альвеолярную кость;</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">периодонт — прослойка из соединительной ткани, которая находится между цементом зубного корня и костной прослойкой альвеолярного гребня;</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">альвеолярную костную ткань, к которой прикрепляются зубы.</span>
              </li>
            </ul>
            
            <p className="text-gray-700 mb-4">
              То есть периодонт — это часть пародонта. В нормальном состоянии он не подвержен воздействию инфекции, а наоборот предотвращает возникновение воспалительных процессов. Однако при определенных обстоятельствах может воспалиться сам и тогда возникает заболевание — периодонтит.
            </p>
            
            <p className="text-gray-700">
              Немного статистики: по данным ВОЗ, порядка 30% населения страдает от данного заболевания (в разной степени). Основная группа риска – взрослые старше 30 лет (около 50%), курильщики (вероятность возникновения в 2-3 раза выше), люди с тяжелым диабетом.
            </p>
          </div>
        </div>
      </section>

      {/* Причины развития section */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Причины развития
            </h2>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">
                  <strong>Травма зуба.</strong> Во время падения, драки, регулярной перегрузки зубов (из-за нарушенного прикуса) может развиться травматический периодонтит.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">
                  <strong>Неаккуратное лечение.</strong> Плохая обработка корневого канала приводит к попаданию инфекции и появлению кисты.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">
                  <strong>Хронические заболевания.</strong> Запущенный гайморит, синусит и прочие патологии ЛОР-органов могут стать причиной развития болезни.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Симптоматика section */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Симптоматика
            </h2>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <p className="text-gray-700 mb-6">
                  Общие симптомы - гипертермия, слабость, болезненные ощущения, изменение цвета у зуба. Характерные признаки:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">сверхчувствительность;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">общий дискомфорт;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">очень сильный плохой запах;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">подвижность зубного ряда;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">диастема, трещины.</span>
                  </li>
                </ul>
                
                <p className="text-gray-700 mt-6">
                  Примечание: при хронической форме симптомы могут не проявляться. Поэтому важно периодически посещать стоматологию.
                </p>
              </div>
              
              <div className="lg:w-1/2">
                <div className="rounded-[20px] overflow-hidden bg-white shadow-sm">
                  <Image
                    src="/images/dentisrty/periodontit1.jpg"
                    alt="Симптомы периодонтита"
                    width={500}
                    height={350}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Виды section */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
              Виды
            </h2>
            
            <div className="space-y-8">
              {/* Апикальный */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Апикальный
                </h3>
                <p className="text-gray-700 mb-3">
                  Образуется на верхушке корня зуба, может быть хроническим либо острым.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Причины:</strong> травмы, неудачное лечение.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Признаки:</strong> отек, сильная боль, возможны гнойные выделения, высокая температура.
                </p>
                <p className="text-gray-700">
                  <strong>Лечение:</strong> чистка каналов, хирургическое вмешательство.
                </p>
              </div>

              {/* Маргинальный */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Маргинальный
                </h3>
                <p className="text-gray-700 mb-3">
                  Возникает в области гингивы (верхний слой десны). Не является тяжелым заболеванием, поскольку не разрушает костную ткань и зуб. Однако при игнорировании может быстро перерасти в острую форму.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Признаки:</strong> кровоточивость, плохой запах, отек, покраснение, небольшое увеличение глубины у бударовских карманов.
                </p>
                <p className="text-gray-700">
                  <strong>Лечение:</strong> профчистка.
                </p>
              </div>

              {/* Острый */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Острый
                </h3>
                <p className="text-gray-700 mb-3">
                  Быстро развивается, сопровождается сильной болью. Имеет 2 стадии: серозная и гнойная.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Причины:</strong> травма зуба, попадание инфекции в канал.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Признаки:</strong> пульсирующая боль, отек, может наблюдаться гной, слабость и повышенная температура.
                </p>
                <p className="text-gray-700">
                  <strong>Лечение острого периодонтита:</strong> чистка каналов, прием антибиотиков.
                </p>
              </div>

              {/* Хронический */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Хронический
                </h3>
                <p className="text-gray-700 mb-3">
                  Проходит медленно без симптомов. Диагностируется при помощи снимка.
                </p>
                <p className="text-gray-700 mb-3">
                  Хронический подразделяется на:
                </p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">фиброзный;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">гранулирующий;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">гранулематозный.</span>
                  </li>
                </ul>
                <p className="text-gray-700 mb-3">
                  <strong>Причины:</strong> плохое лечение, запущенный пульпит.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Признаки:</strong> слабая боль, запах, регулярные обострения.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Лечение хронического периодонтита:</strong> чистка каналов, удаление зуба/резекция, прием антибиотиков.
                </p>
                <p className="text-gray-700">
                  Примечание: рекомендуется периодически обращаться к специалисту стоматологической клиники во избежание возможных осложнений (киста, абсцесс, сепсис и прочее). Последние могут привести не только к удалению зуба, но и к более тяжелым последствиям.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Что указывает на необходимость процедуры section */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Что указывает на необходимость процедуры?
            </h2>
            
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="lg:w-1/2">
                <p className="text-gray-700 mb-6">
                  <strong>Показания:</strong>
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">боль различной интенсивности;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">ощущение давления, распирания;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">подвижность зуба;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">формирование свищей;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">увеличение лимфоузлов.</span>
                  </li>
                </ul>
                
                <p className="text-gray-700">
                  К противопоказаниям относятся: тяжелые заболевания, нарушение свертываемости крови, период лактации, беременность, перелом корня.
                </p>
              </div>
              
              <div className="lg:w-1/2">
                <div className="rounded-[20px] overflow-hidden bg-white shadow-sm">
                  <Image
                    src="/images/dentisrty/periodontit2.png"
                    alt="Необходимость лечения периодонтита"
                    width={500}
                    height={350}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Диагностика, подготовка */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Диагностика, подготовка
            </h2>
            
            <p className="text-gray-700 mb-4">
              При обращении к стоматологу доктор выполнит определение состояния зубов и тканей. При необходимости будет сделан{' '}
              <span className="text-emerald-600 font-medium">прицельный</span> либо{' '}
              <span className="text-emerald-600 font-medium">панорамный снимок</span>.
            </p>
            
            <p className="text-gray-700 mb-4">
              Первый позволяет увидеть степень поражения тканей, наличие/отсутствие кист, текущее положение корневых каналов (представляет собой локализованное, небольшое изображение 1 либо нескольких зубных единиц). Второй – показывает все челюсти. Необходим для выявления скрытых очагов инфекции, оценки ближайших зубов, а также используется при подготовке к более сложным вмешательствам.
            </p>
            
            <p className="text-gray-700 mb-4">
              Полученные данные позволяют дать точный диагноз насколько сильно инфекция проникла в ткани. Перед началом лечения нередко назначают{' '}
              <span className="text-emerald-600 font-medium">профессиональную чистку зубов</span> для удаления твердых и мягких отложений.
            </p>
          </div>
        </div>
      </section>

      {/* Лечение section */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
              Лечение
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Консервативное */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-600 mb-4">
                  Консервативное
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Используется, когда инфекция еще не задела инфицированный. Включает 3 этапа:
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-700 mb-2">
                      <strong>1. Вскрытие зуба, удаление зараженных тканей, открытие доступа к каналам</strong>
                    </p>
                    <p className="text-gray-600 text-xs">
                      Делается местная анестезия для полного обезболивания зубов и десны при помощи формацина. Перед этим делается антисептическая анестезия в зоне с обезболивающими, дезинфекция и препарат подбирается так, чтобы защитить лекарство на область десны пока идет инструментальное лечение.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-700 mb-2">
                      <strong>2. Полная механика очистки в зубе разрушенного парения через канал, устранение на рубежные распространение инфекции.</strong>
                    </p>
                    <p className="text-gray-600 text-xs">
                      Даже начинается обработка корневых каналов.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-700 mb-2">
                      <strong>3. Пломбировка каналов.</strong>
                    </p>
                    <p className="text-gray-600 text-xs">
                      Каналы зуба расширяются и очищаются от инфекции, пломбируются стандартной. Затем делается плотная антисептическая для уничтожения остатков бактерий. Для контроля зубного запаха добавляются специальные инструменты. Далее устанавливается временная пломба, чтобы заверить лекарство на область полости так было больше времени для обработки корневых каналов.
                    </p>
                  </div>
                </div>
              </div>

              {/* Хирургическое */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-600 mb-4">
                  Хирургическое
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  При запущенном состоянии применяется хирургические способы лечения. Закрытие используется техника{' '}
                  <span className="text-emerald-600 font-medium">резекции верхушки корня</span>. Процесс имеет несколько важных этапов:
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-700">
                      <strong>1. Вскрытие, открытие доступа к каналу</strong>
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-700">
                      <strong>2. Полное очистительное зуба и обеззараживание и доброкачестве часть. Делее удаления пораженные (травмированные) ткани, делается перепломбировка каналов.</strong>
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-700">
                      <strong>3. Отсудество мнете исправлению на участок</strong>
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-700">
                      <strong>4. Полосное удаление восстановления ткани кости.</strong>
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-700">
                      <strong>5. Во избежание распространения инфекции каналы пломбируются на 2-3 ею до длится, остается только хорошая вертикальная до постоянную удаление.</strong>
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-700">
                      <strong>6. Закладывается лекарство, устанавливается временная пломба.</strong>
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-700">
                      <strong>7. Рентгенография для получения доступа к области постоянного либо коронки.</strong>
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mt-4">
                  Процедура {' '}
                  <span className="text-emerald-600 font-medium">занимает до 60 минут</span>. К ним зубоиспускающие процедуру относятся гемостатический (быстрое удаление корня, цисто и расписание), открытый корпуса.
                </p>
                
                <ul className="space-y-2 mt-4 text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>Гемисекция</strong> – корень зуба полностью удаляется (при кор. коронках). Зуб этом сохраняется.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>Цисто и септопластика</strong> – удаление кисты. Период заживления-лет час подарке давления, строго – гипокальциемия.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>Резекций корней зуба</strong> – снасто трупа некания характера не препинания. Прежде чем ал вызать процедуру (беpix еду потти).
                    </span>
                  </li>
                </ul>
              </div>

              {/* Комплексное */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-600 mb-4">
                  Комплексное
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Отсутствуя 2-3 мм корневой части. Затем делается снятые качества приосевшего вмешательства. Если все хорошо, врач переходит к следующий этапу.
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  Отложечно, 2-3 мм корневой части. Затем делается полное-кость твердения (подготовительные нежные ткани, делается механика операция канделов.
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  Как корни заведомо зугословно производственным герстоаперенной (нежно-кой) и дезинфицирующей процедурой. Далее установливается кратковременно пломба, чтобы защитить лекарство на апробо деся и получении доступе для корневого канала.
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  Пациент обслуживается-кой дали для получения доступа к причину услуги. Выполняется отелотка дериза или лечения структуры. Если все хорошо, корапан перетодят к постоянной пломбировки либо коронки.
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  Пациент обслуживается на необходимой просталеческой разрез-дестиня для получении доступо к прочему участку. Выполняется отелотка дериза или тема и структуре. Если еще хорошо, врач реходят к следующую этапу.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>5. Удаление пораженного участка</strong>
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>6. Заполнение полости костным материалом</strong>
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>7. Наложенности швы</strong>
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mt-4">
                  Разбор снимки спинкини щитки через 7-10 дней примитивный прежде) По исключений результатов дефинитивному сращения десяти к второй снимок для счетения попределений. Если все хорошо, еслано перетодют к постоянной пломбировки либо коронки.
                </p>
              </div>
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
            Цены на лечение периодонтита в Одинцово
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