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
    <Section id="what-is-agent" spacing="md" bare>
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted sm:text-xs sm:tracking-widest">
        {whatIsAgent.eyebrow}
      </p>
      <h2 className="mt-2 text-balance font-display text-2xl font-bold text-text-primary sm:text-3xl md:text-4xl">
        {whatIsAgent.title}
      </h2>
      <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-text-secondary sm:text-base md:text-lg">
        {whatIsAgent.lead}
      </p>

      <div className="mt-8 rounded-card border border-border bg-bg-raised p-4 sm:mt-10 sm:p-5">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted sm:text-xs sm:tracking-widest">
          {whatIsAgent.request.label}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
          {whatIsAgent.request.text}
        </p>
      </div>

      <div className="mt-6 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,14rem),1fr))] sm:gap-4">
        {whatIsAgent.levels.map((level) => (
          <div
            key={level.role}
            className={cn('min-w-0 rounded-card border border-border p-4 sm:p-5', toneBg[level.tone])}
          >
            <p
              className={cn(
                'font-mono text-[0.65rem] uppercase tracking-[0.18em] sm:text-xs sm:tracking-widest',
                toneMap[level.tone],
              )}
            >
              {level.role}
            </p>
            <p className="mt-2 font-display text-base font-semibold text-text-primary sm:text-lg">
              {level.action}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{level.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 sm:mt-12">
        <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl md:text-2xl">
          {whatIsAgent.components.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
          {whatIsAgent.components.note}
        </p>
        <div className="mt-6 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,14rem),1fr))] sm:gap-4">
          {whatIsAgent.components.items.map((item, index) => (
            <div
              key={item.name}
              className="min-w-0 rounded-card border border-border bg-surface p-4 sm:p-5"
            >
              <span className="font-mono text-xs text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-2 font-display text-sm font-semibold text-text-primary sm:text-base">
                {item.name}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 sm:mt-12">
        <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl md:text-2xl">
          {whatIsAgent.boundary.title}
        </h3>
        <div className="mt-4 overflow-hidden rounded-card border border-border sm:mt-6">
          <div className="grid grid-cols-2 border-b border-border bg-bg-raised">
            <p className="min-w-0 px-3 py-2.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-cool sm:px-4 sm:py-3 sm:text-xs sm:tracking-widest">
              {whatIsAgent.boundary.modelLabel}
            </p>
            <p className="min-w-0 border-l border-border px-3 py-2.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-accent sm:px-4 sm:py-3 sm:text-xs sm:tracking-widest">
              {whatIsAgent.boundary.harnessLabel}
            </p>
          </div>
          {whatIsAgent.boundary.pairs.map((pair) => (
            <div
              key={pair.model}
              className="grid grid-cols-2 border-b border-border last:border-b-0"
            >
              <p className="min-w-0 px-3 py-2.5 text-[0.8rem] leading-relaxed text-text-secondary sm:px-4 sm:py-3 sm:text-sm">
                {pair.model}
              </p>
              <p className="min-w-0 border-l border-border px-3 py-2.5 text-[0.8rem] leading-relaxed text-text-secondary sm:px-4 sm:py-3 sm:text-sm">
                {pair.harness}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-card border border-border bg-bg-raised p-4 sm:mt-12 sm:p-5">
        <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl md:text-2xl">
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
          <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
        </a>
      </div>
    </Section>
  )
}