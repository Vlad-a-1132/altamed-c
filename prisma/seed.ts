import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create service categories
  const diagnosticsCategory = await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Диагностика',
      description: 'Современные методы диагностики заболеваний',
    },
  })

  const therapyCategory = await prisma.category.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Терапия',
      description: 'Профессиональное лечение и профилактика заболеваний',
    },
  })

  const surgeryCategory = await prisma.category.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'Хирургия',
      description: 'Хирургические вмешательства любой сложности',
    },
  })

  const pediatricsCategory = await prisma.category.upsert({
    where: { id: 4 },
    update: {},
    create: {
      name: 'Педиатрия',
      description: 'Забота о здоровье детей с самого рождения',
    },
  })

  const preventionCategory = await prisma.category.upsert({
    where: { id: 5 },
    update: {},
    create: {
      name: 'Профилактика',
      description: 'Программы профилактики и раннего выявления заболеваний',
    },
  })

  const dentalCategory = await prisma.category.upsert({
    where: { id: 6 },
    update: {},
    create: {
      name: 'Стоматология',
      description: 'Профессиональный уход за зубами и лечение стоматологических заболеваний',
    },
  })

  // Create services
  await prisma.service.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'УЗИ',
      price: 1500,
      categoryId: diagnosticsCategory.id,
    },
  })

  await prisma.service.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'ЭКГ',
      price: 1200,
      categoryId: diagnosticsCategory.id,
    },
  })

  await prisma.service.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'МРТ',
      price: 5000,
      categoryId: diagnosticsCategory.id,
    },
  })

  await prisma.service.upsert({
    where: { id: 4 },
    update: {},
    create: {
      name: 'Прием терапевта',
      price: 1800,
      categoryId: therapyCategory.id,
    },
  })

  await prisma.service.upsert({
    where: { id: 5 },
    update: {},
    create: {
      name: 'Прием кардиолога',
      price: 2200,
      categoryId: therapyCategory.id,
    },
  })

  await prisma.service.upsert({
    where: { id: 6 },
    update: {},
    create: {
      name: 'Прием невролога',
      price: 2000,
      categoryId: therapyCategory.id,
    },
  })

  // Create doctors
  await prisma.doctor.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Иванов Иван Иванович',
      specialization: 'Терапевт',
      experience: 15,
      description: 'Опытный терапевт с обширной практикой диагностики и лечения различных заболеваний.',
      photo: 'https://placehold.co/400x600/EAECFF/333?text=Доктор',
    },
  })

  await prisma.doctor.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Петрова Елена Сергеевна',
      specialization: 'Кардиолог',
      experience: 10,
      description: 'Специализируется на диагностике и лечении заболеваний сердечно-сосудистой системы.',
      photo: 'https://placehold.co/400x600/EAECFF/333?text=Доктор',
    },
  })

  await prisma.doctor.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'Сидоров Алексей Петрович',
      specialization: 'Невролог',
      experience: 12,
      description: 'Занимается диагностикой и лечением заболеваний центральной и периферической нервной системы.',
      photo: 'https://placehold.co/400x600/EAECFF/333?text=Доктор',
    },
  })

  await prisma.doctor.upsert({
    where: { id: 4 },
    update: {},
    create: {
      name: 'Козлова Мария Дмитриевна',
      specialization: 'Педиатр',
      experience: 8,
      description: 'Детский врач с большим опытом работы. Проводит профилактические осмотры и лечение заболеваний у детей.',
      photo: 'https://placehold.co/400x600/EAECFF/333?text=Доктор',
    },
  })

  // Create articles
  await prisma.article.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Как укрепить иммунитет в осенне-зимний период',
      content: `<p>С наступлением холодного времени года возрастает риск заболеть простудой или гриппом. Именно поэтому так важно заранее позаботиться об укреплении иммунитета.</p>
      
      <h3>Правильное питание</h3>
      <p>Основа крепкого иммунитета — это сбалансированное питание. Включите в свой рацион больше свежих овощей и фруктов, особенно богатых витамином C: цитрусовые, киви, болгарский перец, квашеная капуста. Полезны также продукты, содержащие цинк и селен: орехи, морепродукты, злаки.</p>
      
      <h3>Физическая активность</h3>
      <p>Умеренные физические нагрузки стимулируют работу иммунной системы. Ежедневные прогулки на свежем воздухе, зарядка по утрам, плавание в бассейне — все это поможет организму противостоять инфекциям.</p>
      
      <h3>Полноценный сон</h3>
      <p>Недостаток сна негативно влияет на иммунную систему. Старайтесь спать не менее 7-8 часов в сутки и ложиться в одно и то же время.</p>`,
      image: 'https://placehold.co/800x500/EAECFF/333?text=Статья+1',
    },
  })

  await prisma.article.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Профилактика сердечно-сосудистых заболеваний',
      content: `<p>Сердечно-сосудистые заболевания остаются ведущей причиной смертности во всем мире. Однако большинство из них можно предотвратить, изменив образ жизни и следуя простым рекомендациям.</p>
      
      <h3>Здоровое питание</h3>
      <p>Отдавайте предпочтение пище, богатой овощами, фруктами, цельнозерновыми продуктами, нежирными источниками белка. Ограничьте потребление соли, сахара и трансжиров.</p>
      
      <h3>Регулярная физическая активность</h3>
      <p>Старайтесь уделять физическим упражнениям не менее 150 минут в неделю. Это может быть быстрая ходьба, плавание, езда на велосипеде или любая другая активность, которая вам нравится.</p>
      
      <h3>Контроль веса</h3>
      <p>Лишний вес увеличивает нагрузку на сердце и повышает риск развития сердечно-сосудистых заболеваний. Поддержание нормального веса — важный фактор здоровья сердца.</p>`,
      image: 'https://placehold.co/800x500/EAECFF/333?text=Статья+2',
    },
  })

  // Create contact info
  await prisma.contactInfo.upsert({
    where: { id: 1 },
    update: {},
    create: {
      address: 'г. Москва, ул. Медицинская, 123',
      phone: '+7 (495) 123-45-67',
      email: 'info@altamed-s.ru',
      workHours: 'Пн-Пт: 8:00-20:00, Сб: 9:00-18:00, Вс: выходной',
      mapLocation: 'https://maps.google.com/...',
    },
  })

  console.log('Database has been seeded!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 