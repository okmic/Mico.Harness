import { AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { whatToDo } from '@/pkg/content'
import { cn } from '@/pkg/cn'

const toneMap = {
  danger: { label: 'text-danger', bg: 'bg-danger-soft', border: 'border-danger/30' },
  muted: { label: 'text-text-muted', bg: 'bg-surface', border: 'border-border' },
} as const

export function WhatToDo() {
  return (
    <Section id="what-to-do" spacing="md" tone="raised" bare>
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted sm:text-xs sm:tracking-widest">
        {whatToDo.eyebrow}
      </p>
      <h2 className="mt-2 text-balance font-display text-2xl font-bold text-text-primary sm:text-3xl md:text-4xl">
        {whatToDo.title}
      </h2>
      <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-text-secondary sm:text-base md:text-lg">
        {whatToDo.lead}
      </p>

      <div className="mt-5 rounded-card border border-border bg-bg-raised p-4 sm:mt-6">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted sm:text-xs sm:tracking-widest">
          {whatToDo.priority.label}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-text-secondary">{whatToDo.priority.text}</p>
      </div>

      <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
        {whatToDo.items.map((item) => {
          const tone = toneMap[item.tone]
          return (
            <div
              key={item.id}
              className={cn('min-w-0 rounded-card border p-4 sm:p-5 md:p-6', tone.border, tone.bg)}
            >
              <div className="flex min-w-0 items-baseline gap-2 sm:gap-3">
                <span className={cn('shrink-0 font-mono text-xs', tone.label)}>{item.number}</span>
                <p className="min-w-0 font-display text-base font-semibold text-text-primary sm:text-lg">
                  {item.title}
                </p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.why}</p>
              <div className="mt-3 flex min-w-0 items-start gap-2 rounded-card border border-border bg-bg-base p-3">
                <AlertTriangle className="mt-0.5 size-4 shrink-0 text-danger" aria-hidden="true" />
                <p className="min-w-0 text-sm leading-relaxed text-text-secondary">{item.risk}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.how}</p>
              {item.code && (
                <pre className="mt-3 max-w-full overflow-x-auto rounded-card bg-bg-base p-3 font-mono text-[0.7rem] leading-relaxed text-text-secondary sm:p-4 sm:text-xs">
                  <code>{item.code}</code>
                </pre>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-8 rounded-card border border-border bg-surface p-4 sm:mt-10 sm:p-5 md:p-6">
        <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl md:text-2xl">
          {whatToDo.checklist.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{whatToDo.checklist.text}</p>
        <ul className="mt-4 space-y-2">
          {whatToDo.checklist.items.map((item) => (
            <li
              key={item.item}
              className="flex min-w-0 gap-2 text-sm leading-relaxed text-text-secondary"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
              <span className="min-w-0">
                <span className="font-mono text-xs text-accent">{item.item}</span> {item.question}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-text-muted">{whatToDo.checklist.note}</p>
      </div>

      <div className="mt-8 rounded-card border border-accent/30 bg-accent-soft p-4 sm:mt-10 sm:p-5 md:p-6">
        <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl md:text-2xl">
          {whatToDo.final.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
          {whatToDo.final.text}
        </p>
        <a
          href={whatToDo.final.href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80"
        >
          {whatToDo.final.cta}
          <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
        </a>
      </div>
    </Section>
  )
}