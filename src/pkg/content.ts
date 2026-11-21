export const site = {
  name: 'Harness',
  title: 'Внутри ИИ-агента',
  description:
    'Туториал о том, что такое ИИ-агент на самом деле, где вы теряете данные, деньги и качество ответов, и почему свой harness на 150 строк дешевле готового.',
} as const

export const hero = {
  eyebrow: 'Туториал · 15 минут чтения',
  title: 'Вайб-кодинг дал суперсилу. И теперь вы отдаёте агенту почту.',
  lead: 'Claude — не агент. Агент — это harness. Разберём на пальцах, где вы теряете данные, деньги и качество ответов, и как собрать свой harness на 150 строк.',
  primaryCta: 'Начать читать',
  secondaryCta: 'К оглавлению',
  meta: '4 раздела · схема · пример кода · чек-лист',
} as const

export const toc = {
  eyebrow: 'Содержание',
  title: 'Что внутри',
  items: [
    { id: 'what-is-agent', number: '01', title: 'Что такое агент', duration: '4 мин' },
    { id: 'what-is-dangerous', number: '02', title: 'Что опасно', duration: '4 мин' },
    { id: 'what-is-expensive', number: '03', title: 'Что дорого', duration: '3 мин' },
    { id: 'what-to-do', number: '04', title: 'Что делать', duration: '4 мин' },
  ],
} as const

export const outro = {
  eyebrow: 'Что дальше',
  title: 'Соберите свой harness',
  lead: 'Полный код harness на 150 строк и чек-лист безопасности — в репозитории. Следующий туториал — про память агента.',
  primaryCta: 'Открыть код',
  secondaryCta: 'Следующий туториал',
} as const

export const footer = {
  hashtags: ['#ИИАгенты', '#вайбкодинг', '#Claude', '#промптинъекции'],
  copyright: '© 2025 Harness',
} as const