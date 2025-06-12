"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function RootCanalsPage() {
  // Ref for doctors slider
  const doctorsSliderRef = useRef<HTMLDivElement>(null);

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
            <span className="text-gray-800">Лечение корневых каналов</span>
          </nav>
        </div>
      </section>

      {/* Header section */}
      <section className="py-4 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4 lg:mb-0">
              Лечение корневых каналов
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
        </div>
      </section>

      {/* Main teal content block */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-[20px] p-8 mx-4 md:mx-0 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 text-white mb-6 lg:mb-0">
                <p className="text-lg leading-relaxed">
                  Полноценный уход за зубами значительно снижает риск заболеваний, но не гарантирует их полного отсутствия. 
                  Чтобы сохранить даже сильно поврежденные единицы, имеются различные эффективные методики. Важнейшую 
                  роль среди них играет лечение каналов зуба — процедура, позволяющая сохранить собственные зубы, устранить 
                  боль и предотвратить развитие проблем в будущем.
                </p>
              </div>
              
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <div className="w-80 h-60 rounded-[20px] overflow-hidden bg-white">
                  <Image
                    src="/images/dentisrty/каналы.jpg"
                    alt="Лечение корневых каналов"
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

      {/* Когда необходимо лечение */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Когда необходимо лечение
            </h2>
            
            <p className="text-gray-700 mb-6">
              Оно показано в ситуациях, когда воспаление или инфекция достигают нервов или окружающих структур. Важно вовремя распознать проблему, чтобы не потерять зуб.
            </p>
            
            {/* Пульпит */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Пульпит</h3>
              <p className="text-gray-700 mb-4">
                При данной патологии наблюдается воспалительный процесс во внутренних тканях зуба. Часто это возникает в результате запущенного кариеса, травмы зуба или 
                термического/химического воздействия. Характерные симптомы включают: самопроизвольную пульсирующую боль, усиление болевых ощущений в ночное время и 
                гиперчувствительность к температурным раздражителям.
              </p>
              <p className="text-gray-700 mb-4">Что требуется:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">удаление пораженной пульпы;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">очистка каналов от бактерий;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">пломбирование для предотвращения повторного заражения.</span>
                </li>
              </ul>
            </div>

            {/* Периодонтит */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Периодонтит</h3>
              <p className="text-gray-700 mb-4">
                Если воспаление выходит за пределы корня, поражаются околокорневые ткани — развивается периодонтит. Боль становится постоянной, десна может отекать, 
                появляется подвижность единицы. В этом случае также требуется лечение корней зубов — тщательная очистка каналов и антисептическая обработка, а также 
                противовоспалительная терапия.
              </p>
            </div>

            {/* Киста и гранулема */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Киста и гранулема</h3>
              <p className="text-gray-700 mb-4">
                Хронический воспалительный процесс на верхушке корня может привести к образованию кисты или гранулемы. Это ограниченные очаги воспаления, которые долго не 
                проявляют себя, но могут в любой момент стать источником острой боли и отека. Со временем они приводят к разрушению костной ткани и даже потере зуба.
              </p>
              <p className="text-gray-700 mb-4">Что требуется:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">обследование (рентген, КТ);</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">эндодонтическое лечение корневых каналов для устранения причины воспаления.</span>
                </li>
              </ul>
              <p className="text-gray-700">
                В некоторых случаях может потребоваться хирургическое вмешательство.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Методы лечения */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Методы лечения
            </h2>
            
            <p className="text-gray-700 mb-6">
              Задача врача — сделать лечение комфортным, эффективным, надежным. В помощниках или постоянных врачей клиники используются ОсОвными задачами — удалить 
              инфицированные или воспалительные ткани из корневых каналов, тщательно их обработать и стерильно запломбировать. Сложного используются современные 
              неинвазивные методики, обеспечивающие успешный долгосрочный результат. Основу будет лечение каналов зуба новейших технологий, позволяется выполнять 
              каналов и пломбирование с использованием микроскопа.
              
              Параллельно проводится антибиотическая профилактика специальными препаратами. Это важно для уничтожения бактерий и предупреждения повторного заражения.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Механический и медикаментозный этап */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-600 mb-4">
                  Механический и медикаментозный этап обработка
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Первый и обязательный этап — очистка каналов от воспалительных тканей. Выполняется с помощью специальных эндодонтических инструментов, ручных файлов, 
                  эндомоторных систем.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>Ручной</strong> — применяется при узких или деформируемых каналах. Доктор вручную удаляет ткани, расширяет каналы, придает им правильную форму.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>Машинный ротационный</strong> — быстрый метод для прямых широких каналов. Бокс расширенных каналов позволяет провести качественную обработку. Благодаря различным системам.
                    </span>
                  </li>
                </ul>
                
                <p className="text-gray-700 text-sm mt-4">
                  Параллельно проводится антибиотическая профилактика специальными препаратами. Это важно для уничтожения бактерий и предупреждения повторного заражения.
                </p>
              </div>

              {/* Анестезиология */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-600 mb-4">
                  Анестезиология
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Перед каждой процедурой — стоп у кресла лечения. Для этого применяется анестизиологическое воздействие, позволяющее определить 
                  Жизнь корневого канала с точностью до миллиметра.
                </p>
                <p className="text-gray-700 text-sm">
                  Это позволяет избежать перепломбировки или недопломбировки.
                </p>
              </div>

              {/* Пломбирование */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-600 mb-4">
                  Пломбирование
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  После очистки каналов их необходимо герметично заполнировать, чтобы в будущем внутрь не попросили бактерии. Наиболее часто используется 
                  Латеральная конденсация гуттаперчи. После скорого времени срезу. В каналы вводится биокастий гутта-аперчевский пинчайз, затем добавляется больщая.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>Латеральная конденсация гуттаперчи</strong>. После его горячего времени врезу. В каналы вводится основной гуттаперчевский штифт, затем добавляется больщая по объему часть.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>Вертикальная конденсация горячей гуттаперчи</strong>. Более современный метод. Очаг разогретая до пластичного состояния и плотно вводится в каналы с помощью специальных конденсеров. Создается герметичное заполнение всего объема канала.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>Термофил</strong>. Гуттаперча уже нагреется на пистолете (обычно при высокой или длительной штифт), разогревается и вводится в каналы. Это удобная в предедуцированный метод, который многого иде дпознавании.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>Система Обтуратор</strong>. Применяется устройство, подающее гуттаперчу в разгляженном виде. Это позволяет идеально заполнить даже мельчайшие ответвления каналов.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>Силеры</strong>. Дополнительно к гуттаперче используются специальные цементы и герметики. Они улучшают герметизацию и предотвращают пронисание инфекции.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Микроскопическая эндодонтия
              </h3>
              <p className="text-gray-700">
                В сложных случаях используется дентальный микроскоп. Он позволяет врачу увидеть мельчайшие детали, найти скрытые каналы, устранить переломные 
                инструменты и провести качественное лечение даже при сложнейших клинических ситуациях.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Этапы лечения корневых каналов зуба */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
              Этапы лечения корневых каналов зуба
            </h2>
            
            <div className="space-y-8">
              {/* Этап 1 */}
              <div>
                <h3 className="text-lg font-bold text-emerald-600 mb-4">
                  1. Диагностика и составление плана лечения
                </h3>
                <p className="text-gray-700 mb-4">
                  Чтобы оценить степень поражения зуба, проводится рентгенологическое исследование (прицельный снимок, панорамный снимок или КТ). На его основе врач 
                  определяет жизнеспособность зуба, сколько здоровых тканей останется после препарирования зуба и устранения инфекции, предлагает пациенту план лечения и 
                  варианты восстановления зуба.
                </p>
              </div>

              {/* Этап 2 */}
              <div>
                <h3 className="text-lg font-bold text-emerald-600 mb-4">
                  2. Обезболивание
                </h3>
                <p className="text-gray-700 mb-4">
                  Лечение зуба обязательно проводится <span className="text-emerald-600 font-medium">под местной анестезией</span>.
                </p>
                <p className="text-gray-700 mb-4">Для этого используется:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>аппликационная анестезия</strong> — нанесение на десну анестезирующего геля для обезболивания места введения основного анестетика;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>инфильтрационная или проводниковая анестезия</strong> — инъекционный метод для комплексного обезболивания зубов верхней и нижней челюсти;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>интралигаментарная и внутрикостная компьютерная анестезия</strong> — введение анестетика под компьютерным контролем в периодонтальную связку зуба. Позволяет обезболить 
                      конкретный зуб, используя минимальное количество анестетика.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Этап 3 */}
              <div>
                <h3 className="text-lg font-bold text-emerald-600 mb-4">
                  3. Подготовка полости рта
                </h3>
                <p className="text-gray-700 mb-4">
                  Перед лечением выполняется изоляция полости рта. Чтобы работа в корневых каналах зуба проводилась в стерильных условиях, зуб изолируют от слюны и ротовой 
                  жидкости специальной системой коффердам. Это дает возможность применять для промывания корневых каналов антисептические растворы, не опасаясь, что они 
                  попадут в полость рта пациента.
                </p>
              </div>

              {/* Этап 4 */}
              <div>
                <h3 className="text-lg font-bold text-emerald-600 mb-4">
                  4. Удаление поврежденных тканей
                </h3>
                <p className="text-gray-700 mb-4">
                  Удаляются все пораженные кариесом ткани зуба до здоровых зон и источенные стенки зуба. Далее выполняется обработка полости зуба, раскрытие устьев всех 
                  корневых каналов. Ребчовая ткань удаляется, и врач получает прямолинейный доступ к каналам зуба для их качественной эндодонтической обработки, после 
                  чего зуб приобретает к его расширению и очистке.
                </p>
                <p className="text-gray-700 mb-4">
                  Для обработки и расширения корневых каналов мы используем современные аппараты (эндомоторы) и инструменты, а также ультразвук и систему SAF — с 
                  самоадаптирующимся файлом, которые максимально эффективно под любую форму канала.
                </p>
                <p className="text-gray-700 mb-4">
                  После каждого инструмента зуб обязательно промывается дезинфицирующими растворами. Контроль механической и медикаментозной обработки корневых каналов 
                  выполняется под микроскопом, что позволяет предотвратить риск осложнений.
                </p>
              </div>

              {/* Этап 5 */}
              <div>
                <h3 className="text-lg font-bold text-emerald-600 mb-4">
                  5. Пломбирование каналов
                </h3>
                <p className="text-gray-700 mb-4">
                  Лечение каналов зуба, как правило, проводится в два посещения. После механической, медикаментозной и ультразвуковой обработки корневые каналы зуба 
                  промываются лечебной пастой с гидроокисью кальция для устранения патогенной микрофлоры. Через несколько дней временная паста удаляется, выполняется 
                  медикаментозная, ультразвуковая обработка и корневые каналы плотно заполняются пломбировочным материалом (гуттаперчей с пастой). Для проверки 
                  эффективности заполнения каналов делается контрольный снимок. Затем полость зуба закрывается изолирующей прокладкой и временной пломбой. Коронковая часть 
                  зуба восстанавливается с помощью композитной или керамической реставрации. При большой степени повреждения зуба изготавливается штифтово-культевая 
                  вкладка и индивидуальная коронка.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Методы восстановления зуба */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
              Методы восстановления зуба
            </h2>
            
            <p className="text-gray-700 mb-6">
              После завершения лечения корней зубов, то есть очищения и пломбировки, необходимо обязательно восстановить коронковую часть. Без этой процедуры пораженная 
              единица будет хрупкой — она может сломаться при жевательной нагрузке, потерять герметичность и даже вновь воспалиться. Именно поэтому этап 
              восстановления — важнейшая часть комплексного лечения, позволяющая вернуть зубу службу на многие годы.
            </p>
            
            <p className="text-gray-700 mb-6">
              Оптимальный выбор метода восстановления зависит от того, насколько сильно разрушена коронковая часть. Если повреждение минимальное, достаточно 
              восстановить его обычной пломбой. При более выраженном дефекте, особенно если отсутствует значительная часть твердых тканей, используются вкладки или 
              коронки.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Пломбирование */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-600 mb-4">
                  Пломбирование
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Это самый простой и доступный способ восстановления. Современные пломбы из композитных материалов выглядят естественно, прочно держатся и позволяют 
                  сохранить эстетику улыбки. Но стоит учитывать, что после лечения корневых каналов зуб теряет питание изнутри, становится более хрупким. Поэтому пломба подходит 
                  только в тех случаях, когда стенки единицы в целом сохранны и нагрузка на нее будет умеренной.
                </p>
              </div>

              {/* Вкладка */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-600 mb-4">
                  Вкладка
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Если единица сильно разрушена, но корень и часть стенок все еще могут быть использованы, применяется вкладка. Это своего рода мини-протез, который 
                  изготавливается в лаборатории по индивидуальному слепку. Он точно повторяет форму утраченной части зуба и надежно фиксируется внутри.
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  Вкладки изготавливаются из прочных материалов — керамики, композита или металлокерамики. Не каждому подходят лучшие пломбы, обеспечивают более гораздо лучшее 
                  распределение жевательной нагрузки. Такой способ восстановления особенно популярен для жевательной группы зубов.
                </p>
              </div>

              {/* Коронки */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-600 mb-4">
                  Коронки
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  В случаях, когда осталась лишь корневая часть, а вся верхняя разрушена, лучшим решением становится установка коронки. Это прочная, долговечная конструкция, 
                  которая полностью покрывает остатки зуба, восстанавливая его форму, цвет и функцию. Перед установкой коронки часто применяется штифт или культевая вкладка — 
                  своего рода основа, на которой будет крепиться. Современные коронки выглядят максимально естественно и могут быть изготовлены из керамики, 
                  металлокерамики или циркония в зависимости от эстетических и функциональных требований.
                </p>
                <p className="text-gray-700 text-sm">
                  Если вы заметили болезненность при укусывании, отек десны или у вас есдругой признак пульпит, периодонтит — не откладывайте визит к стоматологу. Клиника «СМ-
                  Стоматология» в Москве всегда готова помочь вам вернуть здоровье зубов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
            Наши специалисты по лечению корневых каналов
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

      {/* Pricing section */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
              Цены на лечение каналов зубов в Одинцово
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Диагностика */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-600 mb-6">
                  Диагностика
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 text-sm">Дентальный рентгеновский снимок зуба</span>
                    <span className="text-emerald-600 font-bold text-sm">1 300 руб.</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 text-sm">Панорамный рентгеновский снимок зубов</span>
                    <span className="text-emerald-600 font-bold text-sm">2 200 руб.</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700 text-sm">Панорамный снимок на аппарате "Galileos" (печать на бумаге, без описания)</span>
                    <span className="text-emerald-600 font-bold text-sm">2 200 руб.</span>
                  </div>
                </div>
              </div>

              {/* Услуги */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-600 mb-6">
                  Услуги
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 text-sm">Анестезия (аппликационная, инъекционная (инфильтрационная, интралигаментарная), проводниковая)</span>
                    <span className="text-emerald-600 font-bold text-sm">от 550 руб.</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 text-sm">Изоляция полости рта OptraGate / постановка коффердама</span>
                    <span className="text-emerald-600 font-bold text-sm">610 руб.</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700 text-sm">Закрытие несформированного апекса корневого канала с использованием материала на основе МТА</span>
                    <span className="text-emerald-600 font-bold text-sm">3 500 руб.</span>
                  </div>
                </div>
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
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-emerald-400/15 rounded-full blur-2xl"></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
              <div className="w-full lg:w-3/4 p-6 lg:p-8 z-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Заказать обратный звонок
                </h2>
                <p className="text-white/90 mb-6 text-sm lg:text-base">
                  поля, отмеченные * необходимы к заполнению
                </p>
                
                <form className="mb-4 max-w-2xl">
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
              
              <div className="hidden lg:block absolute bottom-0 right-0 lg:right-8 z-10">
                <div className="absolute bottom-0 right-0">
                  <div 
                    className="w-80 h-96 bg-white/20 backdrop-blur-sm rounded-t-[140px] rounded-b-[40px]"
                    style={{
                      clipPath: 'ellipse(160px 200px at 50% 60%)'
                    }}
                  ></div>
                </div>
                
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

      {/* Противопоказания */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Противопоказания
            </h2>
            
            <p className="text-gray-700 mb-6">
              Хотя лечение каналов зуба безопасно и эффективно, существуют определенные противопоказания:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold mr-3">1.</span>
                    <span>Невозможность обеспечить должный доступ к каналам (например, при разрушении коронки зуба).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-3">2.</span>
                    <span>Тяжелые общие заболевания и стадии декомпенсации.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-3">3.</span>
                    <span>Невозможность изоляции зуба от слюны (например, при хроническом периодонтите).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-3">4.</span>
                    <span>Недоброкачественность лечения — если зуб подлежит удалению по ортопедическим или хирургическим показаниям.</span>
                  </li>
                </ol>
              </div>
              <div>
                <p className="text-gray-700">
                  Врач всегда оценивает необходимость процедуры, опираясь на клинические данные, снимки и общее состояние пациента.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 