import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { whatIsAgent } from '@/pkg/content'
import { cn } from '@/pkg/cn'

const toneMap = {
  cool: 'text-cool',
  accent: 'text-accent',
  muted: 'text-text-muted',
} as const

const toneBg = {
  cool: 'bg-cool-soft',
  accent: 'bg-accent-soft',
  muted: 'bg-surface',
} as const

export function WhatIsAgent() {
  return (
    <Section id="what-is-agent" spacing="md">
      <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
        {whatIsAgent.eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold text-text-primary sm:text-4xl">
        {whatIsAgent.title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
        {whatIsAgent.lead}
      </p>

      <div className="mt-10 rounded-card border border-border bg-bg-raised p-5">
        <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
          {whatIsAgent.request.label}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
          {whatIsAgent.request.text}
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {whatIsAgent.levels.map((level) => (
          <div
            key={level.role}
            className={cn('rounded-card border border-border p-5', toneBg[level.tone])}
          >
            <p
              className={cn(
                'font-mono text-xs uppercase tracking-widest',
                toneMap[level.tone],
              )}
            >
              {level.role}
            </p>
            <p className="mt-2 font-display text-lg font-semibold text-text-primary">
              {level.action}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{level.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
          {whatIsAgent.components.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
          {whatIsAgent.components.note}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {whatIsAgent.components.items.map((item, index) => (
            <div key={item.name} className="rounded-card border border-border bg-surface p-5">
              <span className="font-mono text-xs text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-2 font-display text-base font-semibold text-text-primary">
                {item.name}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
          {whatIsAgent.boundary.title}
        </h3>
        <div className="mt-6 overflow-hidden rounded-card border border-border">
          <div className="grid grid-cols-2 border-b border-border bg-bg-raised">
            <p className="px-4 py-3 font-mono text-xs uppercase tracking-widest text-cool">
              {whatIsAgent.boundary.modelLabel}
            </p>
            <p className="border-l border-border px-4 py-3 font-mono text-xs uppercase tracking-widest text-accent">
              {whatIsAgent.boundary.harnessLabel}
            </p>
          </div>
          {whatIsAgent.boundary.pairs.map((pair) => (
            <div
              key={pair.model}
              className="grid grid-cols-2 border-b border-border last:border-b-0"
            >
              <p className="px-4 py-3 text-sm leading-relaxed text-text-secondary">
                {pair.model}
              </p>
              <p className="border-l border-border px-4 py-3 text-sm leading-relaxed text-text-secondary">
                {pair.harness}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-card border border-border bg-bg-raised p-5">
        <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
          {whatIsAgent.withoutHarness.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
          {whatIsAgent.withoutHarness.text}
        </p>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
          {whatIsAgent.bridge.text}
        </p>
        <a
          href={whatIsAgent.bridge.href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80"
        >
          {whatIsAgent.bridge.cta}
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </Section>
  )
}