import { Section } from '@/components/layout/Section'

const items = [
  {
    title: 'Минимум прав',
    text: 'Harness получает только те инструменты, которые нужны для задачи. Ничего «на всякий случай».',
  },
  {
    title: 'Подтверждение на запись',
    text: 'Удаление и изменение данных — только с явным подтверждением. Без автономии.',
  },
  {
    title: 'Изоляция web search',
    text: 'Всё, что приходит из веба, — недоверенный ввод. Чужие промпты не попадают в контекст как инструкции.',
  },
  {
    title: 'Валидация вывода',
    text: 'Что вернул агент, проверяется до того, как уйдёт в действие или пользователю.',
  },
  {
    title: 'Логи и лимиты',
    text: 'Каждый вызов инструмента логируется. На действия — лимиты, чтобы агент не ушёл в цикл.',
  },
] as const

export function WhatToDo() {
  return (
    <Section id="what-to-do" spacing="md" tone="raised">
      <p className="font-mono text-xs uppercase tracking-widest text-text-muted">04</p>
      <h2 className="mt-2 font-display text-3xl font-bold text-text-primary sm:text-4xl">
        Что делать
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
        Пять пунктов, которые закрывают самые частые дыры. Не серебряная пуля, но минимум,
        без которого агент опасен.
      </p>

      <ol className="mt-10 space-y-3">
        {items.map((item, index) => (
          <li
            key={item.title}
            className="flex gap-4 rounded-card border border-border bg-surface p-5"
          >
            <span className="font-mono text-xs text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="font-display text-base font-semibold text-text-primary">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}