import { AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { whatIsDangerous } from '@/pkg/content'
import { cn } from '@/pkg/cn'

const toneMap = {
  muted: { label: 'text-text-muted', bg: 'bg-surface', border: 'border-border' },
  danger: { label: 'text-danger', bg: 'bg-danger-soft', border: 'border-danger/30' },
  accent: { label: 'text-accent', bg: 'bg-accent-soft', border: 'border-accent/30' },
} as const

export function WhatIsDangerous() {
  return (
    <Section id="what-is-dangerous" spacing="md" tone="raised" bare>
      <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
        {whatIsDangerous.eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold text-text-primary sm:text-4xl">
        {whatIsDangerous.title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
        {whatIsDangerous.lead}
      </p>

      <div className="mt-10 space-y-6">
        {whatIsDangerous.categories.map((category) => {
          const tone = toneMap[category.tone]
          return (
            <div
              key={category.id}
              className={cn('rounded-card border p-5 sm:p-6', tone.border, tone.bg)}
            >
              <p className={cn('font-mono text-xs uppercase tracking-widest', tone.label)}>
                {category.label}
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-text-primary">
                {category.title}
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
                {category.text}
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-card border border-border bg-bg-base p-4"
                  >
                    <p className="font-display text-sm font-semibold text-text-primary">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-10 overflow-hidden rounded-card border border-danger/30 bg-bg-base">
        <div className="border-b border-border px-4 py-2">
          <p className="font-mono text-xs uppercase tracking-widest text-danger">
            {whatIsDangerous.example.label}
          </p>
        </div>
        <div className="p-4">
          <p className="text-sm leading-relaxed text-text-secondary">{whatIsDangerous.example.text}</p>
          <pre className="mt-4 overflow-x-auto rounded-card bg-bg-raised p-4 font-mono text-xs leading-relaxed text-text-secondary">
            <code>{whatIsDangerous.example.code}</code>
          </pre>
          <div className="mt-4 flex items-start gap-2">
            <AlertTriangle className="mt-0.5 size-4 shrink-0 text-danger" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-text-secondary">
              {whatIsDangerous.example.human}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-card border border-border bg-surface p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
          {whatIsDangerous.mechanism.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
          {whatIsDangerous.mechanism.text}
        </p>
      </div>

      <div className="mt-10">
        <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
          {whatIsDangerous.losses.title}
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {whatIsDangerous.losses.items.map((item) => (
            <div key={item.name} className="rounded-card border border-border bg-surface p-5">
              <p className="font-display text-base font-semibold text-text-primary">{item.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
          {whatIsDangerous.defense.title}
        </h3>
        <div className="mt-4 space-y-3">
          {whatIsDangerous.defense.items.map((item) => (
            <div
              key={item.category}
              className="flex gap-3 rounded-card border border-border bg-surface p-4"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
              <div>
                <p className="font-display text-sm font-semibold text-text-primary">
                  {item.category}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-text-muted">{whatIsDangerous.defense.note}</p>
      </div>

      <div className="mt-10 rounded-card border border-success/30 bg-success-soft p-5 sm:p-6">
        <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl">
          {whatIsDangerous.immediate.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
          {whatIsDangerous.immediate.text}
        </p>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
          {whatIsDangerous.bridge.text}
        </p>
        <a
          href={whatIsDangerous.bridge.href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80"
        >
          {whatIsDangerous.bridge.cta}
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </Section>
  )
}