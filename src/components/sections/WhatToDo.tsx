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
    <Section id="what-to-do" spacing="md" tone="raised">
      <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
        {whatToDo.eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold text-text-primary sm:text-4xl">
        {whatToDo.title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
        {whatToDo.lead}
      </p>

      <div className="mt-6 rounded-card border border-border bg-bg-raised p-4">
        <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
          {whatToDo.priority.label}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-text-secondary">{whatToDo.priority.text}</p>
      </div>

      <div className="mt-8 space-y-4">
        {whatToDo.items.map((item) => {
          const tone = toneMap[item.tone]
          return (
            <div
              key={item.id}
              className={cn('rounded-card border p-5 sm:p-6', tone.border, tone.bg)}
            >
              <div className="flex items-baseline gap-3">
                <span className={cn('font-mono text-xs', tone.label)}>{item.number}</span>
                <p className="font-display text-lg font-semibold text-text-primary">{item.title}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.why}</p>
              <div className="mt-3 flex items-start gap-2 rounded-card border border-border bg-bg-base p-3">
                <AlertTriangle className="mt-0.5 size-4 shrink-0 text-danger" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-text-secondary">{item.risk}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.how}</p>
              {item.code && (
                <pre className="mt-3 overflow-x-auto rounded-card bg-bg-base p-4 font-mono text-xs leading-relaxed text-text-secondary">
                  <code>{item.code}</code>
                </pre>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-10 rounded-card border border-border bg-surface p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
          {whatToDo.checklist.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {whatToDo.checklist.text}
        </p>
        <ul className="mt-4 space-y-2">
          {whatToDo.checklist.items.map((item) => (
            <li key={item.item} className="flex gap-2 text-sm leading-relaxed text-text-secondary">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
              <span>
                <span className="font-mono text-xs text-accent">{item.item}</span> {item.question}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-text-muted">{whatToDo.checklist.note}</p>
      </div>

      <div className="mt-10 rounded-card border border-accent/30 bg-accent-soft p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
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
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </Section>
  )
}