import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { whatIsExpensive } from '@/pkg/content'
import { cn } from '@/pkg/cn'

const toneMap = {
  accent: { label: 'text-accent', bg: 'bg-accent-soft', border: 'border-accent/30' },
  muted: { label: 'text-text-muted', bg: 'bg-surface', border: 'border-border' },
  danger: { label: 'text-danger', bg: 'bg-danger-soft', border: 'border-danger/30' },
} as const

export function WhatIsExpensive() {
  return (
    <Section id="what-is-expensive" spacing="md" bare>
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted sm:text-xs sm:tracking-widest">
        {whatIsExpensive.eyebrow}
      </p>
      <h2 className="mt-2 text-balance font-display text-2xl font-bold text-text-primary sm:text-3xl md:text-4xl">
        {whatIsExpensive.title}
      </h2>
      <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-text-secondary sm:text-base md:text-lg">
        {whatIsExpensive.lead}
      </p>

      <div className="mt-5 rounded-card border border-border bg-bg-raised p-4 sm:mt-6 sm:p-5">
        <p className="max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
          {whatIsExpensive.premise.text}
        </p>
      </div>

      <div className="mt-8 space-y-4 sm:mt-10">
        {whatIsExpensive.costs.map((cost) => {
          const tone = toneMap[cost.tone]
          return (
            <div
              key={cost.id}
              className={cn('min-w-0 rounded-card border p-4 sm:p-5 md:p-6', tone.border, tone.bg)}
            >
              <p
                className={cn(
                  'font-mono text-[0.65rem] uppercase tracking-[0.18em] sm:text-xs sm:tracking-widest',
                  tone.label,
                )}
              >
                {cost.label}
              </p>
              <p className="mt-1 font-display text-base font-semibold text-text-primary sm:text-lg">
                {cost.title}
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
                {cost.text}
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="min-w-0 rounded-card border border-border bg-bg-base p-3 sm:p-4">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-text-muted sm:text-xs sm:tracking-widest">
                    Готовый
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{cost.ready}</p>
                </div>
                <div className="min-w-0 rounded-card border border-border bg-bg-base p-3 sm:p-4">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-accent sm:text-xs sm:tracking-widest">
                    Свой
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{cost.own}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 rounded-card border border-border bg-surface p-4 sm:mt-10 sm:p-5 md:p-6">
        <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl md:text-2xl">
          {whatIsExpensive.math.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
          {whatIsExpensive.math.text}
        </p>
        <div className="mt-4 space-y-2">
          {whatIsExpensive.math.rows.map((row) => (
            <div
              key={row.label}
              className="flex min-w-0 flex-col gap-1 rounded-card border border-border bg-bg-base p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4"
            >
              <p className="min-w-0 font-display text-sm font-semibold text-text-primary">
                {row.label}
              </p>
              <div className="flex items-center justify-between gap-3 sm:justify-end">
                <p className="font-mono text-xs text-text-muted">{row.tokens}</p>
                <p className="font-mono text-sm text-accent">{row.cost}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{whatIsExpensive.math.note}</p>
      </div>

      <div className="mt-8 rounded-card border border-border bg-bg-raised p-4 sm:mt-10 sm:p-5 md:p-6">
        <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl md:text-2xl">
          {whatIsExpensive.boundary.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
          {whatIsExpensive.boundary.text}
        </p>
        <ul className="mt-4 space-y-2">
          {whatIsExpensive.boundary.items.map((item) => (
            <li
              key={item}
              className="flex min-w-0 gap-2 text-sm leading-relaxed text-text-secondary"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 rounded-card border border-accent/30 bg-accent-soft p-4 sm:mt-6 sm:p-5">
        <p className="font-display text-base font-semibold text-text-primary">
          {whatIsExpensive.verdict.title}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {whatIsExpensive.verdict.text}
        </p>
      </div>

      <div className="mt-8 rounded-card border border-success/30 bg-success-soft p-4 sm:mt-10 sm:p-5 md:p-6">
        <h3 className="font-display text-base font-semibold text-text-primary sm:text-lg md:text-xl">
          {whatIsExpensive.immediate.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
          {whatIsExpensive.immediate.text}
        </p>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
          {whatIsExpensive.bridge.text}
        </p>
        <a
          href={whatIsExpensive.bridge.href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80"
        >
          {whatIsExpensive.bridge.cta}
          <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
        </a>
      </div>
    </Section>
  )
}