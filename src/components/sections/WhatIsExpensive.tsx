import { ArrowRight, Check } from 'lucide-react'
import { Section } from '@/components/layout/Section'

export function WhatIsExpensive() {
  return (
    <Section id="what-is-expensive" spacing="md">
      <p className="font-mono text-xs uppercase tracking-widest text-text-muted">03</p>
      <h2 className="mt-2 font-display text-3xl font-bold text-text-primary sm:text-4xl">
        Что дорого
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
        Для маленьких задач готовый harness — оверкилл. Дороже в разработке, сложнее в
        поддержке, больше точек отказа. Свой, собранный точечно, предсказуемее и дешевле.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-card border border-border bg-surface p-5">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Готовый</p>
          <p className="mt-2 font-display text-lg font-semibold text-text-primary">
            Фреймворк из коробки
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-text-secondary">
            <li className="flex gap-2">
              <span className="text-danger">−</span>
              Много слоёв, сложно отлаживать
            </li>
            <li className="flex gap-2">
              <span className="text-danger">−</span>
              Дороже в поддержке
            </li>
            <li className="flex gap-2">
              <span className="text-danger">−</span>
              Больше точек отказа
            </li>
            <li className="flex gap-2">
              <span className="text-success">+</span>
              Готовые интеграции
            </li>
          </ul>
        </div>
        <div className="rounded-card border border-accent/30 bg-accent-soft p-5">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Свой</p>
          <p className="mt-2 font-display text-lg font-semibold text-text-primary">
            150 строк под задачу
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-text-secondary">
            <li className="flex gap-2">
              <Check className="size-4 shrink-0 text-success" aria-hidden="true" />
              Прозрачно, видно каждый шаг
            </li>
            <li className="flex gap-2">
              <Check className="size-4 shrink-0 text-success" aria-hidden="true" />
              Дешевле в поддержке
            </li>
            <li className="flex gap-2">
              <Check className="size-4 shrink-0 text-success" aria-hidden="true" />
              Меньше точек отказа
            </li>
            <li className="flex gap-2">
              <Check className="size-4 shrink-0 text-success" aria-hidden="true" />
              Контроль над данными
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-text-secondary">
        Готовый harness оправдан там, где много инструментов, длинные цепочки и жёсткие SLA.
        Для автоматизации заявок, отчётности, интеграции с внутренними системами — свой.
      </p>

      <a
        href="#what-to-do"
        className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80"
      >
        Дальше: что делать
        <ArrowRight className="size-4" aria-hidden="true" />
      </a>
    </Section>
  )
}